// app/api/products/[productSlug]/create-order/route.js
import { supabase } from '@/app/lib/db';
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

function generateOrderToken() {
  return crypto.randomBytes(16).toString('hex');
}

export async function POST(request, { params }) {
  const { productSlug } = await params; // Fixed: was await params (incorrect)

  try {
    const body = await request.json();
    const { 
      customer_name, 
      customer_email, 
      customer_phone, 
      customer_message,
      whatsapp_number = customer_phone, // fallback if not sent
      variant_id // ← New: for variable products
    } = body;

    if (!customer_name || !customer_email || !customer_phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Fetch product
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('*')
      .eq('product_slug', productSlug)
      .eq('is_active', true)
      .single();

    if (productError || !product) {
      return NextResponse.json({ error: 'Product not found or inactive' }, { status: 404 });
    }

    let amountInINR;
    let selectedVariant = null;

    // Handle variable pricing (Sensitivity)
    if (product.pricing_type === 'variable') {
      if (!variant_id) {
        return NextResponse.json({ error: 'Device selection is required' }, { status: 400 });
      }

      const { data: variant, error: variantError } = await supabase
        .from('product_variants')
        .select('variant_id, price, resource_url')
        .eq('variant_id', variant_id)
        .eq('product_id', product.product_id)
        .eq('is_available', true)
        .single();

      if (variantError || !variant) {
        return NextResponse.json({ error: 'Invalid or unavailable device variant' }, { status: 400 });
      }

      amountInINR = variant.price;
      selectedVariant = variant;
    } else {
      // Fixed price (One-to-One)
      amountInINR = product.base_price;
    }

    const amountInPaise = Math.round(amountInINR * 100);
    const order_token = generateOrderToken();

    // Create order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        product_id: product.product_id,
        variant_id: selectedVariant?.variant_id || null,
        customer_name,
        customer_email,
        customer_phone,
        customer_message: customer_message || null,
        customer_data: { whatsapp_number, ...body },
        amount: amountInINR,
        payment_status: 'pending',
        order_token,
      })
      .select()
      .single();

    if (orderError || !order) {
      console.error('Order insert error:', orderError);
      return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }

    // Create Razorpay order
    const shortReceipt = `rcpt_${order.order_id}`;
    const razorpayOrder = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: shortReceipt,
    });

    // Save Razorpay ID
    await supabase
      .from('orders')
      .update({ razorpay_order_id: razorpayOrder.id })
      .eq('order_id', order.order_id);

    return NextResponse.json({
      success: true,
      order_id: order.order_id,
      razorpay_order_id: razorpayOrder.id,
      amount: amountInPaise,
      currency: 'INR',
      key_id: process.env.RAZORPAY_KEY_ID,
    });

  } catch (err) {
    console.error('Create order error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}