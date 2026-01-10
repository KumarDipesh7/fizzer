"use client";

import { useState, useRef, useEffect } from "react";
import { Trophy } from "lucide-react";

function useCountUp(target: number, duration = 2200) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const refs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (refs.current.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);

            const eased =
              progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            setValue(eased * target);

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return {
    value,
    setRef: (el: HTMLElement | null) => {
      if (el && !refs.current.includes(el)) {
        refs.current.push(el);
      }
    },
  };
}


export default function Intro() {
  const subs = useCountUp(90);
  const views = useCountUp(8);


  return (
    <section id="intro" className="bg-gray-100 py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* MOBILE VERSION */}
        <div className="md:hidden space-y-6">

          {/* Welcome */}
          <div className="bg-black text-white p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Welcome
            </p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight">
              Swagat Hai Aapka
              <br />
              <span className="text-red-500">FizZer</span>
              <br />
              Ki Duniya Mein
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              A space built for gamers and creators who want clarity, consistency, and real growth.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
              className="w-full h-full object-cover"
              alt="Esports Player"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 bg-red-600 text-white py-8">
            <div className="text-center">
              <span ref={subs.setRef} className="text-5xl font-extrabold block">
                {Math.round(subs.value)}K+
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">
                Subscribers
              </span>
            </div>
            <div className="text-center">
              <span ref={views.setRef} className="text-5xl font-extrabold block">
                {Math.round(views.value)}M+
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">
                Views
              </span>
            </div>
          </div>

          {/* Players */}
          <div className="bg-black text-white py-10 text-center">
            <Trophy size={48} className="mx-auto mb-4 text-red-500" />
            <span className="text-5xl font-extrabold block">50+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Players & Creators Guided
            </span>
          </div>

          {/* Mission */}
          <div className="bg-black text-white p-8 text-center">
            <h3 className="text-2xl font-extrabold uppercase leading-tight">
              Our Mission
            </h3>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Smart gameplay, strong mindset, and real content —
              helping BGMI creators grow beyond shortcuts.
            </p>
          </div>

        </div>

        {/*DESKTOP COLLAGE GRID */}
        <div className="hidden md:grid grid-cols-3 gap-0 overflow-hidden shadow-2xl">
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
                  ref={subs.setRef}
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
                  ref={views.setRef}
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