'use client';

import Image from "next/image";
import { useState } from "react";

const BOOKING_URL = "https://YOUR-THIRD-PARTY-LINK-HERE";

export default function VideoEditingPackPage() {
  const [showTerms, setShowTerms] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const closeModal = () => {
    setShowTerms(false);
    setAccepted(false);
  };

  return (
    <section className="bg-black text-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[60vh]">
        <Image
          src="/hero-bg.jpg"
          alt="Video Editing Pack"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
              Video Editing
              <br />
              <span className="text-red-500">Asset Pack</span>
            </h1>
            <p className="mt-4 max-w-xl text-gray-300">
              Gaming-focused video editing assets to improve quality,
              pacing, and overall viewing experience.
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
            A <strong>gaming-focused video editing asset pack</strong>
            designed to help you edit faster, stay consistent,
            and focus more on storytelling.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li>
              <strong>🎵 Background Music (BGM)</strong><br />
              Gaming-style music suitable for reels and long-form videos.
            </li>

            <li>
              <strong>🔊 Sound Effects (SFX)</strong><br />
              Effects for kills, transitions, highlights, and emphasis.
            </li>

            <li>
              <strong>🔤 Fonts & Text Styles</strong><br />
              Fonts commonly used in gaming edits for captions and emphasis.
            </li>

            <li>
              <strong>🎮 Gaming Visual Assets</strong><br />
              Overlays, motion elements, highlights, and effects.
            </li>

            <li>
              <strong>🔁 Transitions & Editing Elements</strong><br />
              Ready-to-use transitions to improve pacing and flow.
            </li>

            <li>
              <strong>✨ Additional Unique Assets</strong><br />
              Exclusive creative elements to enhance your edits.
            </li>

            <li>
              <strong>🧩 Beginner-Friendly Usage</strong><br />
              Easy-to-apply assets with clear guidance.
            </li>
          </ul>

          <p className="mt-6 text-gray-400 italic">
            This pack helps you focus on retention and storytelling —
            instead of searching for assets every time.
          </p>
        </div>

        {/* RIGHT — CTA CARD */}
        <div className="bg-[#111] p-12 md:p-14 lg:p-16 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-extrabold uppercase mb-4">
              Buy Video Editing Pack
            </h3>
            <p className="text-gray-300 mb-8">
              A ready-to-use asset pack for gaming creators.
              Not a done-for-you editing service.
            </p>
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
              Video Editing Pack – Asset Based
            </p>

            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li>This is an asset-based editing pack, not a done-for-you service.</li>
              <li>Editing results depend on usage and editing practice.</li>
              <li>The pack is intended for personal use only.</li>
              <li>Once delivered, the product is non-refundable and non-transferable.</li>
              <li>Redistribution, reselling, or sharing of assets is strictly prohibited.</li>
              <li>Music and sound effects are for content creation use only.</li>
              <li>No guarantees are provided for views, retention, or growth.</li>
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
                <strong>creative support tool</strong>, not a shortcut to success.
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
