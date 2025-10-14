"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-close after 1 minute (60000ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 90000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-[#D33640] text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-start sm:items-center justify-between gap-3">
          {/* Content */}
          <div className="flex-1 text-center sm:text-left space-y-1 sm:space-y-0">
            {/* Mobile: stacked vertically, Desktop: 2 rows */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-1 sm:gap-4 text-sm sm:text-base">
              <div className="flex items-center gap-1 sm:flex-1">
                <span className="font-semibold">🔒 Closed:</span>
                <span>Oct 26 - Nov 3, 2025</span>
              </div>
              <div className="flex items-center gap-1 sm:flex-1">
                <span className="🎉 font-semibold">🎉 Reopening:</span>
                <span>Nov 4, 2025</span>
              </div>
              <div className="flex items-center gap-1 sm:flex-1">
                <span className="font-semibold">🔒 Closed:</span>
                <span>Dec 21 - Jan 4, 2026</span>
              </div>
              <div className="flex items-center gap-1 sm:flex-1">
                <span className="font-semibold">🎉 Reopening:</span>
                <span>Jan 5, 2026</span>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Close banner"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
