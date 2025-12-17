import Link from "next/link"
import { SocialLinks } from "@/components/social-links"

type TimelineItem = {
  id: string
  year: string
  companyRole: string
  label: string
  microCaption: string
  tags: string[]
  href: string
  accent: "pink" | "blue" | "orange" | "green" | "slate"
}

function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  if (!path) return base
  if (path.startsWith("http")) return path
  if (path.startsWith(base)) return path
  if (path.startsWith("/")) return `${base}${path}`
  return `${base}/${path}`
}

function logoForItemId(id: TimelineItem["id"]) {
  switch (id) {
    case "dishclosure":
      return "/dishclosure-logo.png"
    case "gainbridge":
      return "/gainbridge-logo.png"
    case "ideo":
      return "/ideo-logo.png"
    case "lyft":
      return "/lyft-logo.png"
    case "mba":
      return "/cal-logo.png"
    case "engineering":
    default:
      return "/amazon-logo.png"
  }
}

const items: TimelineItem[] = [
  {
    id: "engineering",
    year: "2014-2020",
    companyRole: "Amazon|AerServ|Oracle: Engineering Foundation",
    label: "Building technical depth",
    microCaption: "Learning how systems behave at scale",
    tags: ["Test Automation", "System Architecture", "API Design", "Technical Foundation"],
    href: "/journey/engineering-foundation",
    accent: "slate",
  },
  {
    id: "lyft",
    year: "2020-2023",
    companyRole: "Lyft: Developer Experience PM",
    label: "Learning what good looks like",
    microCaption: "Benefiting from mature data infrastructure",
    tags: [
      "Developer Experience",
      "Internal Tools",
      "Simulation",
      "Systems Thinking",
      "Validation Strategy",
      "Platform Reliability",
    ],
    href: "/journey/lyft-developer-experience-pm",
    accent: "pink",
  },
  {
    id: "mba",
    year: "2023-2026",
    companyRole: "MBA: Designing Decision Systems",
    label: "Building judgment upstream",
    microCaption: "The bridge from “I can build” to “I can decide what’s worth building”",
    tags: ["Decision Systems", "Incentives", "Metrics Strategy", "Tradeoffs", "Cross-functional Fluency"],
    href: "/journey/mba-strategic-frameworks",
    accent: "blue",
  },
  {
    id: "ideo",
    year: "2024",
    companyRole: "IDEO: Design Thinking Challenge",
    label: "Trusting the design process",
    microCaption: "Practicing divergent→convergent problem framing",
    tags: ["Design Thinking", "User Research", "Prototyping", "Creativity Under Ambiguity"],
    href: "/journey/ideo-design-thinking",
    accent: "blue",
  },
  {
    id: "gainbridge",
    year: "2023-2025",
    companyRole: "Gainbridge: Product Manager, Data & Platform",
    label: "Owning data systems",
    microCaption: "Turning fragmented signals into reliable, revenue-critical truth",
    tags: ["Data Architecture", "Measurement Strategy", "Event Taxonomy", "Identity Resolution", "Attribution Systems"],
    href: "/journey/gainbridge-data-architecture",
    accent: "orange",
  },
  {
    id: "dishclosure",
    year: "2025",
    companyRole: "Dishclosure: Founder, Product Lead",
    label: "Discovering system limits",
    microCaption: "Where data integrity fundamentally breaks",
    tags: ["Zero-to-One", "Data Lineage", "Schema Design", "Ecosystem Diagnosis", "Go/No-Go Decision"],
    href: "/journey/dishclosure-founder-mode",
    accent: "green",
  },
]

function accentClasses(accent: TimelineItem["accent"]) {
  switch (accent) {
    case "green":
      return {
        dot: "bg-green-500",
        label: "text-green-600",
        year: "bg-green-400/70",
        hover: "hover:border-green-500/40",
      }
    case "blue":
      return {
        dot: "bg-blue-500",
        label: "text-blue-600",
        year: "bg-blue-400/70",
        hover: "hover:border-blue-500/40",
      }
    case "orange":
      return {
        dot: "bg-orange-500",
        label: "text-orange-500",
        year: "bg-orange-400/70",
        hover: "hover:border-orange-500/40",
      }
    case "pink":
      return {
        dot: "bg-pink-500",
        label: "text-pink-600",
        year: "bg-pink-400/70",
        hover: "hover:border-pink-500/40",
      }
    case "slate":
    default:
      return {
        dot: "bg-slate-500",
        label: "text-slate-600",
        year: "bg-slate-300/80",
        hover: "hover:border-slate-400/60",
      }
  }
}

function accentBgClasses(accent: TimelineItem["accent"]) {
  // subtle fill that echoes each brand color without reducing readability
  switch (accent) {
    case "green":
      return "from-emerald-400/14 via-transparent to-lime-300/10"
    case "orange":
      return "from-amber-300/16 via-transparent to-orange-200/10"
    case "blue":
      return "from-sky-300/16 via-transparent to-indigo-200/10"
    case "pink":
      return "from-fuchsia-300/16 via-transparent to-rose-200/10"
    case "slate":
    default:
      return "from-slate-200/18 via-transparent to-slate-100/10"
  }
}

