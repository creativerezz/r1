"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Package,
  Blocks,
  Layers,
  FileText,
} from "lucide-react"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/", icon: LayoutDashboard },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Form Components", href: "#form", icon: FileText },
      { title: "Layout", href: "#layout", icon: Layers },
      { title: "Data Display", href: "#data", icon: Blocks },
      { title: "Interactive", href: "#interactive", icon: Package },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r bg-background/95">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 px-4">
        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 px-2 text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                        pathname === item.href
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground"
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

        <div className="mt-8 px-2">
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
    </aside>
  )
}
