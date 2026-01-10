"use client";

import { useState, useRef, useEffect } from "react";
import { Trophy } from "lucide-react";

function useCountUp(target: number, duration: number = 2200) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);

            // smooth ease-in-out (very stable)
            const eased =
              progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            setValue(eased * target);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return { ref, value };
}

export default function Intro() {
  const subs = useCountUp(90);
  const views = useCountUp(8);


  return (
    <section id="intro" className="bg-gray-100 py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* COLLAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden shadow-2xl">
          <div className="md:grid md:grid-rows-2 md:h-[700px]">
            {/* LEFT TOP — TEXT (50% of left column) */}
            <div className="bg-black p-6 md:p-10 flex items-center justify-center h-[300px] md:h-[350px]">
              <p className="text-white text-sm md:text-base lg:text-lg font-extrabold uppercase leading-relaxed tracking-wider">
                Swagat hai aapka<br />
                fizzer<br />
                ki duniya me :-<br />
                A space built for<br />
                gamers and creators<br />
                who want clarity, <br />
                consistency, and real growth.
              </p>
            </div>

            {/* LEFT BOTTOM — TROPHIES (50% of left column) */}
            <div className="bg-red-600 flex flex-col items-center justify-center text-white py-8 h-[300px] md:h-[350px]">
              <Trophy size={56} strokeWidth={2} className="mb-2" />
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold">50+</span>
              <span className="mt-1 text-xs md:text-sm font-bold uppercase tracking-widest text-center px-4">
                PLAYERS & CREATORS GUIDED
              </span>
          dipes  </div>
          </div>

          {/* CENTER — IMAGE (DOMINANT) */}
          <div className="relative h-[600px] md:h-[700px] bg-gray-800">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
              alt="Esports Player"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="md:h-[700px]">
            {/* RIGHT TOP — STATS (2/5 = 280px) */}
            <div className="bg-red-600 flex flex-col items-center justify-center text-white py-6 gap-3 h-[280px] md:h-[280px]">
              <div className="text-center">
                <span
                  ref={subs.ref}
                  className="text-6xl md:text-7xl lg:text-8xl leading-none font-extrabold block tracking-tighter"
                >
                  {Math.round(subs.value)}K+
                </span>
                <span className="mt-1 text-sm md:text-base font-bold uppercase tracking-widest block">
                  subscribers
                </span>
              </div>
              <div className="text-center">
                <span
                  ref={views.ref}
                  className="text-6xl md:text-7xl lg:text-8xl leading-none font-extrabold block tracking-tighter"
                >
                  {Math.round(views.value)}M+
                </span>
                <span className="mt-1 text-sm md:text-base font-bold uppercase tracking-widest block">
                  views
                </span>
              </div>
            </div>

            {/* RIGHT BOTTOM — MISSION TEXT (3/5 = 420px) */}
            <div className="bg-black p-6 md:p-8 lg:p-10 flex items-center justify-center h-[420px] md:h-[420px]">
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold uppercase leading-tight">
                Our<br />
                mission<br />
                is to <span className="text-red-600">SMART GAMEPLAY</span>,<br />
                <span className="text-red-600">STRONG MINDSET</span>,<br />
                and<br />
                <span className="text-red-600">REAL CONTENT</span>.<br />
                GROWTH —<br />
                ON BGMI <br />
                & BEYOND.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}