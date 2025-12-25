import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiNike,
  SiIntel,
  SiSteelseries,
} from "react-icons/si";
import NewsCard from "./NewsCard";

export default function NewsSection() {
  return (
    <section className="bg-[#f4f4f4] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Sponsors */}
        <div className="mb-20 flex flex-wrap items-center justify-center gap-16 text-black/70">
          <SiSteelseries size={40} />
          <SiNike size={40} />
          <SiIntel size={40} />
          <SiSteelseries size={40} />
          <SiNike size={40} />
          <SiIntel size={40} />
        </div>

        {/* Header */}
        <div className="mb-14 flex items-center justify-between">
          <h2 className="text-6xl font-extrabold uppercase tracking-tight text-black">
            News
          </h2>

          <div className="flex gap-3">
            <button className="flex h-14 w-14 items-center justify-center bg-red-600 text-white hover:bg-red-700 transition">
              <ChevronLeft />
            </button>
            <button className="flex h-14 w-14 items-center justify-center bg-red-600 text-white hover:bg-red-700 transition">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <NewsCard
            image="/news-1.jpg"
            title="Giveaway"
            description="Gear up for victory! Join FasterUI Esports giveaway and enter to win a premium gaming keyboard."
          />
          <NewsCard
            image="/news-2.jpg"
            title="Academy Team"
            description="Our Academy Team receives invaluable mentorship from experienced seniors, guiding them to success."
          />
          <NewsCard
            image="/news-3.jpg"
            title="Female Team"
            description="We’re proud to announce the expansion into female divisions, paving the way for new champions."
          />
        </div>
      </div>
    </section>
  );
}
