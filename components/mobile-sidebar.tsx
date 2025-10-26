"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigation } from "@/components/app-sidebar"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/new-york/ui/sheet"
import { Button } from "@/registry/new-york/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { PanelLeft, Github, Linkedin, Globe } from "lucide-react"

export function MobileSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0 flex flex-col">
        <SheetHeader className="px-4 py-3 border-b text-left flex flex-row items-center justify-between">
          <SheetTitle>Reza UI</SheetTitle>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/creativerezz"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/rezajafar"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://rezajafar.com"
                target="_blank"
                rel="noreferrer"
              >
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-6 px-4">
            {navigation.map((section) => (
              <div key={section.title}>
                <h4 className="mb-2 px-2 text-sm font-semibold text-foreground">
                  {section.title}
                </h4>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const active = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors",
                          active
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-6 px-4">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 text-sm font-semibold">Component Registry</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Install components via the CLI
              </p>
              <code className="relative rounded bg-muted px-2 py-1 text-xs">
                npx shadcn@latest add
              </code>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
