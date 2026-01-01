// app/order-success/page.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Order = {
  order_id: number;
  order_number: string;
  product_name: string;
  amount: number;
  customer_name: string;
  payment_status: string;
  delivery_type: string;
  calendar_link?: string; // from product config
  resource_url?: string;  // for drive_link or download
};

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("order_id");

    if (!orderId) {
      setError("No order ID found");
      setLoading(false);
      return;
    }

    // Fetch order details from backend
    fetch(`/api/orders/${orderId}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setOrder(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load order details");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Loading your order...</p>
      </div>
    );
  }

  if (error || !order || order.payment_status !== "completed") {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-red-500">Payment Issue</h1>
          <p className="text-xl mb-4">{error || "This order is not completed yet."}</p>
          <Link href="/" className="inline-block bg-red-600 px-8 py-3 font-bold uppercase hover:bg-red-700 transition">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Success Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase mb-6">
            Payment Successful! 🎉
          </h1>
          <p className="text-2xl text-gray-300">
            Thank you, <span className="text-white font-bold">{order.customer_name}</span>
          </p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-[#111] p-10 rounded-lg max-w-2xl mx-auto mb-12">
          <div className="grid grid-cols-2 gap-6 text-lg">
            <div>
              <p className="text-gray-400">Order Number</p>
              <p className="font-bold text-red-500 text-xl">{order.order_number}</p>
            </div>
            <div>
              <p className="text-gray-400">Product</p>
              <p className="font-bold">{order.product_name}</p>
            </div>
            <div>
              <p className="text-gray-400">Amount Paid</p>
              <p className="font-bold">₹{order.amount.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-400">Status</p>
              <p className="font-bold text-green-500">Completed</p>
            </div>
          </div>
        </div>

        {/* Delivery Content - Changes Based on Product */}
        <div className="max-w-4xl mx-auto text-center">
          {order.delivery_type === "scheduled_call" && (
            <div className="bg-[#111] p-12 rounded-lg">
              <h2 className="text-3xl font-extrabold mb-6">Book Your Session Now</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Your one-to-one coaching session is confirmed! Use the link below to pick a time that works for you.
              </p>
              <a
                href={order.calendar_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 px-10 py-4 text-lg font-bold uppercase hover:bg-red-700 transition"
              >
                Open Calendly Booking Link →
              </a>
              <p className="text-gray-400 mt-8">
                This link has also been sent to your email & WhatsApp.
              </p>
            </div>
          )}

          {(order.delivery_type === "drive_link" || order.delivery_type === "direct_download") && (
            <div className="bg-[#111] p-12 rounded-lg">
              <h2 className="text-3xl font-extrabold mb-6">Your Files Are Ready!</h2>
              <p className="text-gray-300 mb-8">
                Download your custom sensitivity settings or control layout below.
              </p>
              <a
                href={order.resource_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 px-10 py-4 text-lg font-bold uppercase hover:bg-red-700 transition"
              >
                Download Now →
              </a>
              <p className="text-gray-400 mt-8">
                Link expires in 90 days. Also sent to your email.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <p className="text-gray-400 mb-6">
            Questions? Reach out on WhatsApp or email.
          </p>
          <Link
            href="/"
            className="inline-block bg-red-600 px-8 py-3 font-bold uppercase hover:bg-red-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}