// app/components/NewVideoSection.tsx
'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { Zap, Gamepad2, Hand, Plane } from "lucide-react";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  views?: number;
  likes?: number;
  url: string;
  type: 'viewed' | 'liked';
};

export default function NewVideoSection() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/api/youtube?_=' + Date.now(), {  // Adds timestamp to bust cache
        cache: 'no-store',
      })
      .then(res => res.json())
      .then(data => {
        const loadedVideos: Video[] = [];

        if (data.most_viewed) {
          loadedVideos.push({
            ...data.most_viewed,
            type: 'viewed',
          });
        }

        if (data.most_recent) {
          loadedVideos.push({
            ...data.most_recent,
            type: 'recent',
          });
        }
        console.log("Loaded videos:", loadedVideos);

        setVideos(loadedVideos);
      })
      .catch(err => console.error('Failed to load YouTube videos:', err));
  }, []);

  // Auto-rotate carousel every 6 seconds
  useEffect(() => {
    if (videos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const currentVideo = videos[currentIndex] || null;

  return (
    <section id="vid" className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= YOUTUBE CAROUSEL ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] items-center mb-20 md:mb-28 gap-10 md:gap-16">

          {/* LEFT INFO */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-red-500">
              {currentVideo?.type === 'viewed' ? 'Most Viewed Video' : 'Latest Upload'}
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-[1] md:leading-[0.95]">
              Featured
              <br />
              <span className="text-white">Video</span>
            </h2>

            <p className="mt-6 max-w-sm text-gray-400 text-sm leading-relaxed">
              {currentVideo?.title || 'Loading top video...'}
            </p>

            {currentVideo?.views || currentVideo?.likes ? (
              <div className="mt-6 flex items-center gap-6">
                <span className="text-red-500 text-sm font-bold">
                  {currentVideo.views
                    ? `${currentVideo.views.toLocaleString()} views`
                    : `${currentVideo.likes?.toLocaleString()} likes`}
                </span>

                <span className="h-px w-12 bg-red-600" />
              </div>
            ) : null}
          </div>

          {/* RIGHT FEATURED VIDEO */}
          <div
            onClick={() => currentVideo && window.open(currentVideo.url, '_blank')}
            className="relative h-[260px] sm:h-[320px] md:h-[420px] w-full overflow-hidden group cursor-pointer bg-black"
          >

            {currentVideo ? (
              <>
                {/* Thumbnail */}
                <Image
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  fill
                  className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-110"
                />

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 backdrop-blur-md group-hover:scale-110 transition">
                    <span className="ml-1 text-3xl">▶</span>
                  </div>
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight line-clamp-2">
                    {currentVideo.title}
                  </h3>

                  <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
                    {currentVideo.type === 'viewed' ? 'Most Viewed' : 'Latest Video'}
                  </p>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <p className="text-gray-400">Loading top video...</p>
              </div>
            )}
          </div>
        </div>


        {/* ================= PREVIOUS MATCHES (UNCHANGED) ================= */}
        <div>
          <h3 className="mb-6 text-xl font-extrabold uppercase">
            Previous 3 Matches
          </h3>

          <div className="h-px w-full bg-white/10 mb-2" />

          <div className="space-y-1 overflow-x-auto md:overflow-visible">
            <MatchRow
              result="L"
              date="Ended – Feb 14, 18:43"
              event="ShadowStrike Invitational"
              left={<Zap size={18} />}
              score="0 - 2"
              right={<Plane size={18} />}
            />

            <MatchRow
              result="W"
              date="Ended – Feb 13, 17:14"
              event="ShadowStrike Invitational"
              left={<Hand size={18} />}
              score="0 - 1"
              right={<Zap size={18} />}
            />

            <MatchRow
              result="W"
              date="Ended – Feb 13, 13:51"
              event="ShadowStrike Invitational"
              left={<Zap size={18} />}
              score="2 - 0"
              right={<span className="text-lg">🍪</span>}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= MATCH ROW (UNCHANGED) ================= */
function MatchRow({
  result,
  date,
  event,
  left,
  score,
  right,
}: {
  result: "W" | "L";
  date: string;
  event: string;
  left: React.ReactNode;
  score: string;
  right: React.ReactNode;
}) {
  return (
    <div className="min-w-[700px] md:min-w-0 grid grid-cols-[40px_220px_1fr_160px_80px_160px] items-center py-4 text-sm border-b border-white/10">
      <span className={`font-extrabold ${result === "W" ? "text-white" : "text-gray-500"}`}>
        {result}
      </span>
      <span className="text-gray-400">{date}</span>
      <span className="text-gray-300">{event}</span>
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center bg-red-600">
          {left}
        </span>
        <span>FasterUI</span>
      </div>
      <span className="text-center">{score}</span>
      <div className="flex items-center gap-2 justify-end">
        <span>Opponent</span>
        <span className="flex h-8 w-8 items-center justify-center bg-white text-black">
          {right}
        </span>
      </div>
    </div>
  );
}