import Image from "next/image";

/**
 * These arrays will later come from backend
 */
const FINGER_STYLES = [
  "Thumb (2 Finger)",
  "3 Finger Claw",
  "4 Finger Claw",
  "5 Finger Claw",
];

export default function ControlLayoutPage() {
  return (
    <section className="bg-black text-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[60vh]">
        <Image
          src="/hero-bg.jpg"
          alt="Control Layout Customization"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
              Custom
              <br />
              <span className="text-red-500">Control Layout</span>
            </h1>
            <p className="mt-4 max-w-xl text-gray-300">
              Get a professionally designed control layout based on
              your device, finger style, and gameplay preferences.
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
            This service focuses on improving comfort, reaction time,
            and consistency through optimized layouts.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Device-specific HUD placement</li>
            <li>Finger-style optimized layout</li>
            <li>Comfort & ergonomics focused</li>
            <li>Easy setup reference image</li>
          </ul>
        </div>

        {/* RIGHT — FORM */}
        <div className="bg-[#111] p-12 md:p-14 lg:p-16">
          <h3 className="text-2xl font-extrabold uppercase mb-8">
            Get Your Layout
          </h3>

          <form className="flex flex-col gap-6">
            <input
                type="text"
                placeholder="Your Name"
                className="form-input"
            />

            <input
                type="email"
                placeholder="Email Address"
                className="form-input"
            />

            <input
                type="tel"
                placeholder="Phone Number"
                className="form-input"
            />

            {/* FINGER STYLE */}
            <select className="form-input bg-black">
                <option value="">Select Finger Style</option>
                {FINGER_STYLES.map((style) => (
                <option key={style} value={style}>
                    {style}
                </option>
                ))}
            </select>

            <textarea
                rows={4}
                placeholder="Any specific preferences? (ADS, lean buttons, etc.)"
                className="form-input"
            />

            <button
                type="submit"
                className="mt-2 w-full bg-red-600 py-4 text-sm font-bold uppercase hover:bg-red-700 transition"
            >
                Proceed to Payment
            </button>
            </form>

        </div>
      </div>
    </section>
  );
}
