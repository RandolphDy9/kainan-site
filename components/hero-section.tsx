import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-card to-background">
      <div className="absolute inset-0 bg-[url('/images/hero3-bg.jpeg')] bg-cover bg-center" />

      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-black/40 to-transparent backdrop-blur-md rounded-2xl p-6 sm:px-20 sm:py-8 text-center text-white shadow-xl">
          <div className="mb-6">
            <Image
              src="/images/logo.png"
              alt="Kainan - A Place to Eat"
              width={300}
              height={200}
              className="mx-auto mb-6 drop-shadow-lg"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-balance drop-shadow-md">
            Welcome to <span className="text-[#F5B035]">Kainan</span>
          </h1>

          <p className="text-2xl md:text-3xl mb-2 max-w-2xl mx-auto text-white font-bold">
            🇵🇭 Taste the flavours of the Philippines
          </p>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white font-semi leading-relaxed">
            Authentic Filipino dishes made with love and tradition
          </p>
        </div>
      </div>
    </section>
  )
}
