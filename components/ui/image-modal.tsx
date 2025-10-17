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
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* FIX 1: Remove backdrop-blur-sm - it crashes mobile Safari */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Modal Content */}
      <div
        className="relative z-10 max-w-7xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()} // FIX 2: Prevent closing when clicking image
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:top-2 md:right-2 z-20 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>

        {/* FIX 3: Use max-h instead of min-h, remove the excessive height */}
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

        {/* Caption */}
        {alt && (
          <p className="text-white text-center mt-4 text-sm md:text-base opacity-90">
            {alt}
          </p>
        )}
      </div>
    </div>
  )
}