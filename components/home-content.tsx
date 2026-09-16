import Link from "next/link"
import { Github, Mail, MapPin, Linkedin } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import howIWorkBg from "@/components/how-i-work-bg.png"
import { DEFAULT_HOME, type HomeData, type WorkStep } from "@/lib/home-data"
import { type RoutePrefix, withPrefix } from "@/lib/paths"
// import { Button } from "@/components/ui/button"

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/echo-paulus/", icon: Linkedin, external: true },
  { label: "Email", href: "mailto:echopaulus@berkeley.edu", icon: Mail, external: false },
  { label: "Github", href: "https://github.com/echogwu", icon: Github, external: true },
] as const

function SocialLinks() {
  return (
    <>
      {SOCIAL_LINKS.map(({ label, href, icon: Icon, external }) => (
        <Link
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon className="w-5 h-5" />
          {label}
        </Link>
      ))}
    </>
  )
}

const STEP_GLYPHS = ["①", "②", "③", "④", "⑤", "⑥"] as const

/** Position drives the accent, so step content stays pure copy. */
const STEP_ACCENTS = [
  {
    node: "bg-emerald-600 text-white",
    ring: "ring-emerald-500/20",
    card: "border-emerald-500/20 bg-emerald-500/[0.02]",
    bullet: "marker:text-emerald-500/80",
  },
  {
    node: "bg-sky-600 text-white",
    ring: "ring-sky-500/20",
    card: "border-sky-500/20 bg-sky-500/[0.02]",
    bullet: "marker:text-sky-500/80",
  },
  {
    node: "bg-amber-600 text-white",
    ring: "ring-amber-500/20",
    card: "border-amber-500/25 bg-amber-500/[0.02]",
    bullet: "marker:text-amber-500/80",
  },
  {
    node: "bg-pink-600 text-white",
    ring: "ring-pink-500/20",
    card: "border-pink-500/20 bg-pink-500/[0.02]",
    bullet: "marker:text-pink-500/80",
  },
] as const

function stepAccent(index: number) {
  return STEP_ACCENTS[index % STEP_ACCENTS.length]
}

function stepGlyph(index: number) {
  return STEP_GLYPHS[index] ?? String(index + 1)
}

