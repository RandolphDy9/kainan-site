"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"

interface ImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90" />

      <div
        className="relative z-10 w-full max-w-7xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:top-2 md:right-2 z-20 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>

        {/* Fixed height ensures image displays on mobile */}
        <div className="relative w-full h-[80vh] md:h-[85vh]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="95vw"
            quality={85}
          />
        </div>

        {alt && (
          <p className="text-white text-center mt-4 text-sm md:text-base opacity-90">
            {alt}
          </p>
        )}
      </div>
    </div>
  )
}
