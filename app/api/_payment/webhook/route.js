// app/api/payment/webhook/route.js
import { supabase } from '@/app/lib/db';
import { NextResponse } from 'next/server';
import { sendDeliveryEmail } from '@/app/lib/email';
import crypto from 'crypto';

export async function POST(request) {
  try {
    const body = await request.text(); // Raw body for signature
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      return new NextResponse('No signature', { status: 400 });
    }

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.warn('Invalid webhook signature');
      return new NextResponse('Invalid signature', { status: 400 });
    }

    const event = JSON.parse(body);

    if (event.event === 'payment.captured') {
      const razorpayOrderId = event.payload.payment.entity.order_id;

      // Find our order
      const { data: order, error: findError } = await supabase
        .from('orders')
        .select('order_id, payment_status, product_id,razorpay_order_id')
        .eq('razorpay_order_id', razorpayOrderId)
        .single();

      if (findError || !order) {
        console.warn('Order not found in webhook, will retry later:', razorpayOrderId, findError?.message);
        // Don't return error — Razorpay will retry automatically
        return new NextResponse('Order not ready yet, retrying', { status: 200 });      }

      if (order.payment_status === 'completed') {
        return new NextResponse('Already processed', { status: 200 });
      }

      // Update payment status
      const { error: updateError} = await supabase
        .from('orders')
        .update({
          payment_status: 'completed',
          razorpay_payment_id: event.payload.payment.entity.id,
          paid_at: new Date().toISOString(),
        })
        .eq('order_id', order.order_id);

      if (updateError) {
        console.error('DB update failed in webhook:', updateError);
        // Still return 200 so Razorpay doesn't spam retries too hard
        return new NextResponse('Update failed, will retry', { status: 200 });
      }

      // Trigger delivery
      await deliverOrder(order.order_id, order.product_id);

      return new NextResponse('Webhook processed', { status: 200 });
    }

    return new NextResponse('Event ignored', { status: 200 });
  } catch (err) {
    console.error('Webhook error:', err);
    return new NextResponse('Server error', { status: 500 });
  }
}

// Delivery function (we'll expand this later for all products)
async function deliverOrder(orderId, productId) {
  const { data: product, error: productError } = await supabase
    .from('products')
    .select('delivery_type, config, product_name')
    .eq('product_id', productId)
    .single();

  if (productError || !product) {
    console.error('Product not found for delivery:', productId);
    return;
  }

  // Fetch order details once
  const { data: orderDetails, error: detailsError } = await supabase
    .from('orders')
    .select('customer_name, customer_email, order_number, variant_id')
    .eq('order_id', orderId)
    .single();

  if (detailsError || !orderDetails) {
    console.error('Failed to fetch order details:', detailsError);
    return;
  }

  let resourceUrl = null;
  let emailHtml = '';

  if (product.delivery_type === 'scheduled_call') {
    resourceUrl = product.config?.calendar_link;
    emailHtml = `
      <h2>Book Your One-to-One Session</h2>
      <p>Click the link below to schedule your call:</p>
      <p><a href="${resourceUrl}" style="background:#dc2626;color:white;padding:12px 24px;text-decoration:none;font-weight:bold;">Book Now →</a></p>
    `;
  } else if (product.delivery_type === 'drive_link' || product.delivery_type === 'direct_download') {
    // For variant products like Sensitivity
    if (orderDetails.variant_id) {
      const { data: variant } = await supabase
        .from('product_variants')
        .select('resource_url')
        .eq('variant_id', orderDetails.variant_id)
        .single();

      if (variant?.resource_url) {
        resourceUrl = variant.resource_url;
      }
    }

    emailHtml = `
      <h2>Your Files Are Ready!</h2>
      <p>Download your custom settings below:</p>
      <p><a href="${resourceUrl}" style="background:#dc2626;color:white;padding:12px 24px;text-decoration:none;font-weight:bold;">Download Now →</a></p>
      <p><small>Link expires in 90 days.</small></p>
    `;
  }

  if (!resourceUrl) {
    console.error('No resource URL found for delivery');
    return;
  }

  // Create delivery record
  await supabase.from('order_deliveries').insert({
    order_id: orderId,
    delivery_method: 'website_display',
    resource_type: product.delivery_type === 'scheduled_call' ? 'calendar_link' : 'file_link',
    resource_url: resourceUrl,
    delivered_at: new Date().toISOString(),
  });

  // Send email
  await sendDeliveryEmail({
    to: orderDetails.customer_email,
    customer_name: orderDetails.customer_name,
    order_number: orderDetails.order_number,
    product_name: product.product_name,
    resource_link: resourceUrl, // renamed for generic use
    email_body: emailHtml,
  });

  console.log(`Delivery completed for order ${orderId}: ${resourceUrl}`);
}