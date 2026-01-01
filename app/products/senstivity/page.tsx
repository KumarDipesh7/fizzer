// app/products/senstivity/page.tsx
'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

type Variant = {
  variant_id: string;
  variant_name: string;
  price: number;
};

type Product = {
  product_name: string;
  variants: Variant[];
};

export default function SensitivityPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariantId, setSelectedVariantId] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    customer_message: "",
  });

  // Fetch product + variants
  useEffect(() => {
    fetch("/api/products/senstivity")
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        if (data.variants?.length > 0) {
          setSelectedVariantId(data.variants[0].variant_id);
        }
      });
  }, []);

  const currentPrice = product?.variants.find(v => v.variant_id === selectedVariantId)?.price || 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedVariantId) {
      alert("Please select your device");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/products/senstivity/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        whatsapp_number: formData.customer_phone,
        variant_id: selectedVariantId,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      alert("Error: " + (data.error || "Payment failed"));
      setLoading(false);
      return;
    }

    // Load Razorpay
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      const options = {
        key: data.key_id,
        amount: data.amount,
        currency: data.currency,
        name: "FizzerN Gaming",
        description: "Custom Sensitivity Settings",
        order_id: data.razorpay_order_id,
        handler: () => {
          window.location.href = `/order-success?order_id=${data.order_id}`;
        },
        prefill: {
          name: formData.customer_name,
          email: formData.customer_email,
          contact: formData.customer_phone,
        },
        theme: { color: "#dc2626" },
      };
      // @ts-ignore
      new window.Razorpay(options).open();
    };
    document.body.appendChild(script);
  };

  return (
    <section className="bg-black text-white min-h-screen">
      {/* HERO */}
      <div className="relative h-[60vh]">
        <Image
          src="/hero-bg.jpg"
          alt="Sensitivity Settings"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
              Pro
              <br />
              <span className="text-red-500">Sensitivity Settings</span>
            </h1>
            <p className="mt-4 max-w-xl text-gray-300">
              Get perfectly tuned sensitivity settings based on your device, playstyle, and experience level.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold uppercase mb-6">
            What This Includes
          </h2>
          <p className="text-gray-300 mb-6">
            Professional sensitivity values optimized for headshots, recoil control, and smooth tracking.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Device-specific sensitivity tuning</li>
            <li>ADS & gyro optimization (if supported)</li>
            <li>Claw / thumb playstyle adjustments</li>
            <li>Step-by-step setup instructions</li>
          </ul>
        </div>

        <div className="bg-[#111] p-12 md:p-14 lg:p-16">
          <h3 className="text-2xl font-extrabold uppercase mb-8">
            Get Your Settings — ₹{currentPrice || '...'}
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
              className="bg-black border border-white/20 px-4 py-3 focus:border-red-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
              className="bg-black border border-white/20 px-4 py-3 focus:border-red-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
              className="bg-black border border-white/20 px-4 py-3 focus:border-red-500 outline-none"
            />

            <select
              value={selectedVariantId}
              onChange={(e) => setSelectedVariantId(e.target.value)}
              required
              className="bg-black border border-white/20 px-4 py-3 focus:border-red-500 outline-none"
            >
              <option value="">Select Your Device</option>
              {product?.variants.map((v) => (
                <option key={v.variant_id} value={v.variant_id}>
                  {v.variant_name} — ₹{v.price}
                </option>
              ))}
            </select>

            <textarea
              rows={4}
              placeholder="Tell us your game and playstyle (optional)"
              onChange={(e) => setFormData({ ...formData, customer_message: e.target.value })}
              className="bg-black border border-white/20 px-4 py-3 focus:border-red-500 outline-none resize-none"
            />

            <button
              type="submit"
              disabled={loading || !selectedVariantId}
              className="mt-2 w-full bg-red-600 py-4 text-sm font-bold uppercase hover:bg-red-700 transition disabled:opacity-70"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}