function StepBody({ step, bulletClassName }: { step: WorkStep; bulletClassName: string }) {
  if (step.copy) {
    return <p className="mt-3 text-foreground/90 leading-relaxed">{step.copy}</p>
  }
  return (
    <ul className={`mt-3 list-disc pl-5 space-y-1 text-foreground/90 leading-relaxed ${bulletClassName}`}>
      {(step.bullets ?? []).map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  )
}

export default function HomeContent({
  home = DEFAULT_HOME,
  prefix,
}: {
  home?: HomeData
  prefix?: RoutePrefix
} = {}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const {
    eyebrow,
    headline,
    subhead,
    supporting,
    secondaryCta,
    profileTagline,
    featured,
    featuredProjects,
    howIWork,
    background,
    contact,
  } = home
  const workHref = withPrefix(prefix, "/work")

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <SiteNav active="home" prefix={prefix} />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
              ) : null}
              <h1 className="font-bold leading-tight tracking-tight text-balance text-[clamp(2.15rem,8.2vw,3.75rem)]">
                {headline}
              </h1>
              {/* One container so both paragraphs justify to the same measure. */}
              <div className="flex flex-col gap-4 max-w-xl">
                <p className="justify-hero text-lg text-muted-foreground leading-relaxed">{subhead}</p>
                {supporting ? (
                  <p className="justify-hero text-lg text-muted-foreground leading-relaxed">{supporting}</p>
                ) : null}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
              <SocialLinks />
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
                <p className="text-muted-foreground font-medium">{profileTagline}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="w-4 h-4" />
                  San Francisco Bay Area, CA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-20 border-t border-border">
        <div className="flex items-end justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{featured.heading}</h2>
            {featured.intro ? (
              <p className="mt-3 text-lg text-muted-foreground leading-relaxed max-w-2xl">{featured.intro}</p>
            ) : null}
          </div>
          <Link
            href={workHref}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-lime-300 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-lime-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View case studies
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
                  <Link
                    href={withPrefix(prefix, project.href)}
                    aria-hidden="true"
                    tabIndex={-1}
                    className="group block rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-muted/40 shadow-sm aspect-video transition-all duration-200 group-hover:border-border group-hover:shadow-md">
                      <img
                        src={`${basePath}${project.imageSrc}`}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                </div>

                <div className={isReversed ? "lg:order-1" : undefined}>
                  <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-bold leading-tight text-balance">{project.title}</h3>
                    <p className="text-foreground/90 leading-relaxed justify-text">
                      {project.description}
                    </p>

                    {project.outcome ? (
                      <div className="border-l-2 border-lime-300 pl-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Outcome</p>
                        <p className="mt-1 text-foreground/90 leading-relaxed justify-text">{project.outcome}</p>
                      </div>
                    ) : null}

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
                      href={withPrefix(prefix, project.href)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group w-fit"
                    >
                      Read Case Study
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="sm:hidden pt-2">
            <Link
              href={workHref}
              className="inline-flex items-center justify-center rounded-full bg-lime-300 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-lime-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>

      {/* How I Work - Build clarity inside messy systems */}
      <section className="relative border-t border-border">
        {/* Full-bleed accent backdrop (subtle gradient + dot grid) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-background to-emerald-50 dark:from-slate-950 dark:via-background dark:to-slate-900" />
          <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.22] [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.18)_1px,transparent_0)] dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.22)_1px,transparent_0)] [background-size:22px_22px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                {howIWork.heading}
                {howIWork.headingAccent ? (
                  <>
                    {" "}
                    <span className="underline decoration-lime-300 decoration-[6px] underline-offset-[6px]">
                      {howIWork.headingAccent}
                    </span>
                  </>
                ) : null}
              </h2>
              {howIWork.intro ? (
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{howIWork.intro}</p>
              ) : null}
            </div>

            <div className="pt-2 lg:pt-0">
              <Link
                href={workHref}
                className="inline-flex items-center justify-center rounded-full bg-lime-300 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-lime-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View case studies
              </Link>
            </div>
          </div>

          {/* Horizontal workflow (desktop) + stacked (mobile) */}
          <div className="mt-10">
            {/* Desktop: horizontal progression */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-[0_18px_50px_rgba(2,6,23,0.08)]">
                {/* Background image */}
                <div className="absolute inset-0 -z-10" aria-hidden="true">
                  <img src={howIWorkBg.src} alt="" className="h-full w-full object-cover" />
                  {/* Light wash for readability */}
                  <div className="absolute inset-0 bg-background/35" />
                </div>

                {/* Content (reserve space for the bottom-bar quote) */}
                <div className={`px-8 py-10 ${howIWork.quote ? "pb-20" : ""}`}>
                  <div className="grid grid-cols-4 grid-rows-[auto_140px_auto] gap-x-8 gap-y-8">
                    {/* Cards (explicitly aligned to the matching node column) */}
                    {howIWork.steps.map((s, i) => {
                      const a = stepAccent(i)
                      const isAbove = i % 2 === 1
                      return (
                        <div
                          key={`card-${s.title}`}
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
                          <div className={`rounded-2xl border bg-background/90 backdrop-blur-sm p-5 shadow-sm ${a.card}`}>
                            <div className="text-foreground font-bold">{s.title}</div>
                            <StepBody step={s} bulletClassName={a.bullet} />
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
                        {howIWork.steps.map((s, i) => {
                          const a = stepAccent(i)
                          const isAbove = i % 2 === 1
                          return (
                            <div key={`node-${s.title}`} className="relative flex items-center justify-center">
                              {/* Connector stub up/down */}
                              <div
                                className={`absolute left-1/2 -translate-x-1/2 w-px bg-border ${isAbove ? "top-[-32px] h-8" : "bottom-[-32px] h-8"}`}
                                aria-hidden="true"
                              />
                              <div
                                className={`relative z-10 h-12 w-12 rounded-full ${a.node} shadow-sm flex items-center justify-center text-lg font-bold ring-8 ${a.ring}`}
                              >
                                {stepGlyph(i)}
                              </div>
                              {/* Arrow between nodes */}
                              {i !== howIWork.steps.length - 1 && (
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
                </div>

                {/* Quote placed on the image's bottom bar */}
                {howIWork.quote ? (
                  <div className="absolute inset-x-0 bottom-0 px-8 pb-5">
                    <p className="text-center text-sm font-semibold text-foreground/80">
                      {`“${howIWork.quote}”`}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Mobile: stacked progression */}
            <div className="lg:hidden">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
                <div className="absolute inset-0 -z-10" aria-hidden="true">
                  <img src={howIWorkBg.src} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-background/40" />
                </div>

                <div className={`p-5 ${howIWork.quote ? "pb-16" : ""}`}>
                  <ol className="space-y-4">
                    {howIWork.steps.map((step, idx, arr) => {
                      const accent = stepAccent(idx)
                      return (
                        <li key={step.title} className="relative">
                          {idx !== arr.length - 1 && (
                            <div className="absolute left-6 top-14 bottom-[-16px] w-px bg-border" aria-hidden="true" />
                          )}
                          <div className="flex gap-4">
                            <div
                              className={`h-12 w-12 rounded-full shadow-sm flex items-center justify-center text-lg font-bold shrink-0 ring-8 ${accent.ring} ${accent.node}`}
                            >
                              {stepGlyph(idx)}
                            </div>
                            <div className={`rounded-2xl border bg-background/90 backdrop-blur-sm p-5 shadow-sm flex-1 ${accent.card}`}>
                              <div className="text-foreground font-bold">{step.title}</div>
                              <StepBody step={step} bulletClassName={accent.bullet} />
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ol>
                </div>

                {howIWork.quote ? (
                  <div className="absolute inset-x-0 bottom-0 px-5 pb-4">
                    <p className="text-center text-sm font-semibold text-foreground/80">
                      {`“${howIWork.quote}”`}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Background */}
      {background ? (
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-20 border-t border-border">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">{background.heading}</h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{background.body}</p>
            </div>
            <ul className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-1 lg:self-center list-disc pl-5 text-foreground/90 leading-relaxed">
              {background.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Contact */}
      {contact ? (
        <section id="contact" className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-20 border-t border-border">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">{contact.heading}</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">{contact.copy}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <SocialLinks />
          </div>
        </section>
      ) : null}

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
