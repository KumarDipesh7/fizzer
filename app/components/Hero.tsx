"use client";

import Navbar from "./Navbar";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0909] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0b0909]" />
        <div
          className="absolute right-0 top-0 h-full w-1/2"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(180,20,35,0.25), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 lg:px-8">
          <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              <p
                className="mb-6 uppercase text-red-500"
                style={{
                  fontSize: "clamp(0.65rem, 1vw, 0.75rem)",
                  letterSpacing: "0.3em",
                }}
              >
                Trusted by 100K+ BGMI Players
              </p>

              <h1
                className="font-black uppercase tracking-tight"
                style={{
                  fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                  lineHeight: 0.98,
                }}
              >
                <span className="block">Device-Specific</span>
                <span className="block">Setups That</span>
                <span className="block">
                  Actually <span className="text-red-500">Win You</span>
                </span>
                <span className="block text-red-500">Fights</span>
              </h1>

              <p
                className="mt-8 max-w-xl leading-8 text-gray-300"
                style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.125rem)" }}
              >
                Sensitivity, control layouts, and coaching — built from what
                wins, not guesswork. Trusted by thousands of competitive BGMI
                players looking to improve their gameplay.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <Link
                  href="#products"
                  className="bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
                  style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}
                >
                  Get My Setup →
                </Link>

                <Link
                  href="#watch"
                  className="text-gray-300 underline underline-offset-4 hover:text-white"
                  style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)" }}
                >
                  ▶ Watch the intro video
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center">
              <div className="relative aspect-[4/5] w-full max-w-md border border-white/10 bg-[#111]">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent 0px, transparent 22px, rgba(255,255,255,.05) 22px, rgba(255,255,255,.05) 24px)",
                  }}
                />

                <div className="flex h-full items-center justify-center text-center">
                  <div>
                    <div className="mb-4 text-5xl opacity-40">🖼️</div>
                    <p className="uppercase tracking-[0.3em] text-gray-500">
                      Your Photo / Gameplay Clip
                    </p>
                    <p className="mt-1 uppercase tracking-[0.3em] text-gray-500">
                      Goes Here
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.3em] text-gray-400">
                  FizZer — BGMI Creator // Est. Lobby Legend
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}