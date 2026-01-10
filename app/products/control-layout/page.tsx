'use client';

import Image from "next/image";
import { useState } from "react";

const BOOKING_URL = "https://YOUR-THIRD-PARTY-LINK-HERE";

export default function ControlLayoutPage() {
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
          alt="Control Layout"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
              Control
              <br />
              <span className="text-red-500">Layout Pack</span>
            </h1>
            <p className="mt-4 max-w-xl text-gray-300">
              Ready-to-use BGMI control layouts optimized for different
              finger playstyles and real gameplay situations.
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
            A <strong>ready-to-use BGMI control layout pack</strong>,
            designed for multiple finger playstyles and tested
            through real matches.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li>
              <strong>🎮 Multiple Finger Control Layouts</strong><br />
              Optimized layouts for 2, 3, 4, 5, and 6-finger players.
            </li>

            <li>
              <strong>🖐 Comfort & Performance Focused</strong><br />
              Button placement designed for smoother movement,
              faster reactions, and better control.
            </li>

            <li>
              <strong>🔥 Real-Fight Optimized</strong><br />
              Layouts built to reduce mis-clicks and panic
              in close-range fights.
            </li>

            <li>
              <strong>📐 Manual Setup Guidance</strong><br />
              Due to different screen sizes and aspect ratios,
              control codes cannot be shared. You’ll receive
              clear reference guidance for accurate manual setup.
            </li>
          </ul>

          {/* BONUS */}
          <div className="mt-8">
            <h3 className="text-xl font-extrabold uppercase mb-3">
              Bonus
            </h3>
            <p className="text-gray-300">
              <strong>🎯 Control Layout Mastery Drills</strong><br />
              Practical drills to help you adapt faster,
              improve finger coordination, and fully utilize
              your control layout in real matches.
            </p>
          </div>
        </div>

        {/* RIGHT — CTA CARD */}
        <div className="bg-[#111] p-12 md:p-14 lg:p-16 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-extrabold uppercase mb-4">
              Buy Control Layout Pack
            </h3>
            <p className="text-gray-300 mb-8">
              This is a device-ready control layout pack.
              Not a personalized layout creation service.
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
              Control Layout – Device Ready
            </p>

            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li>This pack includes pre-designed layouts for different finger setups.</li>
              <li>It is not a personalized or custom layout service.</li>
              <li>Control codes are not provided due to screen ratio differences.</li>
              <li>Manual setup and regular practice are required.</li>
              <li>Results may vary based on comfort, habits, and practice time.</li>
              <li>Minor adjustments are allowed, custom creation is not included.</li>
              <li>The product is non-refundable and non-transferable once delivered.</li>
              <li>No guarantees for rank, KD, or competitive performance.</li>
              <li>Sharing, copying, or reselling is strictly prohibited.</li>
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
                By purchasing, you acknowledge that{" "}
                <strong>manual setup, practice, and adaptation</strong>{" "}
                are required to get the best results.
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
