'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BOOKING_URL = "https://superprofile.bio/ps/69646a03e6d47900139d864e";

export default function ThumbnailPackPage() {
  const [showTerms, setShowTerms] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const closeModal = () => {
    setShowTerms(false);
    setAccepted(false);
  };

  return (
    <section className="bg-black text-white min-h-screen">
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 text-sm font-bold uppercase tracking-wide text-white border border-white/20 hover:border-red-500 hover:text-red-500 transition rounded-full"
      >
        ← Back
      </Link>

      {/* HERO */}
      <div className="relative h-[60vh]">
        <Image
          src="/hero-bg.jpg"
          alt="Thumbnail Pack"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
              Thumbnail
              <br />
              <span className="text-red-500">Asset Pack</span>
            </h1>
            <p className="mt-4 max-w-xl text-gray-300">
              Gaming-focused thumbnail assets to help you design
              eye-catching thumbnails faster and more consistently.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 lg:grid-cols-2">

        {/* LEFT — WHAT YOU GET */}
        <div>
          <h2 className="text-3xl font-extrabold uppercase mb-6">
            What You Get
          </h2>

          <p className="text-gray-300 mb-6">
            A <strong>gaming-focused thumbnail asset pack</strong> designed
            to help you create high-quality, attention-grabbing thumbnails
            without starting from zero every time.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li>
              <strong>🖼 Thumbnail Backgrounds</strong><br />
              High-quality gaming-style backgrounds.
            </li>

            <li>
              <strong>🔤 Fonts & Text Styles</strong><br />
              Fonts and text treatments suitable for gaming thumbnails.
            </li>

            <li>
              <strong>✨ Glow & Light Effects</strong><br />
              Elements to add depth, focus, and attention.
            </li>

            <li>
              <strong>🧩 Overlay & Design Assets</strong><br />
              Shapes, highlights, and effects to enhance visual impact.
            </li>

            <li>
              <strong>🎯 Additional Unique Elements</strong><br />
              Exclusive creative assets to help your thumbnails stand out.
            </li>

            <li>
              <strong>⚡ Easy-to-Use Format</strong><br />
              Assets that can be easily combined in your designs.
            </li>
          </ul>

          <p className="mt-6 text-gray-400 italic">
            This pack gives you creative flexibility — without shortcuts
            or guesswork.
          </p>
        </div>

        {/* RIGHT — CTA CARD */}
        <div className="bg-[#111] p-12 md:p-14 lg:p-16 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-extrabold uppercase mb-2">
              Buy Thumbnail Pack
            </h3>

            <p className="text-gray-400 mb-6">
              A ready-to-use asset pack for gaming creators.
              Not a custom thumbnail design service.
            </p>

            {/* Price */}
            <div className="flex items-center justify-between mb-10">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Pack Price
              </span>
              <span className="text-3xl font-extrabold text-red-500">
                ₹349
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowTerms(true)}
            className="w-full bg-red-600 py-4 text-sm font-bold uppercase hover:bg-red-700 transition"
          >
            Continue to Purchase
          </button>
        </div>
      </div>

      {/* TERMS MODAL */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-3xl bg-[#111] rounded-xl shadow-2xl p-8 md:p-10 max-h-[85vh] overflow-y-auto">

            <h2 className="text-2xl font-extrabold uppercase mb-2">
              Terms & Conditions
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Thumbnail Pack – Asset Based
            </p>

            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li>This is an asset-based thumbnail pack, not a custom design service.</li>
              <li>Results depend on your usage, creativity, and content quality.</li>
              <li>The pack is intended for personal use only.</li>
              <li>Once delivered, it is non-refundable and non-transferable.</li>
              <li>Assets must not be shared, resold, or redistributed.</li>
              <li>No guarantees for views, CTR, or channel growth.</li>
            </ul>

            {/* Checkbox */}
            <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-6">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 accent-red-600"
              />
              <p className="text-sm text-gray-300">
                By purchasing, you agree that this pack is a{" "}
                <strong>creative support tool</strong>, not a shortcut
                to virality or guaranteed growth.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-6 py-3 text-sm uppercase border border-white/20 hover:bg-white/10 transition rounded-md"
              >
                Cancel
              </button>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 text-sm font-bold uppercase rounded-md text-center transition
                  ${
                    accepted
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-red-600/40 pointer-events-none cursor-not-allowed"
                  }`}
              >
                I Agree & Continue
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
