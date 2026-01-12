'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    image: "/oneToone.jpg",
    title: "One to One Sessions",
    description: "A focused 1-on-1 session where you and I connect directly to clear your doubts on BGMI setup, gameplay, Instagram growth, and YouTube content strategy — based on what you actually need.",
    href: "/products/one-to-one"
  },
  {
    image: "/sensitivity.jpg",
    title: "Sensitivity",
    description: "Accurate, device-specific BGMI sensitivity setups — tested, refined, and trusted by many players & creators for consistent performance. Include Drills and Guides.",
    href: "/products/senstivity"
  },
  {
    image: "/cl.jpg",
    title: "Control Layout",
    description: "Optimized BGMI control layouts designed for faster reactions, cleaner movement, and better control — tested and trusted by real players & creators.",
    href: "/products/control-layout"
  },
  {
    image: "/thumb.jpg",
    title: "THUMBNAIL PACK",
    description: "A gaming-focused thumbnail asset pack designed to help you create high-quality, eye-catching thumbnails.",
    href: "/products/thumbnail"
  },
  {
    image: "/videoedit.jpg",
    title: "VIDEO EDITING PACK",
    description: "A gaming-focused video editing asset pack designed to improve the quality, flow, and feel of your videos.",
    href: "/products/video-editing"
  }
];

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + products.length) % products.length;
    const totalCards = products.length;
    
    if (diff === 0) {
      // Active card - center
      return {
        transform: 'translateX(0%) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 30,
        filter: 'brightness(1)'
      };
    } else if (diff === 1 || diff === -totalCards + 1) {
      // Right card
      return {
        transform: 'translateX(80%) rotateY(-35deg) scale(0.85)',
        opacity: 0.7,
        zIndex: 20,
        filter: 'brightness(0.7)'
      };
    } else if (diff === totalCards - 1 || diff === -1) {
      // Left card
      return {
        transform: 'translateX(-80%) rotateY(35deg) scale(0.85)',
        opacity: 0.7,
        zIndex: 20,
        filter: 'brightness(0.7)'
      };
    } else if (diff === 2 || diff === -totalCards + 2) {
      // Far right
      return {
        transform: 'translateX(140%) rotateY(-45deg) scale(0.7)',
        opacity: 0.4,
        zIndex: 10,
        filter: 'brightness(0.5)'
      };
    } else {
      // Hidden
      return {
        transform: 'translateX(-140%) rotateY(45deg) scale(0.7)',
        opacity: 0.4,
        zIndex: 10,
        filter: 'brightness(0.5)'
      };
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setActiveIndex((prev) => (prev + 1) % products.length);

        setTimeout(() => {
          setIsAnimating(false);
        }, 600); // must match your animation duration
      }
    }, 4000); // ⬅️ change speed here (4s = slow & premium)

    return () => clearInterval(interval);
  }, [isAnimating]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = slider.children[0]?.clientWidth || 0;
    const gap = 24; // gap-6 = 1.5rem = 24px

    slider.scrollTo({
      left: (cardWidth + gap) * activeIndex,
      behavior: "smooth",
    });
  }, [activeIndex]);


  return (
    <section id="products" className="bg-[#f4f4f4] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-black">
            Our Products
          </h2>

          <div className="hidden md:flex gap-3">
            <button 
              onClick={handlePrev}
              disabled={isAnimating}
              className="flex h-14 w-14 items-center justify-center bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-50"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={handleNext}
              disabled={isAnimating}
              className="flex h-14 w-14 items-center justify-center bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-50"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative hidden md:block h-[650px] overflow-hidden" style={{ perspective: '2000px' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {products.map((product, index) => (
              <div
                key={index}
                className="absolute w-full max-w-md transition-all duration-700 ease-out"
                style={{
                  ...getCardStyle(index),
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="bg-black text-white shadow-2xl overflow-hidden">
                  {/* Image */}
                  <div className="relative h-[420px] w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover contrast-125"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-extrabold uppercase">{product.title}</h3>
                    <p className="mb-6 text-sm text-gray-300 line-clamp-3">{product.description}</p>

                    <a
                      href={product.href}
                      className="inline-flex items-center gap-2 bg-red-600 px-5 py-2 text-xs font-bold uppercase tracking-wide hover:bg-red-700 transition"
                    >
                      Get Now <span>›</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile Slider */}
        <div
          ref={sliderRef}
          className="md:hidden overflow-x-auto flex gap-6 snap-x snap-mandatory pb-6 scroll-smooth"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[85%] snap-center bg-black text-white shadow-xl rounded-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[260px] w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-extrabold uppercase mb-2">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                  {product.description}
                </p>

                <a
                  href={product.href}
                  className="inline-block bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-wide hover:bg-red-700 transition"
                >
                  Get Now
                </a>
              </div>
            </div>
          ))}
        </div>


        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 600);
                }
              }}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex 
                  ? 'w-8 bg-red-600' 
                  : 'w-2 bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}