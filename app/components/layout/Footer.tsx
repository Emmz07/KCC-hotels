import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { navItems, socialLinks } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t px-12">
      <div className="container mx-auto px-4 relative flex items-center justify-between grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex relative items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
            <Image
            src="/KCCC.png"
            alt="KCC Logo"
            width={110}
            height={64}
            style={{ height: "auto" }} // Add this to maintain aspect ratio if you set width
            className="h-16 w-32"      // Or ensure both h- and w- are set in Tailwind
          />
        </Link>
          </div>
          <p className="text-[color:var(--greenish)] text-sm max-w-xs">
            A perfect blend of comfort, luxury, and service in a captivating atmosphere of warmth, hospitality, and tradition.
          </p>
        </div>
        
        <div>
          <h3 className="font-playfair text-lg font-semibold text-[color:var(--greenish)] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-playfair text-lg font-semibold text-[color:var(--greenish)] mb-4">Contact Us</h3>
          <address className="not-italic space-y-2">
            <p className="text-sm text-muted-foreground">P.O. Box 30858, Kibaha, Maili Moja</p>
            <p className="text-sm text-muted-foreground">Pwani, Tanzania</p>
            <p className="text-sm text-muted-foreground">+255 232 402 644, +255 754 657 202</p>
            <p className="text-sm text-muted-foreground">info@kcchotel.com</p>
          </address>

          <div className="flex gap-4 mt-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-playfair text-lg text-[color:var(--greenish)] font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Subscribe to our newsletter for special deals and updates.
          </p>
          <div className="flex gap-2">
            <Input id="footer-form" placeholder="Your email" className="max-w-[220px]" />
            <Button type="submit" className="text-base text-sm border-[color:var(--greenish)] bg-[color:var(--greenish)] transition-colors duration-700 border-white hover:bg-[color:var(--limeish)] hover:text-black" size="sm">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t container mx-auto px-4 relative flex items-center justify-between">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KCC Hotel. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}