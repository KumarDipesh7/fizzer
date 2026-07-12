// app/components/NewVideoSection.tsx
'use client';

import Image from "next/image";
import { Play } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  views?: number;
  likes?: number;
  url: string;
  type: 'viewed' | 'recent';
};

type ApiResponse = {
  most_viewed?: Omit<Video, 'type'>;
  most_recent?: Omit<Video, 'type'>;
};

export default function NewVideoSection() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/youtube?_=' + Date.now(), {
      cache: 'no-store',
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json() as Promise<ApiResponse>;
      })
      .then((data) => {
        if (!mountedRef.current) return;

        const loadedVideos: Video[] = [];
        if (data.most_viewed) {
          loadedVideos.push({ ...data.most_viewed, type: 'viewed' });
        }
        if (data.most_recent) {
          loadedVideos.push({ ...data.most_recent, type: 'recent' });
        }

        setVideos(loadedVideos);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        console.error('Failed to load YouTube videos:', err);
        if (mountedRef.current) setLoadError(true);
      });

    return () => controller.abort();
  }, []);

  // Auto-rotate carousel every 6 seconds
  useEffect(() => {
    if (videos.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      const timeout = setTimeout(() => {
        if (!mountedRef.current) return;
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timeout);
    }, 6000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const currentVideo = videos[currentIndex] || null;

  const openVideo = useCallback(() => {
    if (currentVideo) window.open(currentVideo.url, '_blank', 'noopener,noreferrer');
  }, [currentVideo]);

  const metric =
    currentVideo?.views != null
      ? `${currentVideo.views.toLocaleString()} views`
      : currentVideo?.likes != null
      ? `${currentVideo.likes.toLocaleString()} likes`
      : null;

  return (
    <section id="vid" className="border-y border-white/10 bg-[#171313] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* ================= YOUTUBE CAROUSEL ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] items-center gap-10 md:gap-16">
          {/* LEFT INFO */}
          <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <p className="mb-3 text-xs uppercase tracking-widest text-red-500">
              {currentVideo?.type === 'viewed' ? 'Most Viewed Video' : 'Latest Upload'}
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-[1] md:leading-[0.95]">
              Featured
              <br />
              <span className="text-white">Video</span>
            </h2>

            <p className="mt-6 max-w-sm text-gray-400 text-sm leading-relaxed">
              {loadError
                ? 'Could not load video right now.'
                : currentVideo?.title || 'Loading top video...'}
            </p>

            {metric && (
              <div className="mt-6 flex items-center gap-6">
                <span className="text-red-500 text-sm font-bold">{metric}</span>
                <span className="h-px w-12 bg-red-600" />
              </div>
            )}
          </div>

          {/* RIGHT FEATURED VIDEO */}
          <div
            role="button"
            tabIndex={currentVideo ? 0 : -1}
            onClick={openVideo}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openVideo();
              }
            }}
            aria-label={currentVideo ? `Watch: ${currentVideo.title}` : undefined}
            className="relative h-[260px] sm:h-[320px] md:h-[420px] w-full overflow-hidden group cursor-pointer bg-black"
          >
            {currentVideo ? (
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <Image
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="play-btn flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#dc1428] transition-all duration-200 group-hover:scale-105 group-hover:bg-[#ef1b32]"
                  >
                    <Play
                      className="ml-1 h-7 w-7 fill-white text-white"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight line-clamp-2">
                    {currentVideo.title}
                  </h3>
                  <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
                    {currentVideo.type === 'viewed' ? 'Most Viewed' : 'Latest Video'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <p className="text-gray-400">
                  {loadError ? 'Video unavailable' : 'Loading top video...'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .play-btn {
          box-shadow: 0 0 0 0 rgba(220, 20, 40, 0.45);
          animation: pulse 2.2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(220, 20, 40, 0.45);
          }
          70% {
            box-shadow: 0 0 0 22px rgba(220, 20, 40, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(220, 20, 40, 0);
          }
        }
      `}</style>
    </section>
  );
}