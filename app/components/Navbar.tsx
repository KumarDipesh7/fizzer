'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FizzerImg from "@/public/fizzer.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-5">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <span className="relative inline-flex h-8 w-8">
            <Image src={FizzerImg} alt="FizZer logo" fill />
          </span>
          FizZer
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
          <Link href="#" className="text-red-500">Home</Link>
          <Link href="#products" className="hover:text-red-500">Products</Link>
          <Link href="#intro" className="hover:text-red-500">About</Link>
          <Link href="#vid" className="hover:text-red-500">Top Videos</Link>
          <Link href="#socials" className="hover:text-red-500">Socials</Link>
          <Link href="https://www.youtube.com/@OnlyFizZer" className="hover:text-red-500">YouTube</Link>
        </nav>

        {/* Desktop Shop */}
        <Link
          href="#"
          className="hidden md:inline-block border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black transition"
        >
          SHOP
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        >
          <span className={`h-[2px] w-6 bg-white transition ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`h-[2px] w-6 bg-white my-1 transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-white transition ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur border-t border-white/10">
          <nav className="flex flex-col items-center py-8 gap-6 text-sm font-bold uppercase tracking-wide">
            <Link onClick={() => setOpen(false)} href="#" className="text-red-500">Home</Link>
            <Link onClick={() => setOpen(false)} href="#products">Products</Link>
            <Link onClick={() => setOpen(false)} href="#intro">About</Link>
            <Link onClick={() => setOpen(false)} href="#vid">Top Videos</Link>
            <Link onClick={() => setOpen(false)} href="#socials">Socials</Link>
            <Link onClick={() => setOpen(false)} href="https://www.youtube.com/@OnlyFizZer">YouTube</Link>

            <Link
              onClick={() => setOpen(false)}
              href="#"
              className="mt-4 border border-white px-6 py-3"
            >
              Shop
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
