import Image from "next/image"

const foodImages = [
  { src: "/images/highlights/food-1.jpg", span: "md:row-span-2" },
  { src: "/images/highlights/food-2.png", span: "md:row-span-2" },
  { src: "/images/highlights/food-3.jpg", span: "md:row-span-2" },
  { src: "/images/highlights/food-4.jpg", span: "md:row-span-2" },
  { src: "/images/highlights/food-5.png", span: "md:row-span-2" },
  { src: "/images/highlights/food-6.jpg", span: "md:row-span-2" },
  { src: "/images/highlights/food-7.jpg", span: "md:row-span-2" },
  { src: "/images/highlights/food-8.png", span: "md:row-span-2" },
  { src: "/images/highlights/food-9.jpg", span: "md:row-span-2" },
]

export function FoodGallery() {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-amber-600 dark:text-amber-500 font-semibold text-sm uppercase tracking-widest mb-2 block">
              Culinary Excellence
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              Our Delicious Dishes
            </h2>
          </div>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Feast your eyes on our authentic Filipino cuisine 🇵🇭, prepared fresh daily with traditional recipes passed down through generations ❤️🍴
          </p>
        </div>

        {/* Masonry Grid - show on web, hide on mobile */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 auto-rows-auto md:auto-rows-[280px]">
          {foodImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group border shadow-lg rounded-xl ${image.span}`}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-0">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Filipino dish ${index + 1}`}
                fill
                className="object-contain md:object-cover w-full h-full"
                loading={index === 0 ? "eager" : "lazy"} // Only load the first image eagerly
                placeholder="blur"
                blurDataURL="/images/placeholder-blur.jpg"
                quality={75}
              />

                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Masonry Grid - show on mobile, hide on web */}
        <div className="grid md:hidden grid-cols-1 gap-5">
          {foodImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group border-0 shadow-lg rounded-xl ${image.span}`}
            >
              <div className="relative w-full h-auto">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={`Filipino dish ${index + 1}`}
                  width={1000} // optional fixed width for proper scaling
                  height={1000} // optional fixed height
                  className="w-full h-auto object-contain"
                />

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
