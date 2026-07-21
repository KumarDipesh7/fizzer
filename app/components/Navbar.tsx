"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FizzerImg from "@/public/fizzer.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Make the navbar fixed on mobile ONLY when on the homepage.
  // On desktop (md: and up), or on any other page, it remains absolute.
  const isHome = pathname === "/";
  const positionClass = isHome ? "fixed md:absolute" : "absolute";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== "/") return; // Let default Link behavior work if not on home

    if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      setOpen(false);
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/${href}`);
      }
      setOpen(false);
    }
  };

  return (
    <header className={`${positionClass} top-0 left-0 z-50 w-full border-b border-white/10 bg-[#090909]/95 backdrop-blur-sm`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={FizzerImg}
            alt="FizZer"
            width={34}
            height={34}
            priority
          />

          <span className="text-3xl font-extrabold tracking-tight text-white">
            Fiz <span className="text-red-500">Zer</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-300">
          <Link
            href="/"
            onClick={(e) => handleScroll(e, "/")}
            className="text-white transition hover:text-red-500"
          >
            Home
          </Link>

          <Link
            href="#products"
            onClick={(e) => handleScroll(e, "#products")}
            className="transition hover:text-red-500"
          >
            Products
          </Link>

          <Link
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="transition hover:text-red-500"
          >
            About
          </Link>

          <Link
            href="#faq"
            onClick={(e) => handleScroll(e, "#faq")}
            className="transition hover:text-red-500"
          >
            FAQ
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#products"
          onClick={(e) => handleScroll(e, "#products")}
          className="hidden md:flex items-center bg-red-600 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-red-700"
        >
          Get My Setup
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative flex h-10 w-10 flex-col items-center justify-center md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />

          <span
            className={`my-1 h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#090909] transition-all duration-300 md:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col border-t border-white/10 px-6 py-6 text-lg text-gray-300">
          <Link
            href="/"
            onClick={(e) => handleScroll(e, "/")}
            className="py-3 hover:text-red-500"
          >
            Home
          </Link>

          <Link
            href="#products"
            onClick={(e) => handleScroll(e, "#products")}
            className="py-3 hover:text-red-500"
          >
            Products
          </Link>

          <Link
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="py-3 hover:text-red-500"
          >
            About
          </Link>

          <Link
            href="#faq"
            onClick={(e) => handleScroll(e, "#faq")}
            className="py-3 hover:text-red-500"
          >
            FAQ
          </Link>

          <Link
            href="#products"
            onClick={(e) => handleScroll(e, "#products")}
            className="mt-5 bg-red-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-red-700"
          >
            Get My Setup
          </Link>
        </nav>
      </div>
    </header>
  );
}