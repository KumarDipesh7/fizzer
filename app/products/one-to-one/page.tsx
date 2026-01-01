// app/products/one-to-one/page.tsx
'use client';

import Image from "next/image";
import { useState } from "react";

export default function OneToOnePage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "", // This will be used as both phone & WhatsApp
    customer_message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Call your create-order API
      const res = await fetch("/api/products/one-to-one/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: formData.customer_name,
          customer_email: formData.customer_email,
          customer_phone: formData.customer_phone,
          whatsapp_number: formData.customer_phone, // Same as phone
          customer_message: formData.customer_message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert("Order creation failed: " + (data.error || "Unknown error"));
        setLoading(false);
        return;
      }

      // Load Razorpay script dynamically
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => openRazorpay(data);
      script.onerror = () => {
        alert("Failed to load Razorpay");
        setLoading(false);
      };
      document.body.appendChild(script);

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  const openRazorpay = (orderData: any) => {
    const options = {
      key: orderData.key_id,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "FizzerN Gaming",
      description: "One-to-One Coaching Session",
      order_id: orderData.razorpay_order_id,
      handler: async function (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) {
        const verifyRes = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            order_id: orderData.order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            }),
        });

        const verifyData = await verifyRes.json();

        if (verifyData.success) {
            window.location.href = `/order-success?order_id=${orderData.order_id}`;
        } else {
            alert('Payment verification failed: ' + (verifyData.error || 'Unknown error'));
        }
      },
      prefill: {
        name: formData.customer_name,
        email: formData.customer_email,
        contact: formData.customer_phone,
      },
      theme: {
        color: "#dc2626", // red-600
      },
      modal: {
        ondismiss: () => {
          setLoading(false);
        },
      },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="bg-black text-white min-h-screen">
      {/* HERO */}
      <div className="relative h-[60vh]">
        <Image
          src="/hero-bg.jpg"
          alt="One to One Coaching"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
              One to One
              <br />
              <span className="text-red-500">Coaching Session</span>
            </h1>
            <p className="mt-4 max-w-xl text-gray-300">
              Personalized 1-on-1 gameplay coaching to fix your setup,
              sensitivity, and decision-making like a pro.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 lg:grid-cols-2">
        
        {/* LEFT — DESCRIPTION */}
        <div>
          <h2 className="text-3xl font-extrabold uppercase mb-6">
            What You Get
          </h2>

          <p className="text-gray-300 mb-6">
            A 60-minute live video call where I personally review your gameplay,
            fix your sensitivity, optimize controls, and answer all your questions.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Personal gameplay review</li>
            <li>Custom sensitivity setup</li>
            <li>HUD & control optimization</li>
            <li>Live Q&A session</li>
            <li>Recording available on request</li>
          </ul>
        </div>

        {/* RIGHT — FORM */}
        <div className="bg-[#111] p-10">
          <h3 className="text-2xl font-extrabold uppercase mb-6">
            Book Your Session — ₹1499
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="customer_name"
              placeholder="Your Name"
              required
              value={formData.customer_name}
              onChange={handleChange}
              className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red-500"
            />

            <input
              type="email"
              name="customer_email"
              placeholder="Email Address"
              required
              value={formData.customer_email}
              onChange={handleChange}
              className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red-500"
            />

            <input
              type="tel"
              name="customer_phone"
              placeholder="Phone / WhatsApp Number"
              required
              value={formData.customer_phone}
              onChange={handleChange}
              className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red-500"
            />

            <textarea
              name="customer_message"
              placeholder="Tell us about your game, device, current issues & goals (optional)"
              rows={4}
              value={formData.customer_message}
              onChange={handleChange}
              className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red-500 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 py-3 text-sm font-bold uppercase hover:bg-red-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}