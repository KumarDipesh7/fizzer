'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BOOKING_URL = "https://YOUR-THIRD-PARTY-LINK-HERE";

export default function OneToOnePage() {
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
              A personal guidance session focused on BGMI gameplay
              improvement and content creation growth.
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
            A personal one-to-one session where we work on both sides of your
            journey — <strong>BGMI gameplay</strong> and
            <strong> content creation growth</strong>.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li><strong>🎮 BGMI Gameplay Review</strong> – Detailed analysis of mistakes, habits, and improvement areas.</li>
            <li><strong>⚙️ Personalized BGMI Setup</strong> – Sensitivity, control layout, HUD, and device guidance.</li>
            <li><strong>❓ BGMI Doubt Solving</strong> – Mechanics, aim, mindset, and consistency doubts.</li>
            <li><strong>📈 YouTube & Instagram Growth Strategy</strong> – Practical, realistic growth guidance.</li>
            <li><strong>📊 Channel / Page Review</strong> – Honest feedback on what to fix and improve.</li>
            <li><strong>🧠 Content Planning & Direction</strong> – Ideas, formats, posting strategy.</li>
            <li><strong>🎨 Thumbnail & Editing Doubts</strong> – CTR, editing workflow, clarity.</li>
            <li><strong>🗣 Open Q&A</strong> – Ask anything, no fixed script.</li>
          </ul>

          <p className="mt-6 text-gray-400 italic">
            This session is about clarity, correction, and direction —
            not shortcuts.
          </p>
        </div>

        {/* RIGHT — BOOKING CARD */}
        <div className="bg-[#111] p-12 md:p-14 lg:p-16 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-extrabold uppercase mb-4">
              Book Your Session
            </h3>

            <p className="text-gray-300 mb-8">
              This is a private one-to-one guidance session.
              Slots are limited and reserved exclusively for you.
            </p>
          </div>

          {/* CTA BUTTON */}
          <button
            onClick={() => setShowTerms(true)}
            className="mt-6 w-full bg-red-600 py-4 text-sm font-bold uppercase hover:bg-red-700 transition"
          >
            Book via Official Partner
          </button>
        </div>
      </div>
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-3xl bg-[#111] rounded-xl shadow-2xl p-8 md:p-10 max-h-[85vh] overflow-y-auto">

            {/* Header */}
            <h2 className="text-2xl font-extrabold uppercase mb-2">
              Terms & Conditions
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Please read carefully before continuing
            </p>

            {/* Content */}
            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li>This is a personal guidance and learning session.</li>
              <li>Gameplay improvement or content growth is not guaranteed.</li>
              <li>The session is non-refundable and non-transferable.</li>
              <li>One reschedule is allowed with prior notice.</li>
              <li>Late joining may reduce session duration.</li>
              <li>Guidance is based on information and clips you provide.</li>
              <li>No boosting, cheating, or policy violations.</li>
              <li>Session recordings (if shared) are for personal use only.</li>
              <li>Misuse or disrespect may result in early termination.</li>
            </ul>

            {/* Consent Checkbox */}
            <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-6">
              <input
                type="checkbox"
                id="accept"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 accent-red-600 cursor-pointer"
              />
              <label
                htmlFor="accept"
                className="text-sm text-gray-300 cursor-pointer"
              >
                By continuing, you acknowledge that the session is focused on{" "}
                <strong>learning, clarity, and long-term improvement</strong> — not
                shortcuts.
              </label>
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
                className={`px-6 py-3 text-sm font-bold uppercase rounded-md transition text-center
                  ${
                    accepted
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-red-600/40 cursor-not-allowed pointer-events-none"
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
