import Link from "next/link";
import Image from "next/image";
import FizzerImg from "@/public/fizzer.svg"

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded overflow-hidden">
            <Image
              src={FizzerImg}
              alt="FizZer logo"
              fill
              className="object-cover"
            />
          </span>
          FizZer
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
          <Link href="#" className="text-red-500">
            Home
          </Link>
          <Link href="#products" className="text-white hover:text-red-500">
            Products
          </Link>
          <Link href="#" className="text-white hover:text-red-500">
            About
          </Link>
          <Link href="#" className="text-white hover:text-red-500">
            Top Videos
          </Link>
          <Link href="#" className="text-white hover:text-red-500">
            Socials
          </Link>
          <Link href="https://www.youtube.com/@OnlyFizZer" className="text-white hover:text-red-500">
            YouTube
          </Link>
        </nav>

        {/* Shop button */}
        <Link
          href="#"
          className="border border-white px-5 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
        >
          SHOP
        </Link>
      </div>
    </header>
  );
}
