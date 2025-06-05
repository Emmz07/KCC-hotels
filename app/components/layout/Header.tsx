"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/constants"
import { ThemeToggle } from "../theme/ThemeToggle"
import { Button } from "@/components/ui/button"
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
        ? "dark:bg-black bg-white shadow-sm py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 relative flex items-center justify-between ">
        <Link href="/" className="flex items-center gap-2 mr-2">
            <Image
            src="/KCCH.png"
            alt=""
            width={100}
            height={36}
            className="h-6 w-24 md:h-10 md:w-36"
            priority
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
                  ? "text-[color:var(--limeish)]"
                  : "text-[color:var(--greenish)]"
              )}
            >
              {item.title}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/rooms" >
          <Button size="sm" className="text-base text-sm border-[color:var(--greenish)] bg-[color:var(--greenish)] transition-colors duration-700 border-white hover:bg-[color:var(--limeish)] hover:text-black">Book Now</Button>
          </Link>
        </nav>
        
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6 text-white bg-black/40 rounded" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[100] bg-white dark:bg-black dark:text-white md:hidden flex flex-col overflow-y-auto">
          <div className="h-full w-full flex flex-col">
            <div className="flex items-center justify-between py-4 px-8">
              <Link href="/" className="flex items-center gap-2 mr-2">
                <Image
                  src="/KCCH.png"
                  alt=""
                  width={100}
                  height={36}
                  className="h-6 w-18"
                  priority
                />
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6 text-[color:var(--greenish)]" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center text-center space-y-8 px-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-2xl font-semibold transition-colors hover:text-[color:var(--limeish)]",
                    pathname === item.href
                      ? "text-[color:var(--greenish)]"
                      : "text-[color:var(--limeish)] hover:text-[color:var(--greenish)]"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              <Link href="/rooms">
                <Button className="w-60 py-6 text-lg font-bold rounded-xl border-[color:var(--greenish)] bg-[color:var(--greenish)] transition-colors duration-700 border-white hover:bg-[color:var(--limeish)] hover:text-black">
                  Book Now
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}


    </header>
  )
}