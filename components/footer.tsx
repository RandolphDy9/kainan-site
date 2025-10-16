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
              Introduce and re-introduce the flavours of the Philippines, one dish at a time.
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
