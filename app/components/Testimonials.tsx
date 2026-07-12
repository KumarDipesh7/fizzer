"use client";

import Image from "next/image";

const testimonials = [
  "/testimonials/testimonial1.jpg",
  "/testimonials/testimonial2.jpg",
  "/testimonials/testimonial3.jpg",
  "/testimonials/testimonial4.jpg",
  "/testimonials/testimonial5.jpg",
  "/testimonials/testimonial6.jpg",
  "/testimonials/testimonial7.jpg",
  "/testimonials/testimonial8.jpg",
];

const duplicated = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-white/10 bg-[#171313] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-red-500">
            • REAL RESULTS
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
            WHAT PLAYERS ARE SAYING
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Real feedback from players and creators who've used the products.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#171313] to-transparent" />
          <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#171313] to-transparent" />

          <div className="flex items-stretch gap-5 marquee-scroll">
            {duplicated.map((image, index) => (
              <div
                key={index}
                className="group relative h-[240px] shrink-0 overflow-hidden border border-white/10 bg-black transition-all duration-500 hover:border-red-600"
              >
                <Image
                  src={image}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee-scroll {
          width: max-content;
          animation: marquee 55s linear infinite;
        }
        .marquee-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}