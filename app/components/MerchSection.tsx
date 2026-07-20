"use client";

import Image from "next/image";

export default function MerchSection() {
  return (
    <section
      id="merch"
      className="relative overflow-hidden border-y border-white/10 bg-[#171313] py-28 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-0 top-0 h-[500px] w-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(170,20,35,.12), transparent 70%)",
          }}
        />

        <div
          className="absolute right-0 bottom-0 h-[500px] w-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(170,20,35,.08), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
          • MERCH
        </p>

        <h2 className="text-5xl font-black uppercase leading-none md:text-7xl">
          MERCH DROPS SOON
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Get notified the moment it's live —
          first access, exclusive drops, and no spam.
        </p>

        {/* Merch Preview */}

        {/* <div className="mx-auto mt-14 max-w-xl overflow-hidden border border-white/10 bg-[#111]">
          <div className="relative aspect-square">
            <Image
              src="/merch.jpg"
              alt="Upcoming Merch"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div> */}

        {/* Notify Form */}

        <form className="mx-auto mt-12 flex max-w-xl flex-col overflow-hidden border border-white/10 md:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent px-6 py-5 text-white placeholder:text-gray-500 outline-none"
          />

          <button
            type="submit"
            className="bg-red-600 px-10 py-5 font-bold transition hover:bg-red-700"
          >
            Notify Me
          </button>
        </form>

      </div>
    </section>
  );
}