"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "../theme/theme-toggle"
import { MenuIcon, CloseIcon } from "../ui/icons"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl font-bold">
            <span className="text-primary">Karan</span>Rao
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button onClick={toggleMenu} className="ml-2 p-2 rounded-md hover:bg-secondary" aria-label="Toggle menu">
              {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <a href="#about" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>
              About
            </a>
            <a href="#projects" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>
              Projects
            </a>
            <a href="#skills" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>
              Skills
            </a>
            <a href="#experience" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>
              Experience
            </a>
            <a href="#contact" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
