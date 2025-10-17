"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageModal } from "./ui/image-modal";

const foodImages = [
  { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712135/food-1_enl1kd.jpg" },
  { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712136/food-2_wczysf.png" },
  { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712135/food-3_xuozkf.jpg" },
  { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712136/food-4_dsynkq.jpg" },
  { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712135/food-5_y9hz0v.png" },
  { src: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712137/food-6_td5jbr.jpg" },
];

export default function FeaturesMobile() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="md:hidden max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-20 px-4">
        <h2 className="font-extrabold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 
            dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 
            bg-clip-text text-transparent 
            text-4xl sm:text-5xl md:text-7xl
            leading-tight max-w-5xl mx-auto">
          Featured<br/> menu items.
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mt-2 max-w-3xl mx-auto 
          text-lg sm:text-xl lg:text-3xl leading-relaxed font-medium">
          Highlighting dishes that<br />will always satisfy
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {foodImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-40 rounded-lg overflow-hidden bg-gray-100 cursor-pointer"
            onClick={() => handleImageClick(image.src, `Food ${index + 1}`)}
          >
            <Image
              src={image.src}
              alt={`Food ${index + 1}`}
              width={400}
              height={400}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
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
  );
}
