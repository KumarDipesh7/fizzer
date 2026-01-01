// app/api/payment/verify/route.js
import { supabase } from '@/app/lib/db';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    const body = await request.json();
    const { order_id, razorpay_payment_id, razorpay_order_id, razorpay_signature } = body;

    if (!order_id || !razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing payment details' }, { status: 400 });
    }

    // Verify signature (Razorpay official method)
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Update order in DB
    const { data: order, error: fetchError } = await supabase
      .from('orders')
      .select('razorpay_order_id, payment_status')
      .eq('order_id', order_id)
      .single();

    if (fetchError || !order || order.razorpay_order_id !== razorpay_order_id) {
      return NextResponse.json({ error: 'Order mismatch' }, { status: 400 });
    }

    if (order.payment_status === 'completed') {
      return NextResponse.json({ success: true, already_completed: true });
    }

    // Mark as completed
    const { error: updateError } = await supabase
      .from('orders')
      .update({
        payment_status: 'completed',
        razorpay_payment_id,
        razorpay_signature,
        paid_at: new Date().toISOString(),
      })
      .eq('order_id', order_id);

    if (updateError) {
      console.error('DB update error:', updateError);
      return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
    }

    // TODO: Trigger delivery here (email, create delivery record) - we'll add next

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Verify error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}