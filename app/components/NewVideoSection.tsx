// app/components/NewVideoSection.tsx
'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    fetch('/api/youtube?_=' + Date.now(), {
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
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 300); // Half of the transition duration
    }, 6000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const currentVideo = videos[currentIndex] || null;

  // Advertisement images (replace with your actual image paths)
  const adImages = [
    '/testimonials/testimonial1.jpg',
    '/testimonials/testimonial2.jpg',
    '/testimonials/testimonial3.jpg',
    '/testimonials/testimonial4.jpg',
    '/testimonials/testimonial5.jpg',
    '/testimonials/testimonial6.jpg',
    '/testimonials/testimonial7.jpg',
    '/testimonials/testimonial8.jpg',
  ];

  // Duplicate the array for seamless loop
  const duplicatedtestimonials = [...adImages, ...adImages];

  return (
    <section id="vid" className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= YOUTUBE CAROUSEL ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] items-center mb-20 md:mb-28 gap-10 md:gap-16">

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
              <div className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
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
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <p className="text-gray-400">Loading top video...</p>
              </div>
            )}
          </div>
        </div>


        {/* ================= SPONSORS MARQUEE ================= */}
        <div>
          <h3 className="mb-6 text-xl font-extrabold uppercase">
            Reviews & Testimonials
          </h3>

          <div className="h-px w-full bg-white/10 mb-8" />

          {/* Marquee Container */}
          <div className="relative overflow-hidden py-4">

            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 md:w-48 z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent backdrop-blur-sm" />
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 md:w-48 z-10 pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent backdrop-blur-sm" />

            {/* Scrolling Content */}
            <div className="flex gap-6 marquee-scroll group">
              {duplicatedtestimonials.map((imgSrc, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[420px] h-[200px] sm:h-[220px] md:h-[260px] relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform duration-300">
                  <Image
                    src={imgSrc}
                    alt={`Sponsor ${(index % adImages.length) + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-scroll {
          animation: marquee 35s linear infinite;
        }

        @media (min-width: 768px) {
          .marquee-scroll {
            animation: marquee 35s linear infinite;
          }
        }

        .marquee-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
