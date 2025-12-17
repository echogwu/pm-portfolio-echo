import Link from "next/link"

export type SiteNavActive = "home" | "journey" | "artifacts"

function linkClass(active: boolean) {
  return [
    "shrink-0 whitespace-nowrap leading-none",
    "text-[clamp(0.68rem,2.2vw,0.95rem)] transition-colors",
    active
      ? "text-foreground font-semibold border-b-2 border-foreground/60 pb-1 -mb-1"
      : "text-muted-foreground font-medium hover:text-foreground/70",
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
              <Link href="/" aria-current={active === "home" ? "page" : undefined} className={linkClass(active === "home")}>
                Home
              </Link>
              <Link
                href="/journey"
                aria-current={active === "journey" ? "page" : undefined}
                className={linkClass(active === "journey")}
              >
                Journey
              </Link>
              <Link
                href="/artifacts"
                aria-current={active === "artifacts" ? "page" : undefined}
                className={linkClass(active === "artifacts")}
              >
                Artifacts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


