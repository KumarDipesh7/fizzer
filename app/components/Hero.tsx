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

        <div className="mx-auto flex min-h-[100dvh] max-w-7xl items-center px-6 pb-16 pt-32 lg:min-h-screen lg:px-8 lg:pb-0 lg:pt-20">
          <div className="grid w-full gap-16 lg:grid-cols-2 lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <p
                className="mb-4 uppercase text-red-500 lg:mb-6"
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
                  fontSize: "clamp(2.25rem, 3vw, 4.5rem)",
                  lineHeight: 0.98,
                }}
              >
                <span className="block">Device-Specific</span>
                <span className="block">Setups That</span>
                <span className="block">
                  Actually 
                </span>
                <span className="block text-red-500">Win You Fights</span>
              </h1>

              <p
                className="mx-auto mt-6 max-w-xl leading-8 text-gray-300 lg:mx-0 lg:mt-8"
                style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.125rem)" }}
              >
                Sensitivity, control layouts, and coaching — built from what
                wins, not guesswork. Trusted by thousands of competitive BGMI
                players looking to improve their gameplay.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:mt-12 lg:justify-start">
                <Link
                  href="#products"
                  className="bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
                  style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}
                >
                  Get My Setup →
                </Link>

                {/* <Link
                  href="#watch"
                  className="text-gray-300 underline underline-offset-4 hover:text-white"
                  style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)" }}
                >
                  ▶ Watch the intro video
                </Link> */}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[280px] aspect-[4/5] overflow-hidden border border-white/10 bg-[#111] sm:max-w-sm lg:max-w-md">
                <div
                  className="absolute inset-0 z-10 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent 0px, transparent 22px, rgba(255,255,255,.05) 22px, rgba(255,255,255,.05) 24px)",
                  }}
                />

                <img
                  src="/fizzer.svg"
                  alt="FizZer"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute bottom-4 left-4 z-20 max-w-[80%] text-[10px] uppercase tracking-[0.2em] text-gray-400 lg:bottom-6 lg:left-6 lg:text-[11px] lg:tracking-[0.3em]">
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