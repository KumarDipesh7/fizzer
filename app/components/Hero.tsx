"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimate(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-bg.jpg')", 
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 text-center text-white">

          {/* Small tagline */}
          <p className="mb-3 text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-gray-300 uppercase">
            FizZer Gaming
          </p>

          <h1 className="font-extrabold leading-[1.1] text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            <span className="uppercase block">Swagat Hai Aapka</span>

            <span className="block text-red-500 mt-1 sm:mt-2 inline-flex">
              <span>Fi</span>
              <span className="inline-block overflow-hidden relative w-[0.6em]" style={{ height: '1.2em', verticalAlign: 'baseline' }}>
                <span className={`absolute top-0 left-0 w-full ${animate ? 'animate-spinSlotUp' : ''}`}>
                  {['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].map((letter, i) => (
                    <span key={i} className="block leading-[1.2]">{letter}</span>
                  ))}
                </span>
              </span>
              <span className="inline-block overflow-hidden relative w-[0.6em]" style={{ height: '1.2em', verticalAlign: 'baseline' }}>
                <span className={`absolute top-0 left-0 w-full ${animate ? 'animate-spinSlotDown' : ''}`}>
                  {['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A','Z'].map((letter, i) => (
                    <span key={i} className="block leading-[1.2]">{letter}</span>
                  ))}
                </span>
              </span>
              <span>er</span>
            </span>

            <span className="uppercase block text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-3 text-gray-200">
              Ki Duniya Mein
            </span>
          </h1>

          {/* CTA */}
          <Link href="#intro" className="mt-8 sm:mt-10 bg-red-600 px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wide hover:bg-red-700 transition">
            About Me
          </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes spinSlotUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-96.15%);
          }
        }

        @keyframes spinSlotDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        .animate-spinSlotUp {
          animation: spinSlotUp 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-spinSlotDown {
          animation: spinSlotDown 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </section>
  );
}