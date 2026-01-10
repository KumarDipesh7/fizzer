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
    fetch('/api/youtube')
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
        <div className="grid grid-cols-[1.2fr_2fr] items-center mb-28 gap-16">

          {/* LEFT INFO */}
          <div>
            <p className="mb-3 text-sm text-gray-400">
              {currentVideo?.type === 'viewed' ? 'Most Viewed' : 'Latest Upload'}
            </p>

            <h2 className="text-6xl font-extrabold uppercase leading-none">
              Top
              <br />
              Video
            </h2>

            <p className="mt-4 text-sm text-gray-300">
              {currentVideo?.title || 'Loading top video...'}
            </p>

            <p className="mt-6 text-sm font-semibold text-red-500">
              {currentVideo?.views
                ? `${currentVideo.views.toLocaleString()} views`
                : currentVideo?.likes
                ? `${currentVideo.likes.toLocaleString()} likes`
                : ''}
            </p>
          </div>

          {/* RIGHT CAROUSEL CARD */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg group cursor-pointer"
               onClick={() => currentVideo && window.open(currentVideo.url, '_blank')}>
            {currentVideo ? (
              <>
                <Image
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold line-clamp-2">
                    {currentVideo.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
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

          <div className="space-y-1">
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
    <div className="grid grid-cols-[40px_220px_1fr_160px_80px_160px] items-center py-4 text-sm border-b border-white/10">
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