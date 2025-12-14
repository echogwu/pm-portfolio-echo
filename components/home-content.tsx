import Link from "next/link"
import { Github, Mail, MapPin, Linkedin } from "lucide-react"
// import { Button } from "@/components/ui/button"

export default function HomeContent() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

  const featuredProjects = [
    {
      title: "Gainbridge: Product Manager, Data and Measurement",
      description: "Built the instrumentation layer that made performance trustworthy — before optimization.",
      href: "/projects/gainbridge-data-architecture",
      imageSrc: "/gainbridge.gif",
      imageAlt: "Gainbridge project",
      tags: ["Data Architecture", "Measurement Strategy", "Event Taxonomy", "Identity Resolution", "Attribution Systems"],
    },
    {
      title: "Dishclosure: Founder and Product Lead",
      description:
        "An operator-first investigation that revealed the real constraint wasn't UX or adoption, but broken upstream data lineage.",
      href: "/projects/dishclosure-founder-mode",
      imageSrc: "/dishclosure.gif",
      imageAlt: "Dishclosure project - Collaborative ingredient exploration and allergen discovery",
      tags: ["Zero-to-One", "Data Lineage", "Schema Design", "Ecosystem Diagnosis", "Go/No-Go Decision"],
    },
    {
      title: "Lyft: Quality Engineer → Developer Experience PM",
      description: "When to stop optimizing for conventional metrics — and start optimizing what actually matters.",
      href: "/projects/lyft-developer-experience-pm",
      imageSrc: "/lyft.gif",
      imageAlt: "Lyft project",
      tags: [
        "Developer Experience",
        "Internal Tools",
        "Simulation",
        "Systems Thinking",
        "Validation Strategy",
        "Platform Reliability",
      ],
    },
  ] as const

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">PM Portfolio</div>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Projects
            </Link>
            <Link href="/work-samples" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Work Samples
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
                AI Ships Features.
                <br />I Ship Direction.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md justify-text">
                Data & Platform Product Manager who builds the systems that make business performance legible. Owned
                data architecture, attribution, and activation platforms behind mission-critical growth engines and
                consumer workflows. Founder experience diagnosing ecosystem-level data lineage failures.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://github.com/echogwu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                Github
              </Link>
              <Link
                href="mailto:echopaulus@berkeley.edu"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/echo-paulus/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10" />
                <img
                  src={`${basePath}/profile-avatar.png`}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border-4 border-border shadow-xl"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Echo Paulus</h2>
                <p className="text-muted-foreground font-medium">Data Product Manager</p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="w-4 h-4" />
                  San Francisco Bay Area, CA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16 border-t border-border">
        <div className="w-full">
          <div className="rounded-3xl border border-border bg-card px-6 py-8 lg:px-10 lg:py-10 shadow-[0_18px_50px_rgba(2,6,23,0.06),0_0_0_1px_rgba(15,23,42,0.04),0_26px_80px_rgba(248,246,240,0.9)]">
            {/* Section headline (spans both columns) */}
            <div className="mb-8 lg:mb-10">
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                How I Think About Data Systems
              </h1>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 lg:divide-x lg:divide-border">
              {/* Left column */}
              <div className="flex flex-col gap-5 text-foreground leading-relaxed lg:pr-10">
                <h2 className="text-2xl font-bold leading-tight text-balance">
                  Modern products are data systems before they are interfaces.
                </h2>

                <p className="text-foreground/90 leading-relaxed justify-text">
                  Every UI, workflow, and activation layer depends on whether the right data reaches the right place at
                  the right time. When events are inconsistent, delayed, or poorly modeled, the product fails — no
                  matter how polished the interface looks.
                </p>

                <p className="text-foreground/90 leading-relaxed justify-text">
                  My work focuses on designing clean event schemas, reliable ingestion pipelines, and explicit data
                  contracts between upstream and downstream systems. When data is structured correctly and ownership is
                  clear, product behavior becomes predictable, scalable, and trustworthy. Good products aren’t powered
                  by dashboards — they’re powered by data systems that enforce integrity by design.
                </p>
              </div>

              {/* Right column */}
              <div className="lg:pl-10">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold leading-tight text-balance">What Shaped This Perspective</h2>
                    <ul className="space-y-4 list-none">
                      <li>
                        <div className="font-semibold">Dishclosure</div>
                        <p className="text-foreground/90 leading-relaxed justify-text mt-1">
                          UX innovation couldn’t compensate for missing or unreliable upstream data. The real constraint
                          wasn’t the interface — it was the data model underneath it.
                        </p>
                      </li>
                      <li>
                        <div className="font-semibold">Gainbridge</div>
                        <p className="text-foreground/90 leading-relaxed justify-text mt-1">
                          Clean event modeling, dependency mapping, and taxonomy governance unlocked entire workflows
                          and aligned product, engineering, and marketing around a shared system of truth.
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Horizontal divider */}
                  <div className="h-px bg-border" aria-hidden="true" />

                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold leading-tight text-balance">How This Shows Up in My Work</h2>
                    <p className="text-foreground/90 leading-relaxed font-bold">
                      Start with the data model. Enforce the contracts. Let every feature flow from there.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex items-end justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl justify-text">
              A few representative case studies. Each one focuses on system clarity: definitions, contracts, and
              decisions that scale.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {featuredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1
            return (
              <div
                key={project.href}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={isReversed ? "lg:order-2" : undefined}>
                  <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-muted/40 shadow-sm aspect-video">
                    <img
                      src={`${basePath}${project.imageSrc}`}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={isReversed ? "lg:order-1" : undefined}>
                  <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-bold leading-tight text-balance">{project.title}</h3>
                    <p className="text-foreground/90 leading-relaxed justify-text">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={project.href}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group w-fit"
                    >
                      Read case study
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="sm:hidden pt-2">
            <Link href="/projects" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* How I Work - Build Clarify Inside Messy Systems */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16 border-t border-border">
        <div className="w-full">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">How I Work - Build Clarify Inside Messy Systems</h1>

          {/* Horizontal workflow (desktop) + stacked (mobile) */}
          <div className="mt-10">
            {/* Desktop: horizontal progression */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-border bg-card px-8 py-10 shadow-[0_18px_50px_rgba(2,6,23,0.06)]">
                {(() => {
                  const steps = [
                    {
                      step: "①",
                      firstLine: "Map the system",
                      bullets: ["ELT + event flow mapping", "Ownership & handoff gaps", "Source → warehouse → activation"],
                      accent: "emerald" as const,
                      placement: "below" as const, // 1 below
                    },
                    {
                      step: "②",
                      firstLine: "Define contracts",
                      bullets: ["Event taxonomy & schemas", "Lifecycle definitions", "Data contracts"],
                      accent: "sky" as const,
                      placement: "above" as const, // 2 above
                    },
                    {
                      step: "③",
                      firstLine: "Socialize & align",
                      bullets: [
                        "Diagrams + docs people actually read",
                        "Demos, walkthroughs, alignment reviews",
                        "Metric misuse callouts",
                      ],
                      accent: "amber" as const,
                      placement: "below" as const, // 3 below
                    },
                    {
                      step: "④",
                      firstLine: "Build",
                      bullets: ["Avoid unnecessary features", "Ship higher-confidence changes"],
                      accent: "pink" as const,
                      placement: "above" as const, // 4 above
                    },
                  ]

                  const accentClasses = (accent: (typeof steps)[number]["accent"]) => {
                    if (accent === "emerald")
                      return {
                        node: "bg-emerald-600 text-white",
                        ring: "ring-emerald-500/20",
                        card: "border-emerald-500/20 bg-emerald-500/[0.02]",
                        bullet: "marker:text-emerald-500/80",
                      }
                    if (accent === "sky")
                      return {
                        node: "bg-sky-600 text-white",
                        ring: "ring-sky-500/20",
                        card: "border-sky-500/20 bg-sky-500/[0.02]",
                        bullet: "marker:text-sky-500/80",
                      }
                    if (accent === "amber")
                      return {
                        node: "bg-amber-600 text-white",
                        ring: "ring-amber-500/20",
                        card: "border-amber-500/25 bg-amber-500/[0.02]",
                        bullet: "marker:text-amber-500/80",
                      }
                    return {
                      node: "bg-pink-600 text-white",
                      ring: "ring-pink-500/20",
                      card: "border-pink-500/20 bg-pink-500/[0.02]",
                      bullet: "marker:text-pink-500/80",
                    }
                  }

                  return (
                    <div className="grid grid-cols-4 grid-rows-[auto_140px_auto] gap-x-8 gap-y-8">
                      {/* Cards (explicitly aligned to the matching node column) */}
                      {steps.map((s, i) => {
                        const a = accentClasses(s.accent)
                        const isAbove = s.placement === "above"
                        return (
                          <div
                            key={`card-${s.step}`}
                            className="relative"
                            style={{
                              gridColumnStart: i + 1,
                              gridRowStart: isAbove ? 1 : 3,
                            }}
                          >
                            {/* Connector stub toward the timeline */}
                            <div
                              className={`absolute left-1/2 -translate-x-1/2 w-px bg-border ${isAbove ? "-bottom-8 h-8" : "-top-8 h-8"}`}
                              aria-hidden="true"
                            />
                            <div className={`rounded-2xl border bg-background p-5 shadow-sm ${a.card}`}>
                              <div className="text-foreground font-bold">{s.firstLine}</div>
                              <ul className={`mt-3 list-disc pl-5 space-y-1 text-foreground/90 leading-relaxed ${a.bullet}`}>
                                {s.bullets.map((b) => (
                                  <li key={b}>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )
                      })}

                      {/* Timeline row */}
                      <div className="col-span-4 row-start-2 relative flex items-center">
                        {/* Main line */}
                        <div
                          className="absolute left-2 right-2 h-1 rounded-full bg-gradient-to-r from-emerald-500/70 via-sky-500/70 via-amber-500/70 to-pink-500/70"
                          aria-hidden="true"
                        />
                        {/* Arrowhead (subtle progression cue) */}
                        <div
                          className="absolute right-2"
                          style={{
                            width: 0,
                            height: 0,
                            borderTop: "8px solid transparent",
                            borderBottom: "8px solid transparent",
                            borderLeft: "14px solid rgba(236, 72, 153, 0.75)", // pink-500-ish
                            transform: "translateY(-1px)",
                          }}
                          aria-hidden="true"
                        />
                        {/* Nodes */}
                        <div className="grid grid-cols-4 w-full gap-x-8">
                          {steps.map((s, i) => {
                            const a = accentClasses(s.accent)
                            const isAbove = s.placement === "above"
                            return (
                              <div key={`node-${s.step}`} className="relative flex items-center justify-center">
                                {/* Connector stub up/down */}
                                <div
                                  className={`absolute left-1/2 -translate-x-1/2 w-px bg-border ${isAbove ? "top-[-32px] h-8" : "bottom-[-32px] h-8"}`}
                                  aria-hidden="true"
                                />
                                <div
                                  className={`relative z-10 h-12 w-12 rounded-full ${a.node} shadow-sm flex items-center justify-center text-lg font-bold ring-8 ${a.ring}`}
                                >
                                  {s.step}
                                </div>
                                {/* Arrow between nodes */}
                                {i !== steps.length - 1 && (
                                  <div
                                    className="absolute top-1/2 -translate-y-1/2 -right-6 text-muted-foreground"
                                    aria-hidden="true"
                                  >
                                    →
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })()}

                <blockquote className="mt-10 text-center">
                  <div className="mx-auto mb-4 h-px w-24 bg-border" aria-hidden="true" />
                  <p className="text-foreground/80 italic leading-relaxed">
                    “Once the foundation is sound, execution becomes obvious.”
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Mobile: stacked progression */}
            <div className="lg:hidden">
              <ol className="space-y-4">
                {[
                  {
                    step: "①",
                    title: "Map the system",
                    firstLine: "Map the system",
                    bullets: ["ELT + event flow mapping", "Ownership & handoff gaps", "Source → warehouse → activation"],
                    accent: "emerald",
                  },
                  {
                    step: "②",
                    title: "Define contracts",
                    firstLine: "Define contracts",
                    bullets: ["Event taxonomy & schemas", "Lifecycle definitions", "Data contracts"],
                    accent: "sky",
                  },
                  {
                    step: "③",
                    title: "Socialize & align",
                    firstLine: "Socialize & align",
                    bullets: [
                      "Diagrams + docs people actually read",
                      "Demos, walkthroughs, alignment reviews",
                      "Metric misuse callouts",
                    ],
                    accent: "amber",
                  },
                  {
                    step: "④",
                    title: "Build",
                    firstLine: "Build",
                    bullets: ["Avoid unnecessary features", "Ship higher-confidence changes"],
                    accent: "pink",
                  },
                ].map((item, idx, arr) => (
                  <li key={item.step} className="relative">
                    {idx !== arr.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-[-16px] w-px bg-border" aria-hidden="true" />
                    )}
                    <div className="flex gap-4">
                      {(() => {
                        const accent =
                          item.accent === "emerald"
                            ? { node: "bg-emerald-600 text-white", ring: "ring-emerald-500/20", card: "border-emerald-500/20 bg-emerald-500/[0.02]", bullet: "marker:text-emerald-500/80" }
                            : item.accent === "sky"
                              ? { node: "bg-sky-600 text-white", ring: "ring-sky-500/20", card: "border-sky-500/20 bg-sky-500/[0.02]", bullet: "marker:text-sky-500/80" }
                              : item.accent === "amber"
                                ? { node: "bg-amber-600 text-white", ring: "ring-amber-500/20", card: "border-amber-500/25 bg-amber-500/[0.02]", bullet: "marker:text-amber-500/80" }
                                : { node: "bg-pink-600 text-white", ring: "ring-pink-500/20", card: "border-pink-500/20 bg-pink-500/[0.02]", bullet: "marker:text-pink-500/80" }
                        return (
                          <>
                            <div
                              className={`h-12 w-12 rounded-full shadow-sm flex items-center justify-center text-lg font-bold shrink-0 ring-8 ${accent.ring} ${accent.node}`}
                            >
                              {item.step}
                            </div>
                            <div className={`rounded-2xl border bg-card p-5 shadow-sm flex-1 ${accent.card}`}>
                              <div className="text-foreground font-bold">{item.firstLine}</div>
                              <ul className={`mt-3 list-disc pl-5 space-y-1 text-foreground/90 leading-relaxed ${accent.bullet}`}>
                                {item.bullets.map((b) => (
                                  <li key={b}>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )
                      })()}
                    </div>
                  </li>
                ))}
              </ol>

              <blockquote className="mt-8 text-center">
                <div className="mx-auto mb-4 h-px w-24 bg-border" aria-hidden="true" />
                <p className="text-foreground/80 italic leading-relaxed">
                  “Once the foundation is sound, execution becomes obvious.”
                </p>
              </blockquote>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-sm text-muted-foreground">© 2025 Product Portfolio. Crafted with care.</div>
        </div>
      </footer>
    </div>
  )
}
