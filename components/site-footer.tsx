import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center justify-between px-4 md:px-6 lg:pl-64">
        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <Link
            href="https://rezajafar.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Reza Jafar
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/creativerezz"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href="https://linkedin.com/in/rezajafar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
