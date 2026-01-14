import Image from "next/image";
import Link from "next/link";
import { IoGameController } from "react-icons/io5";

export default function MerchSection() {
  return (
    <section id="merch" className="bg-[#f4f4f4] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

          {/* LEFT — IMAGE */}
          <div className="relative h-[420px] lg:h-[520px]">
            <Image
              src="/merch.jpg"
              alt="Fizzer Merch"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div>
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded bg-red-600 text-white">
              <IoGameController size={20} />
            </div>

            <h2 className="mb-10 text-5xl font-extrabold uppercase leading-tight text-[#0a0a0a]">
              Top-Rated
              <br />
              Quality
              <br />
              Merch
            </h2>

            <Link
              href="#"
              className="inline-flex items-center justify-center bg-red-600 px-10 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-red-700 transition"
            >
              Coming Soon...
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
