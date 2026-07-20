"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const products = [
  {
    category: "Sensitivity",
    title: "STOP GUESSING YOUR SENSITIVITY",
    description:
      "Get the exact sensitivity tested for your specific device not a generic sensitivity..include drills to make it feel natural within 3-7 days.",
    features: [
      "Device-specific code",
      "Get 4 sensitivity settings per device",
      "Practice drill guide",
      "Direct support if it doesn't feel right",
    ],
    price: 249,
    button: "Get Now",
    note: "Instant delivery after payment",
    priceNote: "Starting from",
    href: "/products/sensitivity",
  },

  {
    category: "Control Layout",
    title: "FASTER REACTIONS, CLEANER MOVEMENT",
    description:
      'A control Layout designed around real fight scenarios…Built for faster peeks , Solves all joystick problem..less finger pain.',
    features: [
      "Layout file",
      "Get 2 different version",
      "Tested across multiple screen sizes",
    ],
    price: 249,
    button: "Get Now",
    note: "Works on most Android/iOS screens",
    href: "/products/control-layout",
  },

  {
    category: "BGMI Thumbnails Pack",
    title: "THUMBNAILS THAT ACTUALLY GET CLICKS",
    description:
      "A gaming-focused thumbnail asset pack templates, fonts, and elements used in my own high-performing videos.",
    features: [
      "Editable templates",
      "Font & element pack",
      "Complete BGMI Thumbnail Pack",
    ],
    price: 349,
    button: "Get Now",
    note: "Compatible with Photoshop & Canva",
    href: "/products/thumbnail",
  },

  {
    category: "Video Editing Pack",
    title: "GIVE YOUR VIDEOS A PROFESSIONAL EDGE",
    description:
      "Transitions SFX and overlay assets used in my own youtube and instagram videos built for Gaming Content Creators.",
    features: [
      "Transition pack",
      "SFX library",
      "Overlay assets",
      "Compatible with any editing software",
    ],
    price: 449,
    button: "Get Now",
    note: "Compatible with CapCut & Premiere Pro",
    href: "/products/video-editing",
  },

  {
    category: "1-on-1",
    title: "GET YOUR DOUBTS CLEARED, DIRECTLY BY ME",
    description:
      "A focused 1-on-1 call to work through your specific BGMI setup, gameplay habits, or content growth questions — tailored to you.",
    features: [
      "60 minutes direct call",
      "Your Doubts and My Solution",
      "Personalized action plans",
    ],
    price: 849,
    button: "Book Now",
    note: "Limited slots per week",
    href: "/products/one-to-one",
  },
];

function ProductCard({
  product,
}: {
  product: (typeof products)[0] & { priceNote?: string };
}) {
  return (
    <div className="flex flex-col border border-white/10 bg-[#0b0909]">
      <div className="flex flex-1 flex-col p-6 lg:p-9">
        {/* Category */}
        <span className="mb-4 lg:mb-6 text-[10px] lg:text-xs uppercase tracking-[0.35em] text-red-500">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="font-black uppercase leading-none text-2xl lg:text-[34px]">
          {product.title}
        </h3>

        {/* Description */}
        <p className="mt-4 lg:mt-6 text-base lg:text-[17px] leading-relaxed lg:leading-9 text-gray-300">
          {product.description}
        </p>

        {/* Features */}
        <ul className="mt-8 lg:mt-10 space-y-3">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-base lg:text-lg text-gray-400"
            >
              <Check
                size={18}
                className="mt-1 shrink-0 text-red-500"
              />

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8 lg:pt-12">
          <div className="mb-6 lg:mb-7 border-t border-white/10" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-0">
            <div>
              {product.priceNote && (
            <p className="mb-2 lg:mb-4 font-mono text-xs lg:text-sm tracking-wide text-gray-500">
              {product.priceNote} :
            </p>
            )}
              <div className="text-4xl lg:text-5xl font-black">
                ₹{product.price}
              </div>
            </div>

            <Link
              href={product.href}
              className="w-full sm:w-auto bg-red-600 px-6 py-3 lg:px-8 lg:py-4 text-center font-semibold transition hover:bg-red-700"
            >
              {product.button}
            </Link>
          </div>

          <p className="mt-4 lg:mt-5 font-mono text-xs lg:text-sm tracking-wide text-gray-500">
            {product.note}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#161212] py-16 lg:py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div
          className="absolute -left-40 top-0 h-[700px] w-[700px]"
          style={{
            background:
              "radial-gradient(circle, rgba(130,20,20,.18), transparent 70%)",
          }}
        />

        <div
          className="absolute right-0 bottom-0 h-[700px] w-[700px]"
          style={{
            background:
              "radial-gradient(circle, rgba(130,20,20,.12), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mb-12 lg:mb-20 max-w-3xl">
          <p className="mb-3 lg:mb-4 text-[10px] lg:text-xs uppercase tracking-[0.45em] text-red-500">
            • PRODUCTS
          </p>

          <h3 className="font-black uppercase leading-none text-4xl lg:text-5xl">
            PICK WHAT FITS YOUR GAME
          </h3>

          <p className="mt-6 lg:mt-8 text-lg lg:text-xl leading-relaxed lg:leading-10 text-gray-300">
            Every setup below is tested on real gameplay before it reaches
            you — not recycled templates.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-0 border border-white/10 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.title}
              product={product}
            />
          ))}

          {/* Second Row */}

          {products.slice(3).map((product) => (
            <ProductCard
              key={product.title}
              product={product}
            />
          ))}

          {/* Results Card */}

          <div className="flex flex-col border border-white/10 bg-[#161212] p-6 lg:p-9">
            <span className="mb-4 lg:mb-6 text-[10px] lg:text-xs uppercase tracking-[0.35em] text-red-500">
              Results
            </span>

            <h3 className="font-black uppercase leading-none text-2xl lg:text-[34px]">
              1000+ PLAYERS ALREADY USING THESE SETUPS
            </h3>

            <p className="mt-4 lg:mt-6 text-base lg:text-[17px] leading-relaxed lg:leading-9 text-gray-300">
              Every product is built from what's actually tested in real
              matches — not theory. Scroll down for real results from
              real buyers.
            </p>

            <div className="mt-auto pt-10 lg:pt-16">
              <Link
                href="#testimonials"
                className="inline-flex items-center gap-2 text-xl lg:text-2xl font-semibold underline underline-offset-8 transition hover:text-red-500"
              >
                See what players say
                <span className="text-2xl lg:text-3xl">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}