import { Facebook, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Kainan - A Place to Eat</h3>
            <p className="text-muted-foreground text-pretty mb-4">
              Authentic Filipino cuisine crafted with love by our family. Experience the warmth of Filipino hospitality
              in every dish.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100091358628559"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Follow us on Facebook
            </a>
          </div>
          <div></div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground mt-2">© 2025 <b>Kainan: A place to eat</b> Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
