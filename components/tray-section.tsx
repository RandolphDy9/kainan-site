"use client";
import { useState } from "react";
import Image from "next/image";
import { ImageModal } from "./ui/image-modal";

export default function TraySection() {
  const foodImages = [
    { src: "/images/trays/tray-menu.png", alt: "Tray menu" },
    { src: "/images/trays/full-trays.png", alt: "Trays" },
  ];

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (image: { src: string; alt: string }) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
          <h2 className="font-extrabold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 
            dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 
            bg-clip-text text-transparent 
            text-4xl sm:text-5xl md:text-7xl leading-tight max-w-5xl mx-auto">
            Food fit for a crowd.
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2 max-w-3xl mx-auto 
            text-lg sm:text-xl lg:text-3xl leading-relaxed font-medium">
            Whether you&apos;re throwing a small gathering or a big party,
            let us do the cooking for you.
          </p>
        </div>

        {/* Images layout */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Left (wide image) */}
          <div 
            className="md:col-span-2 relative h-[250px] sm:h-[350px] md:h-[500px] bg-[#FEFCE8] border rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openModal(foodImages[1])}
          >
            <Image
              src={foodImages[1].src}
              alt={foodImages[1].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
          </div>

          {/* Right (portrait) */}
          <div
            className="md:col-span-1 relative h-[450px] md:h-[500px] bg-[#FEFCE8] border rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity md:mt-0 mt-4"
            onClick={() => openModal(foodImages[0])}
          >
            <Image
              src={foodImages[0].src}
              alt={foodImages[0].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={closeModal}
        />
      )}
    </section>
  );
}