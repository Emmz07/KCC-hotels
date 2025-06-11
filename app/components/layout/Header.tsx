"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X} from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/constants"
import { ThemeToggle } from "../theme/ThemeToggle"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

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
      "fixed top-0 w-full z-50 transition-all duration-300 px-4 ",
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
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors text-white hover:text-[color:var(--greenish)] active:text-[color:var(--limeish)]",
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
            <Button size="sm" className="text-base text-sm border-[color:var(--greenish)] bg-[color:var(--greenish)] transition-colors duration-700 border-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black active:bg-[color:var(--limeish)] active:text-black">
              Book Now
            </Button>
          </Link>

        </nav>
        
        {/* Mobile Nav Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6 text-white rounded" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-white dark:bg-black flex flex-col md:hidden transition-colors duration-300"
          >
            <div className="flex items-center justify-between py-4 px-8">
              <Link href="/" className="flex items-center gap-2 mr-2" onClick={() => setIsOpen(false)}>
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

            <nav className="flex flex-1 flex-col items-center justify-center text-center space-y-6 px-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 py-2 px-4 rounded",
                    "dark:text-white text-black bg-transparent",
                    "hover:text-[color:var(--greenish)] active:text-[color:var(--limeish)]",
                    pathname === item.href
                      ? "text-[color:var(--limeish)]"
                      : ""
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              

              <Link href="/rooms" className="w-full">
                <Button
                  className="w-full py-4 text-base font-semibold rounded-lg border-[color:var(--greenish)] bg-[color:var(--greenish)] transition-colors duration-300 border-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black active:bg-[color:var(--limeish)] active:text-black"
                >
                  Book Now
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}