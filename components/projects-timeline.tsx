import Link from "next/link"

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

const items: TimelineItem[] = [
  {
    id: "engineering",
    year: "2014-2020",
    companyRole: "Amazon|AerServ|Oracle: Engineering Foundation",
    label: "Building technical depth",
    microCaption: "Learning how systems behave at scale",
    tags: ["Test Automation", "System Architecture", "API Design", "Technical Foundation"],
    href: "/projects/engineering-foundation",
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
    href: "/projects/lyft-developer-experience-pm",
    accent: "pink",
  },
  {
    id: "mba",
    year: "2023-",
    companyRole: "MBA: Student",
    label: "Understanding incentives & tradeoffs",
    microCaption: "Why organizations underinvest in data foundations",
    tags: ["Analytics", "Measurement Strategy", "Financial Modeling", "Competitive Analysis", "Decision Systems"],
    href: "/projects/mba-strategic-frameworks",
    accent: "blue",
  },
  {
    id: "ideo",
    year: "2024",
    companyRole: "IDEO: Design Thinking Challenge",
    label: "Trusting the design process",
    microCaption: "Practicing divergent→convergent problem framing",
    tags: ["Design Thinking", "User Research", "Prototyping", "Creativity Under Ambiguity"],
    href: "/projects/ideo-design-thinking",
    accent: "blue",
  },
  {
    id: "gainbridge",
    year: "2023-2025",
    companyRole: "Gainbridge: Data Product Manager",
    label: "Owning data systems",
    microCaption: "Turning fragmented signals into reliable, revenue-critical truth",
    tags: ["Data Architecture", "Measurement Strategy", "Event Taxonomy", "Identity Resolution", "Attribution Systems"],
    href: "/projects/gainbridge-data-architecture",
    accent: "orange",
  },
  {
    id: "dishclosure",
    year: "2025",
    companyRole: "Dishclosure: Founder, Product Lead",
    label: "Discovering system limits",
    microCaption: "Where data integrity fundamentally breaks",
    tags: ["Zero-to-One", "Data Lineage", "Schema Design", "Ecosystem Diagnosis", "Go/No-Go Decision"],
    href: "/projects/dishclosure-founder-mode",
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

export function ProjectsTimeline() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-24">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">Career Journey</h2>
        <p className="text-muted-foreground max-w-2xl">From using reliable data → to owning data systems → to discovering where data breaks</p>
      </div>

      <ol className="relative pl-8">
        {/* Spine */}
        <div className="absolute left-[14px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

        {items.map((item) => {
          const a = accentClasses(item.accent)
          return (
            <li key={item.id} className="relative pb-10 last:pb-0">
              {/* Dot */}
              <div className="absolute left-[14px] top-7 -translate-x-1/2">
                <div className={`h-3.5 w-3.5 rounded-full ${a.dot} border-2 border-black/80`} />
              </div>

              {/* Card */}
              <Link
                href={item.href}
                className={`ml-6 block rounded-2xl border border-border bg-card px-6 py-5 shadow-sm transition-colors ${a.hover}`}
              >
                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
                  {/* Left column: primary content */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-flex items-center justify-center px-4 py-1.5 rounded-lg border-2 border-black/80 text-sm font-semibold ${a.year}`}
                      >
                        {item.year}
                      </span>
                      <div className="text-lg font-semibold text-foreground">{item.companyRole}</div>
                    </div>

                    <div className={`mt-4 text-xl font-semibold leading-tight ${a.label}`}>{item.label}</div>
                    <div className={`mt-1 text-base leading-relaxed ${a.label} opacity-80`}>{item.microCaption}</div>
                  </div>

                  {/* Right column: tags */}
                  {item.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2 lg:max-w-[240px] lg:justify-end">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </section>
  )
}


