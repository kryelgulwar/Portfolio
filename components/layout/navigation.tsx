"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
<<<<<<< HEAD
import { useState } from "react"
=======
import { useState, useEffect } from "react"
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
<<<<<<< HEAD
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Workshops", path: "/workshops" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/#contact" },
  ]

=======
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Experience", path: "/#experience" },
    { name: "Projects", path: "/#projects" },
    { name: "Skills", path: "/#skills" },
    { name: "Contact", path: "/#contact" },
  ]

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = routes.map((route) => route.path.replace("/#", ""))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [routes])

>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom flex items-center justify-between h-20">
        <Link href="/" className="font-playfair text-2xl font-bold tracking-tight">
<<<<<<< HEAD
          John<span className="text-muted-foreground">Doe</span>
=======
          Karan<span className="text-primary">Rao</span>
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "link-underline text-lg transition-colors",
<<<<<<< HEAD
                pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
=======
                activeSection === route.path.replace("/#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
              )}
            >
              {route.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background z-40 p-6">
          <nav className="flex flex-col space-y-6 text-center">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-2xl py-2 transition-colors",
<<<<<<< HEAD
                  pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
=======
                  activeSection === route.path.replace("/#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
