'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DEVICE_OPTIONS = [
  { label: "iPhone", url: "https://superprofile.bio/ps/69644efe172da70013b9b253" },
  { label: "OnePlus", url: "https://superprofile.bio/ps/696454abe6d479001399aaae" },
  { label: "Samsung", url: "https://superprofile.bio/ps/6964562d172da70013ba8506" },
  { label: "Infinix", url: "https://superprofile.bio/ps/696456bfe6d479001399f46c" },
  { label: "Motorola", url: "https://superprofile.bio/ps/69645949172da70013baf4da" },
  { label: "Nothing", url: "https://superprofile.bio/ps/696459e9172da70013bb0cfd" },
  { label: "Oppo", url: "https://superprofile.bio/ps/69645b70172da70013bb4b94" },
  { label: "Realme", url: "https://superprofile.bio/ps/69645bede6d47900139ab6c0" },
  { label: "Redmi / Poco / Xiaomi", url: "https://superprofile.bio/ps/69645cc538d1870014f9f6be" },
];

export default function SensitivityPage() {
  const [showTerms, setShowTerms] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<string>("");

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
              Device-specific BGMI sensitivity packs built for consistency,
              control, and real fights.
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
            A <strong>device-specific BGMI sensitivity pack</strong>,
            tested and trusted by players and creators.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li>
              <strong>🎯 3 Sensitivity Options per Device</strong><br />
              Low, Medium, and High — choose what fits your playstyle.
            </li>

            <li>
              <strong>✅ Creator & Player Tested Values</strong><br />
              Refined through real usage, not random presets.
            </li>

            <li>
              <strong>🔥 Better Control in Real Fights</strong><br />
              Designed for sprays, tracking, and close-range combat.
            </li>

            <li>
              <strong>💸 Low-Cost, High-Value Setup</strong><br />
              Premium sensitivity setups at a budget-friendly price.
            </li>
          </ul>

          {/* BONUS */}
          <div className="mt-8">
            <h3 className="text-xl font-extrabold uppercase mb-3">
              Bonus
            </h3>
            <p className="text-gray-300">
              <strong>🎯 Sensitivity Mastery Drills</strong><br />
              Simple daily drills to help you adapt faster and
              master your sensitivity.
            </p>
            <p className="mt-2 text-gray-400 italic">
              No guessing. No copying. Just apply, practice, and improve.
            </p>
          </div>
        </div>

        {/* RIGHT — CTA CARD */}
        <div className="bg-[#111] p-12 md:p-14 lg:p-16 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-extrabold uppercase mb-2">
              Buy Sensitivity Pack
            </h3>

            <p className="text-gray-400 mb-6">
              Device-specific ready-to-use sensitivity values.
            </p>

            {/* Device Selector */}
            <div className="mb-8">
              <label className="block mb-2 text-xs uppercase tracking-widest text-gray-400">
                Select Your Device
              </label>

              <div className="relative">
                <select
                  value={selectedDevice}
                  onChange={(e) => setSelectedDevice(e.target.value)}
                  className="w-full appearance-none bg-black border border-white/20 px-4 py-3 pr-10 text-white focus:border-red-500 outline-none rounded-md"
                >
                  <option value="">Choose your device</option>
                  {DEVICE_OPTIONS.map((d) => (
                    <option key={d.url} value={d.url}>
                      {d.label}
                    </option>
                  ))}
                </select>

                {/* Dropdown arrow */}
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  ▼
                </span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  Price
                </span>
                <span className="text-3xl font-extrabold text-red-500">
                  ₹249
                </span>
              </div>
            </div>


          </div>

          <button
            onClick={() => selectedDevice && setShowTerms(true)}
            disabled={!selectedDevice}
            className={`w-full py-4 text-sm font-bold uppercase transition
              ${
                selectedDevice
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-red-600/40 cursor-not-allowed"
              }`}
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
              Sensitivity – Device Specific
            </p>

            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li>This pack provides device-specific ready-to-use sensitivity values.</li>
              <li>Sensitivities are near-optimal for most users of the device.</li>
              <li>Regular practice and drills are required for best results.</li>
              <li>Results vary based on gameplay habits and consistency.</li>
              <li>This is not a personalized or custom sensitivity service.</li>
              <li>Minor personal adjustments are allowed.</li>
              <li>The pack is non-refundable and non-transferable once delivered.</li>
              <li>No rank, KD, or competitive results are guaranteed.</li>
              <li>Sharing, reselling, or redistributing is strictly prohibited.</li>
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
                By purchasing this product, you acknowledge that{" "}
                <strong>practice, patience, and consistency</strong>{" "}
                are essential for mastering sensitivity.
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
                href={selectedDevice}
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
