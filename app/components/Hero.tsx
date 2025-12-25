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
          <p className="mb-4 text-xs font-semibold tracking-widest text-gray-300">
            FASTER UI ESPORTS
          </p>

          <h1 className="text-4xl font-extrabold uppercase leading-tight md:text-6xl lg:text-7xl">
            Where{" "}
            <span className="text-red-500">Winning</span>
            <br />
            Is The Only Option
          </h1>

          <button className="mt-8 bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-red-700 transition">
            Our Mission
          </button>
        </div>
      </div>
    </section>
  );
}
