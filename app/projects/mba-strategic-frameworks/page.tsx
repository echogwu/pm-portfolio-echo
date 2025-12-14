import Link from "next/link"
import type { Metadata } from "next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "MBA: Designing Decision Systems",
  description: "The bridge from “I can build” to “I can decide what’s worth building and align people around it.”",
  pathname: "/projects/mba-strategic-frameworks",
  ogImagePath: "/projects/mba-strategic-frameworks/opengraph-image.png",
  ogImageAlt: "MBA: designing decision systems",
  type: "article",
})

export default function MBAWorkPage() {
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
        title="MBA — Designing Decision Systems"
        subline="The bridge from “I can build” to “I can decide what’s worth building and align people around it.”"
        tags={["Decision Systems", "Incentives", "Metrics Strategy", "Tradeoffs", "Cross-functional Fluency"]}
        heroImage={{
          src: "/mba.gif",
          alt: "MBA: designing decision systems",
        }}
        row1={{
          challenge: {
            heading: "Challenge",
            bullets: [
              "Move upstream from execution into how decisions get made before code exists",
              "Learn how incentives, metrics, power, and uncertainty shape what teams choose to build",
              "Build judgment (not breadth) across finance, accounting, marketing, economics, and analytics lenses",
              "Translate ambiguity into clear decision logic and alignment",
            ],
          },
          role: {
            heading: "Role",
            bullets: [
              "Full-time MBA student, optimized for judgment over coverage",
              "Treated the MBA as a system to design, not a checklist to complete",
              "Prioritized courses that exposed incentives, tradeoffs, and decision logic",
              "Synthesized theory with real product, data, and organizational problems",
            ],
          },
        }}
        row2={{
          throughline: "decisions over functions → incentives over intentions → clarity over control",
          left: [
            {
              title: "Studied decisions, not functions",
              description:
                "Used accounting, finance, economics, marketing, and analytics as different lenses on the same decision problem.",
            },
            {
              title: "Followed incentives, not intentions",
              description:
                "Learned how metrics and ownership structures quietly shape behavior — and why smart teams can ship the wrong thing for the right reasons.",
              bullets: ["Tracked how success metrics flow into prioritization", "Noted where accountability breaks alignment"],
            },
          ],
          right: [
            {
              title: "Designed decision systems (not just outputs)",
              description:
                "Focused on how leaders create leverage by structuring incentives and clarity, not by increasing control.",
              bullets: ["Make tradeoffs explicit", "Create shared definitions before execution"],
            },
            {
              title: "Shifted operating defaults",
              description: "Internalized a sequence that improves decision quality under uncertainty.",
              bullets: ["Metrics before roadmaps", "Instrumentation before optimization", "Alignment before execution"],
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcomes",
            bullets: [
              "A durable decision framework I now use in product and platform work",
              "Stronger cross-functional fluency with marketing, finance, and strategy partners",
              "Increased comfort operating where incentives conflict and clarity is missing",
            ],
          },
          learnings: {
            heading: "Learnings",
            bullets: [
              "Most product conflict is unresolved business strategy (metrics, customers, risk, and goals)",
              "Execution can’t save broken decision logic — velocity amplifies existing incentives",
              "Leadership leverage comes from clarity, not control",
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
