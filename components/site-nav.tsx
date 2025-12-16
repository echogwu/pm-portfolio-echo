import Link from "next/link"

export type SiteNavActive = "home" | "projects" | "work-samples"

function linkClass(active: boolean) {
  return [
    "shrink-0 whitespace-nowrap leading-none",
    "text-[clamp(0.68rem,2.2vw,0.95rem)] font-medium transition-colors",
    active ? "text-foreground" : "hover:text-foreground/70",
  ].join(" ")
}

export function SiteNav({ active }: { active: SiteNavActive }) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap leading-none text-[clamp(0.85rem,3vw,1.125rem)] font-semibold tracking-tight hover:text-foreground/70 transition-colors"
          >
            PM Portfolio
          </Link>

          <div className="ml-auto flex flex-1 min-w-0 justify-end">
            <div className="flex items-center gap-2.5 sm:gap-8 flex-nowrap">
              <Link href="/" className={linkClass(active === "home")}>
                Home
              </Link>
              <Link href="/projects" className={linkClass(active === "projects")}>
                Projects
              </Link>
              <Link href="/work-samples" className={linkClass(active === "work-samples")}>
                Work Samples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


