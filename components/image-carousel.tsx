"use client"

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ImageModal } from "./ui/image-modal";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const foodImages = [
    { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712135/food-1_enl1kd.jpg" },
    { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712136/food-2_wczysf.png" },
    { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712135/food-3_xuozkf.jpg" },
    { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712136/food-4_dsynkq.jpg" },
    { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712135/food-5_y9hz0v.png" },
    { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712137/food-6_td5jbr.jpg" },
    { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712137/food-7_khrs87.jpg" },
    { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712136/food-8_idq6gy.png" },
    { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712136/food-9_onji2s.jpg" },
  ];

  // Handle resize - separate from auto-slide
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, foodImages.length - slidesPerView);
  
  // CRITICAL FIX: Use useCallback to memoize the next function
  const next = useCallback(() => {
    setCurrentIndex(prev => {
      const currentMax = Math.max(0, foodImages.length - slidesPerView);
      if (prev >= currentMax) {
        return 0;
      }
      return prev + 1;
    });
  }, [slidesPerView, foodImages.length]);
  
  const prev = useCallback(() => {
    setCurrentIndex(prev => {
      const currentMax = Math.max(0, foodImages.length - slidesPerView);
      if (prev <= 0) {
        return currentMax;
      }
      return prev - 1;
    });
  }, [slidesPerView, foodImages.length]);
  
  const goToSlide = (index: number) => setCurrentIndex(Math.min(index, maxIndex));

  // CRITICAL FIX: Auto-slide that doesn't access window inside interval
  useEffect(() => {
    // Clear any existing interval
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }

    // Create new interval using the memoized next function
    autoSlideRef.current = setInterval(() => {
      next();
    }, 7000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [next]); // Use next as dependency since it's memoized

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

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Decorative background - hide heavy blurs on mobile to avoid iOS crashes */}
      <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
          <h2
            className="font-extrabold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 
              dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 
              bg-clip-text text-transparent 
              text-4xl sm:text-5xl md:text-7xl
              leading-tight max-w-5xl mx-auto"
          >
            Featured menu items.
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 mt-2 max-w-3xl mx-auto 
            text-lg sm:text-xl lg:text-3xl leading-relaxed font-medium">
            Highlighting dishes that will always satisfy
          </p>
        </div>

        {/* Carousel Container with Navigation Buttons */}
        <div className="relative">
          {/* Left Arrow */}
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
                    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer">
                      <Image
                        src={image.src}
                        alt={`Food ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index < 3}
                        onClick={() => handleImageClick(image.src, `Food ${index + 1}`)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
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

        {/* Pagination Dots */}
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

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            src={selectedImage.src}
            alt={selectedImage.alt}
            isOpen={!!selectedImage}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
}