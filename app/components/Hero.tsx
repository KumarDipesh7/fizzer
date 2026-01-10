import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-bg.jpg')", // we’ll add this image next
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
            <span className="uppercase block">Swaagat Hai Aapka</span>

            <span className="block text-red-500 mt-1 sm:mt-2">
              FizZer
            </span>

            <span className="uppercase block text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-3 text-gray-200">
              Ki Duniya Mein
            </span>
          </h1>

          {/* CTA */}
          <button className="mt-8 sm:mt-10 bg-red-600 px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wide hover:bg-red-700 transition">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
}
