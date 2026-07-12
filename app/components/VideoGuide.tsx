"use client";

import Link from "next/link";
import { Play } from "lucide-react";

const guides = [
  {
    title: "Want consistent aim?",
    subtitle: "Sensitivity Setup",
    href: "#sensitivity",
  },
  {
    title: "Movement feels slow?",
    subtitle: "Control Layout",
    href: "#layout",
  },
  {
    title: "Weak thumbnails?",
    subtitle: "Thumbnail Pack",
    href: "#thumbnail",
  },
  {
    title: "Editing not flowing?",
    subtitle: "Video Editing Pack",
    href: "#editing",
  },
  {
    title: "Have a specific doubt?",
    subtitle: "1-on-1 Session",
    href: "#coaching",
  },
];

export default function VideoGuide() {
  return (
    <section className="border-y border-white/10 bg-[#171313] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-red-500">
            • Start Here
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black uppercase leading-none md:text-6xl">
            Not Sure Which One's For You?
            <br />
            Watch This First.
          </h2>
        </div>

        {/* Video */}
        <div className="mt-12">
          <div className="aspect-video border border-white/10 bg-black">
            <div className="flex h-full items-center justify-center">
              <button className="play-btn flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#dc1428] transition-all duration-200 hover:scale-105 hover:bg-[#ef1b32]">
                <Play
                  className="ml-1 h-7 w-7 fill-white text-white"
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>

          {/* <p className="mt-6 text-center font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
            [ EMBED YOUR 60–90 SEC INTRO VIDEO HERE — YOUTUBE UNLISTED LINK ]
          </p> */}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="border border-white/10 bg-white/[0.02] p-6 transition duration-200 hover:border-red-600 hover:bg-white/[0.04]"
            >
              <h3 className="text-lg font-semibold text-white">
                {guide.title}
              </h3>

              <p className="mt-2 text-xl text-gray-300">
                {guide.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .play-btn {
          box-shadow: 0 0 0 0 rgba(220, 20, 40, 0.45);
          animation: pulse 2.2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(220, 20, 40, 0.45);
          }

          70% {
            box-shadow: 0 0 0 22px rgba(220, 20, 40, 0);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(220, 20, 40, 0);
          }
        }
      `}</style>
    </section>
  );
}