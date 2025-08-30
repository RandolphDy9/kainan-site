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
      if (e.key === "Escape") {
        onClose()
      }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 max-w-[90vw] max-h-[90vh] mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-20 text-white hover:text-gray-300 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>

        <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain"
            priority
          />
        </div>

        <p className="text-white text-center mt-4 text-sm opacity-90">
          {alt}
        </p>
      </div>
    </div>
  )
}
