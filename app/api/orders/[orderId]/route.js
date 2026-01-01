// app/api/orders/[orderId]/route.js
import { supabase } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { orderId } = await params;

  try {
    const { data: order, error } = await supabase
      .from('orders')
      .select(`
        order_id,
        order_number,
        amount,
        payment_status,
        customer_name,
        products (
          product_name,
          delivery_type,
          config
        ),
        order_deliveries (
          resource_url
        )
      `)
      .eq('order_id', orderId)
      .single();

    if (error || !order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    // Build response
    const response = {
      order_id: order.order_id,
      order_number: order.order_number,
      product_name: order.products.product_name,
      amount: order.amount,
      customer_name: order.customer_name,
      payment_status: order.payment_status,
      delivery_type: order.products.delivery_type,
    };

    // Add product-specific delivery info
    if (order.products.delivery_type === 'scheduled_call') {
      response.calendar_link = order.products.config.calendar_link;
    } else if (order.order_deliveries.length > 0) {
      response.resource_url = order.order_deliveries[0].resource_url;
    }

    return NextResponse.json(response);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}