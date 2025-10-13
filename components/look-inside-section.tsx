import Image from 'next/image';

export default function LookInside() {
  const foodImages = [
    { src: "/images/inside/inside-1.jpg" },
    { src: "/images/inside/inside-2.jpg" },
    { src: "/images/inside/inside-3.jpg" },
    { src: "/images/inside/inside-4.jpg" },
    { src: "/images/inside/inside-5.jpg" },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
            <h2
              className="font-extrabold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 
                dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 
                bg-clip-text text-transparent 
                text-4xl sm:text-5xl md:text-7xl
                leading-tight max-w-5xl mx-auto"
            >
              Have a look inside Kainan.
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 mt-2 max-w-3xl mx-auto 
              text-lg sm:text-xl lg:text-3xl leading-relaxed font-medium">
              Step inside — where every table tells a story of laughter, tradition, and celebration.
            </p>
          </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-2 gap-4">
          {/* Image 1 - Large featured image */}
          <div className="col-span-2 row-span-2 bg-gray-200 rounded-lg overflow-hidden relative min-h-[300px]">
            <Image 
              src={foodImages[0].src}
              alt="Inside restaurant view 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>
          
          {/* Image 2 */}
          <div className="col-span-1 row-span-1 sm:col-start-auto md:col-start-3 bg-gray-200 rounded-lg overflow-hidden relative aspect-square">
            <Image 
              src={foodImages[1].src}
              alt="Inside restaurant view 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
          </div>
          
          {/* Image 3 */}
          <div className="col-span-1 row-span-1 sm:col-start-auto md:col-start-3 md:row-start-2 bg-gray-200 rounded-lg overflow-hidden relative aspect-square">
            <Image 
              src={foodImages[2].src}
              alt="Inside restaurant view 3"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
          </div>
          
          {/* Image 4 */}
          <div className="col-span-1 row-span-1 sm:col-start-auto md:col-start-4 md:row-start-2 bg-gray-200 rounded-lg overflow-hidden relative aspect-square">
            <Image 
              src={foodImages[3].src}
              alt="Inside restaurant view 4"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
          </div>
          
          {/* Image 5 */}
          <div className="col-span-1 row-span-1 sm:col-start-auto md:col-start-4 md:row-start-1 bg-gray-200 rounded-lg overflow-hidden relative aspect-square">
            <Image 
              src={foodImages[4].src}
              alt="Inside restaurant view 5"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}