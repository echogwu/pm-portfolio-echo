import Link from "next/link"

type TimelineItem = {
  id: string
  title: string
  subtitle: string
  timeframe: string
  href: string
  logoSrc: string
  logoAlt: string
  accent: "emerald" | "indigo" | "amber" | "pink" | "slate"
  tags: string[]
}

const items: TimelineItem[] = [
  {
    id: "dishclosure",
    title: "Dishclosure",
    subtitle: "Founder & Product Lead",
    timeframe: "2022–2023",
    href: "/projects/dishclosure-founder-mode",
    logoSrc: "/dishclosure.gif",
    logoAlt: "Dishclosure",
    accent: "emerald",
    tags: ["Zero-to-one", "Data lineage", "Schema design", "Go/No-Go decision"],
  },
  {
    id: "gainbridge",
    title: "Gainbridge",
    subtitle: "Product Manager, Data & Measurement",
    timeframe: "2023–2025",
    href: "/projects/gainbridge-data-architecture",
    logoSrc: "/gainbridge.gif",
    logoAlt: "Gainbridge",
    accent: "indigo",
    tags: ["Event taxonomy", "Attribution", "Identity resolution", "Data architecture"],
  },
  {
    id: "mba",
    title: "MBA",
    subtitle: "Berkeley Haas",
    timeframe: "2017–2019",
    href: "/projects/mba-strategic-frameworks",
    logoSrc: "/cal-logo.png",
    logoAlt: "UC Berkeley",
    accent: "amber",
    tags: ["Financial modeling", "Strategy", "Decision frameworks"],
  },
  {
    id: "lyft",
    title: "Lyft",
    subtitle: "Quality Engineer → Developer Experience PM",
    timeframe: "2019–2022",
    href: "/projects/lyft-developer-experience-pm",
    logoSrc: "/lyft.gif",
    logoAlt: "Lyft",
    accent: "pink",
    tags: ["Developer experience", "Reliability", "Internal tools", "Validation strategy"],
  },
  {
    id: "engineering",
    title: "Engineering Foundation",
    subtitle: "Amazon",
    timeframe: "2012–2016",
    href: "/projects/engineering-foundation",
    logoSrc: "/amazon-logo.png",
    logoAlt: "Amazon",
    accent: "slate",
    tags: ["Systems fundamentals", "Technical depth", "Operating at scale"],
  },
]

function accentClasses(accent: TimelineItem["accent"]) {
  switch (accent) {
    case "emerald":
      return {
        ring: "ring-emerald-500/25",
        dot: "bg-emerald-500",
        chip: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-200 border-emerald-500/15",
        link: "text-emerald-700 hover:text-emerald-800 dark:text-emerald-200 dark:hover:text-emerald-100",
      }
    case "indigo":
      return {
        ring: "ring-indigo-500/25",
        dot: "bg-indigo-500",
        chip: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-200 border-indigo-500/15",
        link: "text-indigo-700 hover:text-indigo-800 dark:text-indigo-200 dark:hover:text-indigo-100",
      }
    case "amber":
      return {
        ring: "ring-amber-500/25",
        dot: "bg-amber-500",
        chip: "bg-amber-500/10 text-amber-800 dark:text-amber-200 border-amber-500/15",
        link: "text-amber-800 hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100",
      }
    case "pink":
      return {
        ring: "ring-pink-500/25",
        dot: "bg-pink-500",
        chip: "bg-pink-500/10 text-pink-700 dark:text-pink-200 border-pink-500/15",
        link: "text-pink-700 hover:text-pink-800 dark:text-pink-200 dark:hover:text-pink-100",
      }
    case "slate":
    default:
      return {
        ring: "ring-slate-500/20",
        dot: "bg-slate-500",
        chip: "bg-slate-500/10 text-slate-700 dark:text-slate-200 border-slate-500/15",
        link: "text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-100",
      }
  }
}

export function ProjectsTimeline() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">Career Journey</h2>
        <p className="text-muted-foreground max-w-2xl">
          My career has been about understanding data systems from every angle — using them, building them, and learning where they break — and turning those lessons into product ownership.
        </p>
      </div>

      <ol className="relative pl-6">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

        {items.map((item) => {
          const a = accentClasses(item.accent)
          return (
            <li key={item.id} className="relative pb-10 last:pb-0">
              {/* Node */}
              <div className="absolute left-0 top-2">
                <div className="relative">
                  <div className={`h-[22px] w-[22px] rounded-full ${a.dot} shadow-sm`} />
                  <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background ring-1 ring-border shadow-sm" />
                  <div className={`absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full ring-8 ${a.ring}`} />
                  <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-slate-950 flex items-center justify-center overflow-hidden border border-border">
                    <img src={item.logoSrc} alt={item.logoAlt} className="h-7 w-7 object-contain" />
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="ml-10 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                    <h3 className="text-xl font-bold leading-tight mt-1">{item.title}</h3>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{item.timeframe}</div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((t) => (
                    <span key={t} className={`text-xs font-medium px-2.5 py-1 rounded-full border ${a.chip}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <Link href={item.href} className={`text-sm font-semibold inline-flex items-center gap-1 ${a.link}`}>
                    Read case study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}


