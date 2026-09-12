import Link from "next/link"
import { Github, Mail, MapPin, Linkedin } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export default function HomeContent() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteNav active="home" />

      {/* Hero — editorial composition matching Screenshot 1 */}
      <section className="page-container pt-[150px] lg:pt-[158px] pb-24 lg:pb-[min(20rem,calc(100svh-46rem))]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] gap-14 lg:gap-x-24 xl:gap-x-28 items-start">
          {/* Copy — ~60% */}
          <div className="flex flex-col min-w-0 max-w-[720px]">
            <h1
              className="text-left text-balance tracking-tight text-foreground"
              style={{
                fontSize: "clamp(2rem, 3.4vw, 60px)",
                lineHeight: 1.25,
                fontWeight: 700,
                maxWidth: "700px",
              }}
            >
              Product leader for real-time customer data infrastructure.
            </h1>

            <p
              className="mt-6 text-left"
              style={{
                fontSize: "clamp(0.95rem, 1.1vw, 21px)",
                lineHeight: 1.55,
                color: "#737373",
                maxWidth: "700px",
              }}
            >
              I build event and data platforms where product decisions shape scale, cost, reliability, and customer
              trust.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-[45px]">
              <Link
                href="https://www.linkedin.com/in/echo-paulus/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[12px] text-[#737373] hover:text-foreground transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" strokeWidth={1.75} />
                LinkedIn
              </Link>
              <Link
                href="mailto:echopaulus@berkeley.edu"
                className="flex items-center gap-2 text-[12px] text-[#737373] hover:text-foreground transition-colors"
              >
                <Mail className="w-3.5 h-3.5" strokeWidth={1.75} />
                Email
              </Link>
              <Link
                href="https://github.com/echogwu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[12px] text-[#737373] hover:text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" strokeWidth={1.75} />
                Github
              </Link>
            </div>
          </div>

          {/* Profile — ~40%, centered in column */}
          <div className="flex justify-center lg:justify-center">
            <div className="flex flex-col items-center w-full max-w-[435px]">
              <div
                className="relative shrink-0 rounded-full overflow-hidden bg-muted"
                style={{
                  width: "min(100%, 430px)",
                  height: "auto",
                  aspectRatio: "1 / 1",
                }}
              >
                <img
                  src={`${basePath}/profile-avatar.png`}
                  alt="Echo Paulus"
                  className="absolute inset-0 h-full w-full rounded-full object-cover border border-neutral-200 shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
                />
              </div>

              <div className="text-center mt-[22px] space-y-1">
                <h2 className="text-[22px] font-bold tracking-tight text-foreground leading-tight">Echo Paulus</h2>
                <p className="text-[14px] text-[#737373] font-normal leading-snug">Product Manager, Data & Platform</p>
                <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#737373] pt-0.5">
                  <MapPin className="w-3 h-3" strokeWidth={1.75} />
                  San Francisco Bay Area, CA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section boundary — inside the same max-width */}
      <div className="page-container">
        <div className="border-t border-border" />
      </div>

      {/* Featured proof — Klaviyo dominant, Gainbridge secondary */}
      <section className="page-container py-10 lg:py-14">
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
      </section>

      <SiteFooter />
    </div>
  )
}
