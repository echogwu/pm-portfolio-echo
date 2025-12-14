import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackButton } from "@/components/back-button"

export const metadata = {
  title: "Amazon|AerServ|Oracle: Engineering Foundation | Echo Paulus",
  description: "The technical grounding that shaped how I evaluate data, risk, and leverage as a PM.",
}

export default function EngineeringFoundationPage() {
  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <ScrollToTop />

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
            <Link href="#" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Work Samples
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <BackButton />

        <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
          Amazon|AerServ|Oracle: Engineering Foundation
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          The technical grounding that shaped how I evaluate data, risk, and leverage as a PM.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Distributed Systems
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Data Integrity
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Validation Strategy
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Failure Analysis
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Platform Thinking
          </span>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-muted mb-12">
          <img src="/engineering foundation.gif" alt="Engineering foundation" className="w-full" />
        </div>

        <div className="prose prose-lg max-w-none space-y-12 justify-text">
          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">The Challenge</h2>
            <p className="text-foreground/90 leading-relaxed">
              Across large-scale platforms (Amazon, InMobi/AerServ, Oracle, IBM), production failures rarely came from
              missing tests. They came from misunderstood system behavior: asynchronous workflows, weak data contracts,
              environment-specific logic, and automation that validated the wrong assumptions.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">The recurring pattern:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90 mt-4">
              <li>Test suites passed while incidents escalated</li>
              <li>Data pipelines degraded silently</li>
              <li>Failures surfaced late, through customers or operations</li>
              <li>Teams optimized for coverage instead of correctness</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-6">
              The challenge wasn’t execution quality — it was reasoning about complex systems with incomplete signals.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">My Role</h2>
            <p className="text-muted-foreground italic mb-6">
              Quality Engineer embedded in platform, API, and data-intensive systems
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              I partnered closely with engineers and PMs to validate correctness across APIs, services, and data flows.
              My role evolved from executing test plans to shaping how teams identified risk, interpreted data, and
              defined “done.”
            </p>
            <p className="text-foreground/90 leading-relaxed font-semibold">
              This role trained me to look past features and into system behavior, assumptions, and failure modes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Approach / Decisions</h2>
            <p className="text-muted-foreground italic mb-6">Test execution → failure modes → system boundaries → instrumentation</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Shifted from test execution to failure-mode analysis</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Rather than expanding automation indiscriminately, I analyzed incidents, bugs, and regressions to
                  identify which failure classes actually mattered.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Validated system boundaries instead of isolated components</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Most high-impact issues emerged at service boundaries and lifecycle transitions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Designed validation as part of the system, not an afterthought</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Validation (metrics, events, alerts) was treated as foundational infrastructure, not a post-build
                  checklist.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Key Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Prevented critical bugs from reaching production</h3>
                <p className="text-foreground/90 leading-relaxed">
                  By identifying high-risk failure modes and instrumenting systems to surface them before release,
                  especially in pricing, earnings, and data-sensitive paths.
                </p>
              </div>
              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Proactive quality thought partner to product and engineering</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Helped teams design metrics, events, and alerts as part of system architecture, laying a robust
                  observability foundation that supported faster decisions and safer launches.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">What I Learned</h2>
            <div className="space-y-6">
              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Systems fail at boundaries</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The highest-impact failures emerge where ownership, assumptions, or data contracts blur.
                </p>
              </div>

              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Automation without judgment is noise</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Validation must reflect real-world behavior, not idealized flows.
                </p>
              </div>

              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Data is a diagnostic instrument</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Metrics, logs, and events are tools for reasoning — not vanity outputs.
                </p>
              </div>

              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Prevention compounds</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The most valuable work often shows up as incidents that never happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-sm text-muted-foreground">© 2025 Product Portfolio. Crafted with care.</div>
        </div>
      </footer>
    </div>
  )
}
