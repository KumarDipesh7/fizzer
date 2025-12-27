import Image from "next/image";

export default function OneToOnePage() {
  return (
    <section className="bg-black text-white min-h-screen">
      {/* HERO */}
      <div className="relative h-[60vh]">
        <Image
          src="/hero-bg.jpg"
          alt="One to One Coaching"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
              One to One
              <br />
              <span className="text-red-500">Coaching Session</span>
            </h1>
            <p className="mt-4 max-w-xl text-gray-300">
              Personalized 1-on-1 gameplay coaching to fix your setup,
              sensitivity, and decision-making like a pro.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 lg:grid-cols-2">
        
        {/* LEFT — DESCRIPTION */}
        <div>
          <h2 className="text-3xl font-extrabold uppercase mb-6">
            What You Get
          </h2>

          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p className="text-gray-300 mb-6">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Personal gameplay review</li>
            <li>Custom sensitivity setup</li>
            <li>HUD & control optimization</li>
            <li>Live Q&A session</li>
          </ul>
        </div>

        {/* RIGHT — FORM */}
        <div className="bg-[#111] p-10">
          <h3 className="text-2xl font-extrabold uppercase mb-6">
            Book Your Session
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red-500"
            />

            <textarea
              placeholder="Tell us about your game & goals"
              rows={4}
              className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red-500"
            />

            <button
              type="submit"
              className="w-full bg-red-600 py-3 text-sm font-bold uppercase hover:bg-red-700 transition"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
