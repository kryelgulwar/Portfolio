"use client"

import { useTheme } from "./theme-provider"
import { SunIcon, MoonIcon, LaptopIcon } from "../ui/icons"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-md ${
          theme === "light" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"
        }`}
        aria-label="Light mode"
      >
        <SunIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-md ${
          theme === "dark" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"
        }`}
        aria-label="Dark mode"
      >
        <MoonIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-md ${
          theme === "system" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"
        }`}
        aria-label="System preference"
      >
        <LaptopIcon className="h-5 w-5" />
      </button>
    </div>
  )
}
