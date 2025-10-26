import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  /**
   * Whether to show the sidebar. Defaults to true.
   */
  showSidebar?: boolean
  /**
   * Maximum width of the content container.
   * Defaults to "max-w-5xl" for optimal readability.
   */
  maxWidth?: string
}

/**
 * PageLayout - Reusable layout component for all pages
 * 
 * This component ensures consistent spacing and alignment across all pages:
 * - Automatically offsets content for the sidebar on large screens
 * - Applies responsive padding (px-4 md:px-6)
 * - Provides consistent vertical spacing (py-8 md:py-12 lg:py-16)
 * - Aligns with header/footer using the same offset system
 * 
 * @example
 * ```tsx
 * export default function MyPage() {
 *   return (
 *     <PageLayout>
 *       <h1>Page Title</h1>
 *       <p>Content here...</p>
 *     </PageLayout>
 *   )
 * }
 * ```
 */
export function PageLayout({
  children,
  className,
  showSidebar = true,
  maxWidth = "max-w-5xl",
}: PageLayoutProps) {
  return (
    <div className="flex">
      {showSidebar && <AppSidebar />}
      <main className="flex-1">
        <div
          className={cn(
            "container py-8 md:py-12 lg:py-16 px-4 md:px-6",
            maxWidth,
            className
          )}
        >
          {children}
        </div>
      </main>
    </div>
  )
}
