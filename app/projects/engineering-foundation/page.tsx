import Link from "next/link"
import type { Metadata } from "next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Amazon | AerServ | Oracle: Engineering Foundation | Echo Paulus",
  description: "The technical grounding that shaped how I evaluate data, risk, and leverage as a PM.",
  pathname: "/projects/engineering-foundation",
  ogImagePath: "/engineering foundation.gif",
  ogImageAlt: "Engineering foundation",
  type: "article",
})

export default function EngineeringFoundationPage() {
  return (
    <div className="min-h-screen bg-background">
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
            <Link href="/work-samples" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Work Samples
            </Link>
          </div>
        </div>
      </nav>

      <ProjectDetailLayout
        title="Amazon|AerServ|Oracle: Engineering Foundation"
        subline="The technical grounding that shaped how I evaluate data, risk, and leverage as a PM."
        tags={["Distributed Systems", "Data Integrity", "Validation Strategy", "Failure Analysis", "Platform Thinking"]}
        heroImage={{
          src: "/engineering foundation.gif",
          alt: "Engineering foundation",
        }}
        row1={{
          challenge: {
            heading: "Challenge",
            bullets: [
              "Production failures came from misunderstood system behavior — not missing tests",
              "Test suites passed while incidents escalated across asynchronous workflows and weak data contracts",
              "Data pipelines degraded silently and surfaced late through customers or operations",
              "Teams optimized for coverage instead of correctness",
              "Reason about complex systems with incomplete signals",
            ],
          },
          role: {
            heading: "Role",
            bullets: [
              "Quality Engineer embedded in platform, API, and data-intensive systems",
              "Partnered with engineers and PMs to validate correctness across services and data flows",
              "Shifted teams from “more tests” to clearer definitions of risk and “done”",
              "Focused on system boundaries, assumptions, and failure modes",
            ],
          },
        }}
        row2={{
          throughline: "test execution → failure modes → system boundaries → instrumentation",
          left: [
            {
              title: "Moved from test execution to failure-mode analysis",
              description: "Analyzed incidents, bugs, and regressions to identify which failure classes actually mattered.",
              bullets: ["Prioritized high-risk paths over broad coverage", "Used real failures to guide validation strategy"],
            },
            {
              title: "Validated boundaries (not isolated components)",
              description: "Targeted service boundaries and lifecycle transitions where high-impact issues emerged.",
              bullets: ["Contract mismatches", "Async edge cases", "Environment-specific behavior"],
            },
          ],
          right: [
            {
              title: "Designed validation as part of the system",
              description:
                "Treated metrics, events, and alerts as foundational infrastructure — not a post-build checklist.",
              bullets: ["Instrumentation to surface incorrect assumptions early", "Signals that support faster decisions"],
            },
            {
              title: "Optimized for prevention",
              description: "Built confidence by catching failures earlier, reducing the cost of learning.",
              bullets: ["Earlier detection", "Fewer production surprises"],
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcomes",
            bullets: [
              "Prevented critical bugs from reaching production by targeting high-risk failure modes",
              "Helped teams build an observability foundation (metrics, events, alerts) that enabled safer launches",
              "Strengthened cross-functional alignment on risk, correctness, and release readiness",
            ],
          },
          learnings: {
            heading: "Learnings",
            bullets: [
              "Systems fail at boundaries where ownership, assumptions, or data contracts blur",
              "Automation without judgment is noise — validation must reflect real-world behavior",
              "Data is a diagnostic instrument (metrics, logs, events) — not vanity output",
              "Prevention compounds; the best work often shows up as incidents that never happen",
            ],
          },
        }}
      />

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-sm text-muted-foreground">© 2025 Product Portfolio. Crafted with care.</div>
        </div>
      </footer>
    </div>
  )
}
