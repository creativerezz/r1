import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { Button } from "@/registry/new-york/ui/button"
import { Github, Linkedin, Globe } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center px-4 md:px-6 lg:pl-64">
        <div className="mr-4 flex items-center gap-2">
          <div className="lg:hidden">
            <MobileSidebar />
          </div>
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Reza UI</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-1">
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
          </nav>
        </div>
      </div>
    </header>
  )
}
