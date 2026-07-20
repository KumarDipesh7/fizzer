"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-white/10 bg-[#171313] py-16 lg:py-28 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-0 h-[500px] w-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(170,20,35,.12), transparent 70%)",
          }}
        />

        <div
          className="absolute right-0 bottom-0 h-[500px] w-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(170,20,35,.08), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:gap-16 px-6 lg:grid-cols-[480px_1fr]">

        {/* MOBILE HEADING */}
        <div className="text-center lg:hidden">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-red-500">
            • ABOUT FIZZER
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black uppercase leading-[0.95] md:text-5xl">
            BUILT FOR PLAYERS
            <br />
            WHO WANT REAL
            <br />
            GROWTH —
            <span className="text-[#f3ece8]"> NOT SHORTCUTS</span>
          </h2>
        </div>

        {/* LEFT IMAGE */}

        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-[480px] overflow-hidden border border-white/10 bg-[#1b1717]">
          <div className="relative aspect-[4/5]">
            {/* Replace with your own image */}
            <Image
              src="/fizzerFace.png"
              alt="FizZer"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className="max-w-3xl text-center lg:text-left">

          {/* DESKTOP HEADING */}
          <div className="hidden lg:block">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
              • ABOUT FIZZER
            </p>

            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] md:text-6xl">
              BUILT FOR PLAYERS
              <br />
              WHO WANT REAL
              <br />
              GROWTH —
              <span className="text-[#f3ece8]"> NOT SHORTCUTS</span>
            </h2>
          </div>

          <div className="mt-0 lg:mt-10 space-y-6 lg:space-y-8 text-base lg:text-lg leading-relaxed lg:leading-9 text-gray-300">
            <p>
              I started <span className="text-white">FizZer</span> to prove
              BGMI could be more than just a hobby. Every sensitivity setup,
              control layout, and piece of content is tested on real gameplay
              before it reaches you.
            </p>

            <p>
              No recycled templates. No guesswork. Just practical systems that
              actually work—backed by{" "}
              <span className="text-white">100K+ subscribers</span> and a{" "}
              <span className="text-white">
                KRAFTON Tap-A-Tips Season 3 collaboration.
              </span>
            </p>
          </div>

          {/* Bottom stats */}

          <div className="mt-10 lg:mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 border-t border-white/10 pt-8">

            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-white">100K+</h3>
              <p className="mt-2 text-[10px] lg:text-xs uppercase tracking-[0.25em] text-gray-500">
                Subscribers
              </p>
            </div>

            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-white">10M+</h3>
              <p className="mt-2 text-[10px] lg:text-xs uppercase tracking-[0.25em] text-gray-500">
                Views
              </p>
            </div>

            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-white">1000+</h3>
              <p className="mt-2 text-[10px] lg:text-xs uppercase tracking-[0.25em] text-gray-500">
                Players Guided
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}