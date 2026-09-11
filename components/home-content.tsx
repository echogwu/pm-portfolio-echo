import Link from "next/link"
import { Github, Mail, MapPin, Linkedin } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export default function HomeContent() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteNav active="home" />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold leading-tight tracking-tight text-balance text-[clamp(2.1rem,6.5vw,3.4rem)]">
                Product leader for real-time customer data infrastructure.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I build event and data platforms where product decisions shape scale, cost, reliability, and customer
                trust.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/selected-work"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
              >
                View Selected Work
              </Link>
              <Link
                href="/artifacts"
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted/60 transition-colors"
              >
                Explore Product Artifacts
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="https://www.linkedin.com/in/echo-paulus/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
              <Link
                href="mailto:echopaulus@berkeley.edu"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </Link>
              <Link
                href="https://github.com/echogwu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                Github
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10" />
                <img
                  src={`${basePath}/profile-avatar.png`}
                  alt="Echo Paulus"
                  className="w-full h-full rounded-full object-cover border-4 border-border shadow-xl"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Echo Paulus</h2>
                <p className="text-muted-foreground font-medium">Product Manager, Data & Platform</p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="w-4 h-4" />
                  San Francisco Bay Area, CA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product judgment line */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-10 lg:pb-12">
        <p className="max-w-3xl text-lg sm:text-xl font-medium leading-relaxed text-foreground/90 border-l-2 border-foreground/20 pl-5">
          I define what the product must guarantee, where the system can flex, and which trade-offs create the most
          leverage.
        </p>
      </section>

      {/* Featured proof — Klaviyo dominant, Gainbridge secondary */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-10 lg:py-14 border-t border-border">
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          <Link
            href="/selected-work/klaviyo-event-data-platform"
            className="group lg:col-span-8 flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-8 min-h-[280px] hover:border-foreground/25 transition-colors"
          >
            <span className="mb-4 inline-flex w-fit items-center rounded-full border border-sky-300/80 bg-sky-50 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-sky-700 uppercase">
              Featured Work
            </span>
            <div className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">Klaviyo</div>
            <h3 className="mt-3 text-3xl font-bold tracking-tight leading-tight text-balance">
              Evolving the Event Data Platform
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
              Defining what the event platform must guarantee as data volume, infrastructure cost, and downstream
              product requirements diverge.
            </p>
            <div className="mt-auto pt-8">
              <div className="text-sm text-muted-foreground">
                Event infrastructure · Real-time data · Platform strategy · Cost × customer value
              </div>
              <div className="mt-4 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                Read Case Study →
              </div>
            </div>
          </Link>

          <Link
            href="/selected-work/gainbridge-data-architecture"
            className="group lg:col-span-4 flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-8 min-h-[240px] hover:border-foreground/25 transition-colors"
          >
            <div className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">Gainbridge</div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight leading-snug text-balance">
              Designing a Trustworthy Data Architecture
            </h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Reframed fragmented instrumentation into a product and data model that could support reliable
              attribution, analytics, and business decisions.
            </p>
            <div className="mt-auto pt-8">
              <div className="text-sm text-muted-foreground">Data modeling · Attribution · Product judgment</div>
              <div className="mt-4 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                Read Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-10">
          <Link
            href="/selected-work"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            More Selected Work →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
