"use client";

import Image from "next/image";

const testimonials1 = [
  "/testimonials/t1.jpg",
  "/testimonials/t2.jpg",
  "/testimonials/t3.png",
  "/testimonials/t4.png",
  "/testimonials/t5.png",
  "/testimonials/t6.png",
  "/testimonials/t7.jpeg",
  "/testimonials/t8.jpeg",
];

const testimonials2 = [
  "/testimonials/t9.jpeg",
  "/testimonials/t10.jpeg",
  "/testimonials/t11.jpeg",
  "/testimonials/t12.jpg",
  "/testimonials/t13.jpg",
  "/testimonials/t14.jpg",
  "/testimonials/t15.jpg",
  "/testimonials/t16.jpg",
];

const testimonials3 = [
  "/testimonials/t17.png",
  "/testimonials/t18.png",
  "/testimonials/t19.png",
  "/testimonials/t20.png",
  "/testimonials/t21.png",
  "/testimonials/t22.png",
  "/testimonials/t23.png",
  "/testimonials/t24.png",
];

const dup = (arr: string[]) => [...arr, ...arr, ...arr, ...arr];

function MarqueeRow({
  images,
  reverse = false,
  speed = 55,
}: {
  images: string[];
  reverse?: boolean;
  speed?: number;
}) {
  const duplicated = dup(images);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#171313] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#171313] to-transparent pointer-events-none" />

      <div
        className="flex items-stretch gap-5"
        style={{
          width: "max-content",
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState =
            "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState =
            "running")
        }
      >
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
  );
}

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
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none">
            WHAT PLAYERS ARE SAYING
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Real feedback from players and creators who've used the products.
          </p>
        </div>

        {/* Three Marquee Rows */}
        <div className="flex flex-col gap-5">
          <MarqueeRow images={testimonials1} reverse={false} speed={50} />
          <MarqueeRow images={testimonials2} reverse={true}  speed={60} />
          <MarqueeRow images={testimonials3} reverse={false} speed={45} />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to   { transform: translateX(-25%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-25%); }
          to   { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}