export function ProjectsTimeline() {
  const total = items.length
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-24">
      <div className="mb-10">
        <div className="border-b border-border py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start">
            <div className="min-w-0">
              <p className="text-[clamp(1rem,2.8vw,1.25rem)] leading-relaxed text-foreground/90 text-left hyphens-auto">
                My work traces a{" "}
                <span className="font-semibold text-foreground">progression</span> from{" "}
                <span className="font-semibold text-foreground">engineering foundations</span> to{" "}
                <span className="font-semibold text-foreground">data platforms</span> to{" "}
                <span className="font-semibold text-foreground">decision design</span>—focused on where systems fail in
                practice:{" "}
                <span className="font-semibold underline decoration-lime-300 decoration-[5px] underline-offset-[6px]">
                  broken data
                </span>
                ,{" "}
                <span className="font-semibold underline decoration-sky-300 decoration-[5px] underline-offset-[6px]">
                  misaligned incentives
                </span>
                , and{" "}
                <span className="font-semibold underline decoration-emerald-300 decoration-[5px] underline-offset-[6px]">
                  preventable team errors
                </span>
                .
              </p>
            </div>

            <div className="md:pl-8 md:border-l md:border-border">
              <SocialLinks orientation="vertical" variant="hero" className="hidden md:flex" />
              <SocialLinks orientation="horizontal" variant="hero" className="mt-4 md:hidden" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: wide "staircase" cards (bottom-left → top-right) */}
      <div className="hidden lg:block">
        <div className="flex flex-col gap-6">
          {[...items].reverse().map((item, i) => {
          const a = accentClasses(item.accent)
            const bg = accentBgClasses(item.accent)
            const denom = Math.max(1, total - 1)
            // Shift right as we move upward (Dishclosure at top-right, Engineering at bottom-left)
            const t = (total - 1 - i) / denom // 1 → 0
            const offsetPct = t * 25 // 0–25% left margin

          return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative block w-3/4 overflow-hidden rounded-2xl border border-border bg-card px-6 py-4 shadow-[0_1px_0_rgba(15,23,42,0.04),0_14px_28px_rgba(15,23,42,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_18px_42px_rgba(15,23,42,0.10)] ${a.hover}`}
                style={{ marginLeft: `${offsetPct}%` }}
              >
                <div className="absolute inset-0 -z-10" aria-hidden="true">
                  <div className={`absolute inset-0 bg-gradient-to-br ${bg}`} />
                  <div className="absolute inset-0 bg-background/85" />
                </div>

                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-flex items-center justify-center px-4 py-1.5 rounded-lg border-2 border-black/80 text-sm font-semibold ${a.year}`}
                      >
                        {item.year}
                      </span>
                      <div className="text-base font-semibold text-foreground">{item.companyRole}</div>
                    </div>

                    <div className={`mt-3 text-lg font-semibold leading-tight ${a.label}`}>{item.label}</div>
                    <div className={`mt-1 text-sm leading-relaxed ${a.label} opacity-80`}>{item.microCaption}</div>
                  </div>

                  <div className="shrink-0 pt-0.5">
                    <div
                      className="h-16 w-16 rounded-full bg-background/75 ring-1 ring-border/70 shadow-sm overflow-hidden p-2 bg-no-repeat bg-center bg-contain"
                      style={{ backgroundImage: `url(${withBasePath(logoForItemId(item.id))})` }}
                      aria-hidden="true"
                      title={`${item.companyRole}`}
                    >
                      <span className="sr-only">{item.companyRole}</span>
                    </div>
                  </div>
                </div>

                  {item.tags.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    {item.tags.length > 5 ? (
                      <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                        +{item.tags.length - 5}
                      </span>
                    ) : null}
                  </div>
                ) : null}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Mobile: equal-width stacked cards */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 gap-4">
          {items.map((item) => {
            const a = accentClasses(item.accent)
            const bg = accentBgClasses(item.accent)
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative block overflow-hidden rounded-2xl border border-border bg-card px-5 py-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_22px_rgba(15,23,42,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_16px_34px_rgba(15,23,42,0.10)] ${a.hover}`}
              >
                <div className="absolute inset-0 -z-10" aria-hidden="true">
                  <div className={`absolute inset-0 bg-gradient-to-br ${bg}`} />
                  <div className="absolute inset-0 bg-background/88" />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-flex items-center justify-center px-4 py-1.5 rounded-lg border-2 border-black/80 text-sm font-semibold ${a.year}`}
                      >
                        {item.year}
                      </span>
                      <div className="text-base font-semibold text-foreground">{item.companyRole}</div>
                    </div>

                    <div className={`mt-4 text-lg font-semibold leading-tight ${a.label}`}>{item.label}</div>
                    <div className={`mt-1 text-sm leading-relaxed ${a.label} opacity-80`}>{item.microCaption}</div>
                  </div>

                  <div className="shrink-0 pt-0.5">
                    <div
                      className="h-16 w-16 rounded-full bg-background/75 ring-1 ring-border/70 shadow-sm overflow-hidden p-2 bg-no-repeat bg-center bg-contain"
                      style={{ backgroundImage: `url(${withBasePath(logoForItemId(item.id))})` }}
                      aria-hidden="true"
                      title={`${item.companyRole}`}
                    >
                      <span className="sr-only">{item.companyRole}</span>
                    </div>
                  </div>
                </div>

                {item.tags.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Link>
          )
        })}
        </div>
      </div>
    </section>
  )
}


