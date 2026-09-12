import Link from "next/link"

type WorkCardProps = {
  href: string
  company: string
  title: string
  description: string
  tags?: string[]
  cta: string
  featured?: boolean
  className?: string
}

function WorkCard({
  href,
  company,
  title,
  description,
  tags,
  cta,
  featured = false,
  className = "",
}: WorkCardProps) {
  return (
    <Link
      href={href}
      className={[
        "group flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 sm:p-8",
        "shadow-[0_1px_0_rgba(15,23,42,0.03)] transition-colors hover:border-neutral-300",
        featured ? "min-h-[280px] lg:min-h-[320px]" : "min-h-[220px]",
        className,
      ].join(" ")}
    >
      {featured ? (
        <span className="mb-5 inline-flex w-fit items-center rounded-full border border-sky-300/80 bg-sky-50 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-sky-700 uppercase">
          Featured Case Study
        </span>
      ) : null}

      <div className="text-[11px] font-semibold tracking-[0.14em] text-neutral-500 uppercase">{company}</div>

      <h3
        className={[
          "mt-3 font-bold tracking-tight text-foreground text-balance",
          featured ? "text-3xl lg:text-[2.15rem] leading-tight" : "text-2xl leading-snug",
        ].join(" ")}
      >
        {title}
      </h3>

      <p
        className={[
          "mt-4 text-neutral-600 leading-relaxed",
          featured ? "text-base lg:text-[1.05rem] max-w-xl" : "text-sm sm:text-[0.95rem]",
        ].join(" ")}
      >
        {description}
      </p>

      <div className="mt-auto pt-8">
        {tags && tags.length > 0 ? (
          <div className="text-sm text-neutral-400">{tags.join(" · ")}</div>
        ) : null}
        <div className="mt-4 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          {cta}
        </div>
      </div>
    </Link>
  )
}

export function SelectedWorkContent() {
  return (
    <main className="bg-[#f7f6f1] text-foreground">
      <section className="page-container pt-14 lg:pt-16 pb-10">
        <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.08] text-balance">
          Product work across data infrastructure, platforms, and strategy.
        </h1>
        <p className="mt-5 max-w-3xl text-base sm:text-lg text-neutral-600 leading-relaxed">
          I work at the seam of technical systems and product strategy—turning ambiguous data problems into clear
          product decisions, durable platforms, and measurable business value.
        </p>
      </section>

      {/* Tier 1 — role-fit proof */}
      <section className="page-container pb-14">
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          <WorkCard
            className="lg:col-span-8"
            featured
            href="/selected-work/klaviyo-event-data-platform"
            company="Klaviyo"
            title="Evolving the event data platform"
            description="Defining what the event platform must guarantee as data volume, infrastructure cost, and downstream product requirements diverge."
            tags={["Event infrastructure", "Real-time data", "Platform strategy"]}
            cta="Read Case Study →"
          />
          <WorkCard
            className="lg:col-span-4"
            href="/selected-work/gainbridge-data-architecture"
            company="Gainbridge"
            title="Designing a trustworthy data architecture"
            description="Reframed fragmented instrumentation into a model that could support reliable attribution and business decisions."
            tags={["Data modeling", "Attribution", "Product judgment"]}
            cta="Read Case Study →"
          />
        </div>
      </section>

      {/* Tier 2 — supporting range */}
      <section className="page-container pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">The range behind the work</h2>
        <p className="mt-3 max-w-3xl text-neutral-600 leading-relaxed">
          The experiences that built technical depth, platform empathy, commercial range, and end-to-end ownership.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:gap-6">
          <WorkCard
            href="/selected-work/lyft-developer-experience-pm"
            company="Lyft"
            title="Building platform empathy"
            description="Developer platform work shaped how I think about abstractions, reliability, and usability."
            tags={["Developer platform", "Systems thinking"]}
            cta="See the Work →"
          />
          <WorkCard
            href="/selected-work/dishclosure-founder-mode"
            company="Dishclosure / Founder"
            title="Owning the whole system"
            description="Founder experience connected product, engineering, customers, marketing, sales, and distribution."
            tags={["0→1", "GTM", "End-to-end ownership"]}
            cta="Read the Founder Story →"
          />
        </div>
      </section>

      {/* Foundation band */}
      <section className="page-container pb-20">
        <div className="border-y border-neutral-200 py-8 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[140px_1fr] lg:gap-10 lg:items-start">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-neutral-500 uppercase pt-1">
              Foundation
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <Link
                href="/selected-work/engineering-foundation"
                className="group space-y-2 hover:opacity-90 transition-opacity"
              >
                <div className="font-semibold text-foreground">Technical depth</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Engineering → systems, data, implementation
                </p>
              </Link>

              <Link
                href="/selected-work/mba-strategic-frameworks"
                className="group space-y-2 hover:opacity-90 transition-opacity"
              >
                <div className="font-semibold text-foreground">Business breadth</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  MBA → strategy, finance, market framing
                </p>
              </Link>

              <Link
                href="/selected-work/ideo-design-thinking"
                className="group space-y-2 hover:opacity-90 transition-opacity"
              >
                <div className="font-semibold text-foreground">Design inquiry</div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  IDEO → research, synthesis, human-centered framing
                </p>
              </Link>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-sm text-neutral-500 leading-relaxed">
            The through-line: increasingly larger ownership of complex product problems where technical architecture,
            customer value, and business economics collide.
          </p>
        </div>
      </section>
    </main>
  )
}
