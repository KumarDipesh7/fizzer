"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#171313] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-0 top-0 h-[420px] w-[420px]"
          style={{
            background:
              "radial-gradient(circle, rgba(170,20,35,.12), transparent 72%)",
          }}
        />

        <div
          className="absolute right-0 bottom-0 h-[420px] w-[420px]"
          style={{
            background:
              "radial-gradient(circle, rgba(170,20,35,.08), transparent 72%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">

          {/* Logo */}

          <div>

            <h2 className="text-5xl font-black uppercase leading-none">
              Fiz<span className="text-red-600">Zer</span>
            </h2>

            <p className="mt-8 max-w-sm font-mono text-lg uppercase tracking-[0.22em] text-red-500">
              JAHAN NOOBS NAHI,
              <br />
              SIRF LEGENDS
              <br />
              BANTE HAIN.
            </p>

          </div>

          {/* Shop */}

          <div>

            <h4 className="mb-8 font-mono text-sm uppercase tracking-[0.35em] text-gray-500">
              Shop
            </h4>

            <ul className="space-y-4 text-xl text-gray-300">

              <li>
                <Link href="/products/sensitivity" className="transition hover:text-red-500">
                  Sensitivity Setup
                </Link>
              </li>

              <li>
                <Link href="/products/control-layout" className="transition hover:text-red-500">
                  Control Layout
                </Link>
              </li>

              <li>
                <Link href="/products/thumbnail" className="transition hover:text-red-500">
                  Thumbnail Pack
                </Link>
              </li>

              <li>
                <Link href="/products/one-to-one" className="transition hover:text-red-500">
                  1-on-1 Session
                </Link>
              </li>

            </ul>

          </div>

          {/* Site */}

          <div>

            <h4 className="mb-8 font-mono text-sm uppercase tracking-[0.35em] text-gray-500">
              Site
            </h4>

            <ul className="space-y-4 text-xl text-gray-300">

              <li>
                <Link href="#about" className="transition hover:text-red-500">
                  About
                </Link>
              </li>

              {/* <li>
                <Link href="#watch" className="transition hover:text-red-500">
                  Watch Intro
                </Link>
              </li> */}

              <li>
                <Link href="#faq" className="transition hover:text-red-500">
                  FAQ
                </Link>
              </li>

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h4 className="mb-8 font-mono text-sm uppercase tracking-[0.35em] text-gray-500">
              Connect
            </h4>

            <ul className="space-y-4 text-xl text-gray-300">

              <li>
                <a
                  href="mailto:bgmifizz777@gmail.com"
                  className="transition hover:text-red-500"
                >
                  bgmifizz777@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/fizzer_bgmi"
                  target="_blank"
                  className="transition hover:text-red-500"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://youtube.com/@OnlyFizZer"
                  target="_blank"
                  className="transition hover:text-red-500"
                >
                  YouTube
                </a>
              </li>

              {/* <li>
                <a
                  href="https://discord.gg/P5kqxM8St7"
                  target="_blank"
                  className="transition hover:text-red-500"
                >
                  Discord
                </a>
              </li> */}

            </ul>

          </div>

        </div>

        {/* Divider */}

        <div className="my-16 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="font-mono text-lg text-gray-500">
            FizZer — Not affiliated with BGMI / PUBG Mobile
          </p>

          <p className="font-mono text-lg text-gray-500">
            © 2026 FizZer. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}