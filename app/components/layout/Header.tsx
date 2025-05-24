"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/constants"
import { ThemeToggle } from "../theme/ThemeToggle"
import { Button } from "@/components/ui/button"
import { BedDouble } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-4",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md shadow-sm py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 relative flex items-center justify-between ">
        <Link href="/" className="flex items-center gap-2 mr-2">
            <Image
            src="/KCCC.png"
            alt=""
            width={70}
            height={36}
            className="h-10 w-16"
            priority // Add this prop for LCP images above the fold
        />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors text-white hover:text-lime-200",
                pathname === item.href
                  ? "text-lime-100"
                  : "text-lime-300"
              )}
            >
              {item.title}
            </Link>
          ))}
          <ThemeToggle />
          <Button size="sm" className="text-base text-sm border-green-500 bg-green-400 transition-colors duration-700 border-white hover:bg-green-500 hover:text-white">Book Now</Button>
        </nav>
        
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="container h-full flex flex-col">
            <div className="flex items-center justify-between py-4 px-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <BedDouble className="h-8 w-8 text-primary" />
                <span className="font-playfair text-xl font-bold">KCC Hotel</span>
              </Link>
              <Button variant="ghost"  size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6 text-yellow-400" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            
            <nav className="flex flex-col space-y-6 pt-10 px-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-yellow-100",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button className="w-full mt-4 text-base text-sm border-green-500 bg-green-400 transition-colors duration-700 border-white hover:bg-green-500 hover:text-white">Book Now</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}