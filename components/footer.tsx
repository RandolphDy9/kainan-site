import { Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card py-12 px-4 border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Left section */}
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-amber-700">Who we are?</h1>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Kainan - A Place to Eat</h3>
            <p className="text-muted-foreground text-pretty mb-4">
              At Kainan, we&apos;re passionate about sharing the bold, authentic flavours of the Philippines.
              Rooted in tradition and inspired by family recipes, our food is crafted with love and heart in every dish —
              from our housemade silog marinades and sauces to our indulgent desserts.
            </p>
            <p className="text-muted-foreground text-pretty mb-4">
              Since opening our doors in April 2023, we&apos;ve been warmly embraced by the Filipino community craving for a
              taste of home and welcomed by locals eager to experience something new and different. Our mission is simple:
              To introduce, and reintroduce the rich flavours of the Philippines, one dish at a time.
            </p>
            <p className="text-muted-foreground text-pretty mb-4">
              We believe food is more than just a meal — it&apos;s a way to connect; sharing stories to build community.
              Whether you&apos;re here for a quick bite or sitting through a full meal, the moment you walk through our doors,
              you instantly become part of our Kainan family.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100091358628559"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors my-2"
            >
              <Facebook className="w-5 h-5" />
              Follow us on Facebook
            </a>
          </div>

          {/* Right section (optional for future info) */}
          <div></div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-border mt-8 pt-8 text-center space-y-2 flex justify-between">
          <p className="text-sm text-muted-foreground text-left">
            © 2025 <b>Kainan: A Place to Eat</b> Restaurant. All rights reserved.
          </p>

          {/* Developer credit */}
          <p className="text-xs text-muted-foreground text-right">
            Built by{" "}
            <a
              href="https://www.randolphdy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Randolph Dy
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
