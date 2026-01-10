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

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center text-white">

          {/* Small tagline */}
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-gray-300 uppercase">
            FizZer Gaming
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            <span className="uppercase">Swaagat Hai Aapka</span>
            <br />
            <span className="text-red-500">FizZer</span>{" "}
            <span className="uppercase">Ki Duniya Mein</span>
          </h1>


          {/* CTA */}
          <button className="mt-10 bg-red-600 px-10 py-4 text-sm font-bold uppercase tracking-wide hover:bg-red-700 transition">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
}
