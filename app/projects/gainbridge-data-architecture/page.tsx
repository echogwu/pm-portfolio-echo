import Link from "next/link"
import { PreserveScroll } from "@/components/preserve-scroll"
import { BackButton } from "@/components/back-button"

export const metadata = {
  title: "Gainbridge | Product Manager, Data and Measurement",
  description: "Built the instrumentation layer that made performance trustworthy — before optimization.",
}

export default function GainbridgePage() {
  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <PreserveScroll />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight hover:text-foreground/70 transition-colors">
            PM Portfolio
          </Link>
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

      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <BackButton />

            <h1 className="mt-10 text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
              Gainbridge: Product Manager, Data and Measurement
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Built the instrumentation layer that made performance trustworthy — before optimization.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Data Architecture
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Measurement Strategy
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Event Taxonomy
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Identity Resolution
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Attribution Systems
              </span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-muted">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/gainbridge.gif`}
              alt="Gainbridge data architecture"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-6 lg:px-8 pb-16">
        <div className="rounded-3xl border border-border bg-card px-8 py-10 shadow-[0_18px_50px_rgba(2,6,23,0.06),0_0_0_1px_rgba(15,23,42,0.04)]">
          <div className="space-y-12 justify-text">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Problem / Context */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">The Challenge</h2>
            <div className="space-y-6 text-foreground/90 leading-relaxed text-lg justify-text">
              <p>
                Gainbridge's B2C business entered a strategic reset. Previous leadership optimized aggressively for
                top-line growth, accepting high CAC and opaque attribution as necessary costs. New leadership shifted
                focus to <strong>profitability and CAC reduction</strong>, which immediately surfaced a hard truth:
              </p>
              <div className="border-l-4 border-[#0066cc]/30 pl-6 py-4 my-8 bg-muted/30 rounded-r">
                <p className="text-xl font-medium text-balance leading-relaxed">
                  The company could not reliably explain why customers converted, which channels mattered, or where money
                  was being wasted.
                </p>
              </div>
              <p>
                I audited the existing growth and analytics setup and found <strong>five systemic failures</strong>:
              </p>
              <ul className="space-y-3 ml-6 list-disc marker:text-muted-foreground">
                <li>
                  <strong>Siloed optimization</strong> — Marketing, product, and operations each optimized local KPIs with
                  no shared definition of success across the funnel
                </li>
                <li>
                  <strong>Unclear event definitions and timing</strong> — "Conversion" meant different things in different
                  tools. Events fired at inconsistent lifecycle stages, breaking performance analysis
                </li>
                <li>
                  <strong>Tool confusion</strong> — Teams assumed onboarding new tools would fix insight gaps. In reality,
                  existing tools were underutilized or misused
                </li>
                <li>
                  <strong>Data quality breakdowns</strong> — Mixed prod/test environments, discrepancies between GA4,
                  internal reporting, and ad platforms. Low trust in dashboards across leadership
                </li>
                <li>
                  <strong>No end-to-end customer journey</strong> — Attribution began too late (at application start).
                  Pre-enrollment discovery, consideration, and abandonment were invisible
                </li>
              </ul>
              <p className="mt-6">
                The core issue wasn't a lack of data or tooling — it was{" "}
                <strong>
                  misalignment between how systems were instrumented, how metrics were defined, and how decisions were
                  actually made
                </strong>
                .
              </p>
              <div className="border-l-4 border-[#0066cc]/30 pl-6 py-4 my-8 bg-muted/30 rounded-r">
                <p className="text-xl font-medium text-balance leading-relaxed">
                  Reducing CAC was impossible without first making the system explain itself.
                </p>
              </div>
            </div>
          </section>

          {/* My Role */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">My Role</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed text-lg justify-text">
              <p>
                There was no formally defined owner for data architecture or measurement. I stepped in voluntarily, then
                formalized the role by:
              </p>
              <ul className="space-y-2 ml-6 list-disc marker:text-muted-foreground">
                <li>Partnering with marketing, data engineering, product, and operations</li>
                <li>Auditing tooling, pipelines, and dashboards end to end</li>
                <li>Translating technical findings into business implications</li>
                <li>Socializing conclusions through concrete demos and customer journey walkthroughs with leadership</li>
              </ul>
              <p>
                My mandate became explicit over time:{" "}
                <strong>Build a data foundation that makes CAC reduction possible, not theoretical.</strong>
              </p>
            </div>
          </section>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Approach / Decisions */}
          <section>
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Approach / Decisions</h2>
            <p className="text-muted-foreground italic mb-8">
              systems thinking → tooling audit → taxonomy freeze → identity architecture → attribution proof
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Reframed growth as a systems problem, not a channel problem
                </h3>
                <p className="text-foreground/90 leading-relaxed text-lg justify-text">
                  Rather than asking "which channel performs best," I asked: What decisions do we want to make? What
                  signals do those decisions require? Where does the current system distort or lose those signals? This
                  shifted the work from reporting to system design.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Audited and clarified what each tool actually did</h3>
                <p className="text-foreground/90 leading-relaxed text-lg justify-text">
                  I mapped the full data stack — Segment, GA4, FullStory, Braze, Pendo, Snowflake, ad platforms — and
                  documented each tool's intended role, where capabilities overlapped, and where teams expected behavior
                  the tools could not provide. We didn't need more tools. We needed clear contracts between the ones we
                  already had.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Explicitly paused further event expansion until definitions were fixed
                </h3>
                <div className="space-y-4 text-foreground/90 leading-relaxed text-lg">
                  <p>
                    Teams wanted to add more Segment events, push more data into analytics tools, and "figure it out
                    later." I called the shot to pause adding new events until we clarified what each event represented in
                    the customer lifecycle, which tool was the source of truth for which signal, and which downstream
                    decisions depended on each event.
                  </p>
                  <p>
                    I introduced <strong>data taxonomy principles</strong>: canonical event names, lifecycle-aligned
                    timing, and explicit ownership per event. This prevented further schema debt and stopped bad data from
                    being operationalized.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Designed a unified identity-first architecture</h3>
                <p className="text-foreground/90 leading-relaxed text-lg justify-text">
                  The core technical insight was identity. I redesigned the system around Segment as the identity and
                  routing hub, Snowflake as the system of record, FullStory for pre-enrollment behavior, and activation
                  tools as downstream consumers, not authorities. This allowed anonymous → known user stitching, true
                  end-to-end journey reconstruction, and attribution that included discovery and consideration.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Proved value with a concrete multi-touch attribution model</h3>
                <p className="text-foreground/90 leading-relaxed text-lg justify-text">
                  Instead of debating attribution frameworks abstractly, I built one. I discovered years of untapped
                  pre-enrollment data in FullStory, reconstructed real customer journeys from first ad click to funding,
                  implemented a starter multi-touch attribution model, and walked leadership through a real user's path
                  step by step. Attribution stopped being a philosophical debate and became an operational lever.
                </p>
              </div>
            </div>
          </section>

          {/* Outcomes / Impact */}
          <section>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Outcomes / Impact</h2>
            <div className="space-y-6 text-foreground/90 leading-relaxed text-lg justify-text">
              <p>The work delivered measurable, sustained impact:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="p-6 border border-border/50 rounded-lg bg-background/50 shadow-sm">
                  <div className="text-3xl font-bold text-[#0066cc] mb-2">Evidence-based</div>
                  <div className="text-sm text-muted-foreground">CAC discussions moved from opinion to data</div>
                </div>
                <div className="p-6 border border-border/50 rounded-lg bg-background/50 shadow-sm">
                  <div className="text-3xl font-bold text-[#0066cc] mb-2">Aligned</div>
                  <div className="text-sm text-muted-foreground">Leadership aligned on data clarity as prerequisite</div>
                </div>
                <div className="p-6 border border-border/50 rounded-lg bg-background/50 shadow-sm">
                  <div className="text-3xl font-bold text-[#0066cc] mb-2">Unified</div>
                  <div className="text-sm text-muted-foreground">Marketing and product shared one journey model</div>
                </div>
                <div className="p-6 border border-border/50 rounded-lg bg-background/50 shadow-sm">
                  <div className="text-3xl font-bold text-[#0066cc] mb-2">Actionable</div>
                  <div className="text-sm text-muted-foreground">
                    Activation strategies became possible with confidence
                  </div>
                </div>
              </div>
              <p>More importantly:</p>
              <ul className="space-y-2 ml-6 list-disc marker:text-muted-foreground">
                <li>Data architecture became a first-class product concern</li>
                <li>Activation strategies (suppression, re-engagement, bidding) became possible with confidence</li>
                <li>Even before full rollout, decision quality improved</li>
              </ul>
              <p>
                This was one of my first experiences seeing how{" "}
                <strong>measurement infrastructure + product judgment</strong> can materially change how an organization
                operates.
              </p>
            </div>
          </section>
        </div>

        {/* What I Learned */}
        <section>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">What I Learned</h2>
          <div className="space-y-6">
            <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Growth metrics are meaningless without lifecycle context</h3>
              <p className="text-foreground/90 leading-relaxed">
                The same metric means different things at different stages of the customer journey. Without clear
                lifecycle definitions, teams optimized on signals that were temporally or semantically misaligned,
                leading to premature or misguided decisions.
              </p>
            </div>

            <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Most "analytics problems" are actually definition and ownership failures
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Inconsistent reporting was rarely a tooling issue. It almost always traced back to unclear event
                definitions, missing ownership, and no shared agreement on what data was meant to represent.
              </p>
            </div>

            <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Pausing instrumentation can unlock more value than adding it
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Adding events without discipline increased noise and schema debt. Pausing instrumentation created space
                to clarify intent, clean existing signals, and prevent bad data from being operationalized.
              </p>
            </div>

            <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                A data PM's job is not to create dashboards — it's to prevent bad decisions from scaling
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Dashboards don't create leverage; decisions do. The highest-impact work was ensuring data was
                trustworthy enough that scaling decisions wouldn't compound error.
              </p>
            </div>
          </div>
        </section>
        </div>

        {/* Artifacts & Evidence */}
        <section>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Artifacts & Evidence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2">Event Taxonomy Spec</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive naming conventions and schema definitions for all customer lifecycle events.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2">Identity Resolution Design</h3>
              <p className="text-sm text-muted-foreground">
                Technical specification for cross-device, cross-session user identity graph.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2">Data Flow Audit</h3>
              <p className="text-sm text-muted-foreground">
                Visual map of every analytics tool, data source, and transformation in the stack.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2">Attribution Model Comparison</h3>
              <p className="text-sm text-muted-foreground">
                Analysis of first-touch, last-touch, and multi-touch models applied to historical data.
              </p>
            </div>
          </div>
        </section>
        </div>
      </article>
    </div>
  )
}
