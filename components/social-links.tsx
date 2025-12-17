import { Github, Linkedin, Mail } from "lucide-react"

type SocialLink = {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
}

const LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/echo-paulus/", icon: Linkedin, external: true },
  { label: "Email", href: "mailto:echopaulus@berkeley.edu", icon: Mail },
  { label: "GitHub", href: "https://github.com/echogwu", icon: Github, external: true },
]

export function SocialLinks({
  orientation = "horizontal",
  variant = "pill",
  className,
}: {
  orientation?: "horizontal" | "vertical"
  variant?: "pill" | "minimal" | "hero"
  className?: string
}) {
  const wrapClass =
    orientation === "vertical" ? "flex flex-col items-start gap-2" : "flex items-center gap-3 flex-wrap"

  const linkClass =
    variant === "pill"
      ? "inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-sm font-semibold text-foreground/80 shadow-sm hover:text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      : variant === "hero"
        ? "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        : "inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

  return (
    <div className={[wrapClass, className].filter(Boolean).join(" ")}>
      {LINKS.map((l) => {
        const Icon = l.icon
        return (
          <a
            key={l.label}
            href={l.href}
            {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className={linkClass}
          >
            <Icon className={variant === "hero" ? "w-5 h-5" : "h-4 w-4"} />
            {l.label}
          </a>
        )
      })}
    </div>
  )
}


