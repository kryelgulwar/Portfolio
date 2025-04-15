"use client"

import { useEffect } from "react"
import { ThemeProvider } from "./components/theme/theme-provider"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Experience from "./components/sections/Experience"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"

function App() {
  // Smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e: MouseEvent) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
