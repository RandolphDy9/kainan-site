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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4"
      onClick={onClose} // Click outside closes modal
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full h-full max-w-[95vw] max-h-[95vh] overflow-auto flex flex-col items-center"
        onClick={onClose} // Prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-20 text-white hover:text-gray-300 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>

        {/* Image */}
        <div className="relative w-full min-h-screen md:min-h-[150vh] flex-shrink-0">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain w-full h-full"
            priority
          />
        </div>

        {/* Caption */}
        {alt && (
          <p className="text-white text-center mt-4 mb-6 text-sm opacity-90">
            {alt}
          </p>
        )}
      </div>
    </div>
  )
}
