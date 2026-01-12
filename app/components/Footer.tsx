import {
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaHeart,
} from "react-icons/fa6";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { Icon: FaInstagram, href: "https://www.instagram.com/fizzer_bgmi?igsh=cDM2aDVjdHB2bTcw" },
    { Icon: FaYoutube, href: "https://www.youtube.com/@OnlyFizZer" },
    { Icon: FaDiscord, href: "https://discord.gg/P5kqxM8St7" },
  ];
  return (
    <footer className="w-full bg-black text-white">
      <div className="flex flex-col items-center px-6 py-20">

        {/* LOGO */}
        <div className="mb-8 flex items-center gap-3 text-2xl font-bold">
          <span className="flex h-10 w-10 items-center justify-center rounded bg-white text-black">
            <Zap size={20} />
          </span>
          FizZer
        </div>

        {/* SOCIAL ICONS */}
        <div className="mb-10 flex gap-6 text-white/80">
          {socialLinks.map(({ Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full max-w-5xl bg-white/10" />

        {/* NAV LINKS */}
        <nav className="mb-10 flex flex-wrap justify-center gap-10 text-sm font-extrabold uppercase tracking-wide">
          {[
            "Home",
            "News",
            "Our Mission",
            "Matches",
            "Socials",
            "Shop",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="hover:text-red-500 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full max-w-5xl bg-white/10" />

        {/* COPYRIGHT */}
        <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/70">
          © 2026 FizZer. All rights reserved. Not affiliated with BGMI/PUBG Mobile.
        </p>

      </div>
    </footer>
  );
}
