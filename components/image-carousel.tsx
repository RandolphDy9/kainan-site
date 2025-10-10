"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const foodImages = [
    { src: "/images/highlights/food-1.jpg" },
    { src: "/images/highlights/food-2.png" },
    { src: "/images/highlights/food-3.jpg" },
    { src: "/images/highlights/food-4.jpg" },
    { src: "/images/highlights/food-5.png" },
    { src: "/images/highlights/food-6.jpg" },
    { src: "/images/highlights/food-7.jpg" },
    { src: "/images/highlights/food-8.png" },
    { src: "/images/highlights/food-9.jpg" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, foodImages.length - slidesPerView);
  
  const next = () => {
    setCurrentIndex(prev => {
      // If at the end, loop back to the beginning
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };
  
  const prev = () => {
    setCurrentIndex(prev => {
      // If at the beginning, loop to the end
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };
  
  const goToSlide = (index: number) => setCurrentIndex(Math.min(index, maxIndex));

  // Auto-slide effect
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentIndex(prev => {
        // If at the end, loop back to the beginning
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(autoSlideInterval);
  }, [maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block">
              <span className="text-amber-600 dark:text-amber-500 font-semibold text-sm uppercase tracking-widest mb-2 block">
                Culinary Excellence
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
                Our Delicious Dishes
              </h2>
            </div>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Feast your eyes on our authentic Filipino cuisine 🇵🇭, prepared fresh daily with traditional recipes passed down through generations ❤️🍴
            </p>
          </div>

        {/* Carousel Container with Navigation Buttons */}
        <div className="relative">
          {/* Left Arrow - Hidden on mobile, positioned outside carousel on desktop */}
          <button
            type="button"
            onClick={prev}
            className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-200 cursor-pointer rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div 
            className="w-full overflow-hidden bg-white rounded-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
          <div className="relative min-h-96">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
              }}
            >
              {foodImages.map((image, index) => (
                <div
                  key={index}
                  className="px-2"
                  style={{
                    minWidth: `${100 / slidesPerView}%`,
                    flex: `0 0 ${100 / slidesPerView}%`,
                  }}
                >
                  <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                      src={image.src}
                      alt={`Food ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index < slidesPerView}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

          {/* Right Arrow - Hidden on mobile, positioned outside carousel on desktop */}
          <button
            type="button"
            onClick={next}
            className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-200 cursor-pointer rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots (below carousel) */}
        <div className="flex justify-center mt-6 gap-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 border rounded-full cursor-pointer transition-colors ${
                currentIndex === index
                  ? "bg-amber-600 border-amber-600"
                  : "bg-gray-200 border-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}