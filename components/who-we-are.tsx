"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import { ImageModal } from './ui/image-modal';

const WhoWeAre = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
            <h2
              className="font-extrabold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 
                dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 
                bg-clip-text text-transparent 
                text-4xl sm:text-5xl md:text-7xl
                leading-tight max-w-5xl mx-auto"
            >
              Who we are?
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mt-2 max-w-3xl mx-auto 
              text-lg sm:text-xl lg:text-3xl leading-relaxed font-medium">
              Kainan - A place to eat 
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="relative w-full h-[400px] md:h-[700px] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer">
              <Image
                src="/images/who-we-are.png"
                alt="who-we-are-image"
                fill
                className="object-contain"
                onClick={() => handleImageClick("/images/who-we-are.png", "who-we-are-image")}
              />
            </div>
            <div className="relative w-full h-[400px] md:h-[700px] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer">
              <Image
                src="/images/customers.png"
                alt="customers-image"
                fill
                className="object-contain"
                onClick={() => handleImageClick("/images/customers.png", "customers-image")}
              />
            </div>
          </div>
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
  )
}

export default WhoWeAre;