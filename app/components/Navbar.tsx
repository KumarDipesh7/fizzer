'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FizzerImg from "@/public/fizzer.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <span className="relative inline-flex h-8 w-8">
                <Image src={FizzerImg} alt="FizZer logo" fill />
              </span>
              FizZer
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white">
              <Link href="#" className="text-red-400 hover:text-red-300 transition">Home</Link>
              <Link href="#products" className="hover:text-red-400 transition">Products</Link>
              <Link href="#intro" className="hover:text-red-400 transition">About</Link>
              <Link href="#vid" className="hover:text-red-400 transition">Top Videos</Link>
              <Link href="#socials" className="hover:text-red-400 transition">Socials</Link>
              <Link href="https://www.youtube.com/@OnlyFizZer" className="hover:text-red-400 transition">YouTube</Link>
            </nav>

            {/* Desktop Shop */}
            <Link
              href="#"
              className="hidden md:inline-block backdrop-blur-md bg-white/20 border border-white/30 px-5 py-2 text-sm font-semibold text-white rounded-lg hover:bg-white/30 hover:border-white/40 transition"
            >
              SHOP
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-10"
              aria-label="Toggle menu"
            >
              <span className={`h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`h-[2px] w-6 bg-white rounded-full my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-4 sm:mx-6 mt-3">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg">
            <nav className="flex flex-col items-center py-8 gap-6 text-sm font-bold uppercase tracking-wide text-white">
              <Link onClick={() => setOpen(false)} href="#" className="text-red-400 hover:text-red-300 transition">Home</Link>
              <Link onClick={() => setOpen(false)} href="#products" className="hover:text-red-400 transition">Products</Link>
              <Link onClick={() => setOpen(false)} href="#intro" className="hover:text-red-400 transition">About</Link>
              <Link onClick={() => setOpen(false)} href="#vid" className="hover:text-red-400 transition">Top Videos</Link>
              <Link onClick={() => setOpen(false)} href="#socials" className="hover:text-red-400 transition">Socials</Link>
              <Link onClick={() => setOpen(false)} href="https://www.youtube.com/@OnlyFizZer" className="hover:text-red-400 transition">YouTube</Link>

              <Link
                onClick={() => setOpen(false)}
                href="#"
                className="mt-4 backdrop-blur-md bg-white/20 border border-white/30 px-6 py-3 rounded-lg hover:bg-white/30 hover:border-white/40 transition"
              >
                Shop
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
