"use client";

import {
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa6";

export default function JoinSection() {
  return (
    <section
      id="socials"
      className="relative overflow-hidden border-y border-white/10 bg-[#171313] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-0 top-0 h-[520px] w-[520px]"
          style={{
            background:
              "radial-gradient(circle, rgba(170,20,35,.12), transparent 72%)",
          }}
        />

        <div
          className="absolute right-0 bottom-0 h-[520px] w-[520px]"
          style={{
            background:
              "radial-gradient(circle, rgba(170,20,35,.08), transparent 72%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-red-500">
            • JOIN THE FAMILY
          </p>

          <h2 className="font-black uppercase leading-none text-3xl md:text-4xl">
            LOBBY YA LEGEND —
            <br />
            CHUNAV AAPKA HAI ⚡
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-400">
            Join 100K+ players getting setups, drills,
            and BGMI updates first.
          </p>

        </div>

        {/* Social Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          <a
            href="https://www.youtube.com/@OnlyFizZer"
            target="_blank"
            className="group border border-white/10 bg-[#0d0b0b] p-8 transition hover:border-red-600"
          >
            <FaYoutube
              size={34}
              className="text-red-500 transition group-hover:scale-110"
            />

            <h3 className="mt-8 text-2xl font-bold">
              FizZer
            </h3>

            <p className="mt-3 text-gray-400">
              Tutorials, sensitivity guides,
              gameplay and educational videos.
            </p>

            <span className="mt-8 inline-block text-sm uppercase tracking-[0.3em] text-red-500">
              Subscribe →
            </span>
          </a>

          <a
            href="https://www.instagram.com/fizzer_bgmi"
            target="_blank"
            className="group border border-white/10 bg-[#0d0b0b] p-8 transition hover:border-red-600"
          >
            <FaInstagram
              size={34}
              className="text-red-500 transition group-hover:scale-110"
            />

            <h3 className="mt-8 text-2xl font-bold">
              Instagram
            </h3>

            <p className="mt-3 text-gray-400">
              Daily reels, behind-the-scenes,
              updates and community posts.
            </p>

            <span className="mt-8 inline-block text-sm uppercase tracking-[0.3em] text-red-500">
              Follow →
            </span>
          </a>

        </div>

        {/* Discord */}

        {/* <div className="mt-16 flex justify-center">
          <a
            href="https://discord.gg/P5kqxM8St7"
            target="_blank"
            className="inline-flex items-center gap-3 border border-white/10 px-8 py-4 text-lg transition hover:border-red-600"
          >
            <FaDiscord className="text-red-500" />
            Join our Discord Community
          </a>
        </div> */}

      </div>
    </section>
  );
}