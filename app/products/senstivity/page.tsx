import Image from "next/image";

/**
 * Later this array will come from backend:
 * GET /api/products/sensitivity/variants
 */
const DEVICE_BRANDS = [
  "Samsung",
  "Vivo",
  "Xiaomi",
  "OnePlus",
  "Realme",
  "iQOO",
  "Oppo",
  "Nothing",
  "Motorola",
  "Infinix",
];

export default function SensitivityPage() {
  return (
    <section className="bg-black text-white min-h-screen">
      
      {/* HERO */}
      <div className="relative h-[60vh]">
        <Image
          src="/hero-bg.jpg"
          alt="Sensitivity Settings"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
              Pro
              <br />
              <span className="text-red-500">Sensitivity Settings</span>
            </h1>
            <p className="mt-4 max-w-xl text-gray-300">
              Get perfectly tuned sensitivity settings based on your
              device, playstyle, and experience level.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 lg:grid-cols-2">

        {/* LEFT — DESCRIPTION */}
        <div>
          <h2 className="text-3xl font-extrabold uppercase mb-6">
            What This Includes
          </h2>

          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This service is designed to remove guesswork from your
            sensitivity and help you aim consistently.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Device-specific sensitivity tuning</li>
            <li>ADS & gyro optimization (if supported)</li>
            <li>Claw / thumb playstyle adjustments</li>
            <li>Step-by-step setup instructions</li>
          </ul>
        </div>

        {/* RIGHT — FORM */}
        <div className="bg-[#111] p-12 md:p-14 lg:p-16">
            <h3 className="text-2xl font-extrabold uppercase mb-8">
                Get Your Sensitivity
            </h3>

            <form className="flex flex-col gap-6">
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Email Address" className="form-input" />
                <input type="tel" placeholder="Phone Number" className="form-input" />

                <select className="form-input bg-black">
                <option value="">Select Your Device</option>
                {DEVICE_BRANDS.map((brand) => (
                    <option key={brand} value={brand}>
                    {brand}
                    </option>
                ))}
                </select>

                <textarea
                rows={4}
                placeholder="Tell us your game and playstyle"
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
