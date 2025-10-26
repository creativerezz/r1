"use client"

import { useEffect, useState } from "react"
import { Button } from "@/registry/new-york/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/registry/new-york/ui/dropdown-menu"
import { Palette } from "lucide-react"

const THEMES = [
  { id: "default", label: "Default" },
  { id: "forest", label: "Forest" },
]

export function ThemeSelector() {
  const [theme, setTheme] = useState<string>("default")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("reza-ui-theme") || "default"
    setTheme(stored)
    applyTheme(stored)
  }, [])

  const applyTheme = (themeId: string) => {
    const html = document.documentElement
    THEMES.forEach((t) => html.classList.remove(`theme-${t.id}`))
    if (themeId !== "default") {
      html.classList.add(`theme-${themeId}`)
    }
  }

  const handleThemeChange = (value: string) => {
    setTheme(value)
    localStorage.setItem("reza-ui-theme", value)
    applyTheme(value)
  }

  if (!mounted) return null

  // Derived theme meta if needed later

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" title="Select theme">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Select theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={handleThemeChange}>
          {THEMES.map((t) => (
            <DropdownMenuRadioItem key={t.id} value={t.id}>
              {t.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
