"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ImageModal } from "./ui/image-modal";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

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

  // Handle resize for responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clamp currentIndex when slidesPerView changes
  useEffect(() => {
    setCurrentIndex(prev => Math.min(prev, Math.max(0, foodImages.length - slidesPerView)));
  }, [slidesPerView]);

  const maxIndex = Math.max(0, foodImages.length - slidesPerView);

  const next = () => setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  const goToSlide = (index: number) => setCurrentIndex(Math.min(index, maxIndex));

  // Modal
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const handleImageClick = (src: string, alt: string) => setSelectedImage({ src, alt });
  const closeModal = () => setSelectedImage(null);

  // Swipe support
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) next();       // swipe left → next
    else if (distance < -50) prev(); // swipe right → prev
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Decorative blur circles */}
      <div className="hidden lg:block absolute top-0 left-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="hidden lg:block absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
          <h2 className="font-extrabold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 
              dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 
              bg-clip-text text-transparent 
              text-4xl sm:text-5xl md:text-7xl
              leading-tight max-w-5xl mx-auto">
            Featured menu items.
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 mt-2 max-w-3xl mx-auto 
            text-lg sm:text-xl lg:text-3xl leading-relaxed font-medium">
            Highlighting dishes that will always satisfy
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-200 rounded-full p-2 md:p-3 hover:bg-gray-50 transition-all duration-200"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Slider */}
          <div className="w-full overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {foodImages.map((image, index) => (
                <div
                  key={index}
                  className="px-2"
                  style={{ minWidth: `${100 / slidesPerView}%`, flex: `0 0 ${100 / slidesPerView}%` }}
                >
                  <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer">
                    <Image
                      src={image.src}
                      alt={`Food ${index + 1}`}
                      width={500}
                      height={380}
                      className="object-contain w-full h-full"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading={index < 3 ? "eager" : "lazy"}
                      quality={70}
                      onClick={() => handleImageClick(image.src, `Food ${index + 1}`)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={next}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-200 rounded-full p-2 md:p-3 hover:bg-gray-50 transition-all duration-200"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 border rounded-full transition-colors ${
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
