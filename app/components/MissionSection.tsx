import { Trophy } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* COLLAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden shadow-2xl">
          {/* LEFT TOP — TEXT */}
          <div className="bg-black p-8 md:p-12 flex items-center justify-center min-h-[280px]">
            <p className="text-white text-base md:text-lg font-extrabold uppercase leading-relaxed tracking-wider">
              Welcome to<br />
              FasterUI<br />
              Esports:<br />
              Home to 41<br />
              trophies and<br />
              a legacy of<br />
              victory.
            </p>
          </div>

          {/* CENTER — IMAGE (DOMINANT) */}
          <div className="relative min-h-[280px] md:min-h-[560px] md:row-span-2 bg-gray-800">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
              alt="Esports Player"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* RIGHT TOP — YEARS */}
          <div className="bg-red-600 flex flex-col items-center justify-center text-white py-12 min-h-[280px]">
            <div className="text-center">
              <span className="text-[140px] md:text-[200px] leading-none font-extrabold block tracking-tighter">
                10<span className="text-7xl md:text-8xl align-top">+</span>
              </span>
              <span className="mt-4 text-xl md:text-2xl font-bold uppercase tracking-widest block">
                Years of<br />Success
              </span>
            </div>
          </div>

          {/* LEFT BOTTOM — TROPHIES */}
          <div className="bg-red-600 flex flex-col items-center justify-center text-white py-12 min-h-[280px]">
            <Trophy size={80} strokeWidth={2} className="mb-4" />
            <span className="text-5xl md:text-6xl font-extrabold">41</span>
            <span className="mt-2 text-lg md:text-xl font-bold uppercase tracking-widest">
              Trophies
            </span>
          </div>

          {/* RIGHT BOTTOM — MISSION TEXT */}
          <div className="bg-black p-8 md:p-12 flex items-center justify-center min-h-[280px]">
            <p className="text-white text-3xl md:text-5xl font-extrabold uppercase leading-tight">
              Our<br />
              mission<br />
              is to <span className="text-red-600">win</span>,<br />
              and only<br />
              <span className="text-red-600">win</span>.<br />
              That's<br />
              what<br />
              we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}