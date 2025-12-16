import Link from "next/link"
import type { Metadata } from "next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Lyft: Quality Engineer → Developer Experience PM",
  description: "Learned when to stop optimizing tools and start optimizing where teams focus.",
  pathname: "/projects/lyft-developer-experience-pm",
  ogImagePath: "/projects/lyft-developer-experience-pm/opengraph-image.png",
  ogImageAlt: "Lyft developer experience",
  type: "article",
})

export default function LyftPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="w-full border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center gap-3">
            <Link
              href="/"
              className="whitespace-nowrap text-[clamp(0.9rem,3vw,1.125rem)] font-semibold tracking-tight hover:text-foreground/70 transition-colors"
            >
              PM Portfolio
            </Link>
            <div className="ml-auto flex items-center gap-3 sm:gap-8">
              <Link
                href="/"
                className="whitespace-nowrap text-[clamp(0.72rem,2.4vw,0.95rem)] font-medium hover:text-foreground/70 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="whitespace-nowrap text-[clamp(0.72rem,2.4vw,0.95rem)] font-medium text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/work-samples"
                className="whitespace-nowrap text-[clamp(0.72rem,2.4vw,0.95rem)] font-medium hover:text-foreground/70 transition-colors"
              >
                Work Samples
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <ProjectDetailLayout
        title="Lyft: Quality Engineer → Developer Experience PM"
        subline="When to stop optimizing for conventional metrics — and start optimizing what actually matters."
        tags={[
          "Developer Experience",
          "Internal Tools",
          "Simulation",
          "Systems Thinking",
          "Validation Strategy",
          "Platform Reliability",
        ]}
        heroImage={{
          src: "/lyft.gif",
          alt: "Lyft developer experience",
        }}
        row1={{
          challenge: {
            heading: "Challenge",
            bullets: [
              "Major driver workflow change touched pricing, dispatch, and earnings services across regions",
              "Weekly SEVs tied to earnings/pricing logic exposed gaps in existing validation",
              "Critical bugs slipped past manual regression suites and UI automation",
              "Severe failures emerged only when multiple services interacted under real-world conditions",
              "Move beyond “maximize coverage” to prevent high-stakes system failures before production",
            ],
          },
          role: {
            heading: "Role",
            bullets: [
              "System Quality Engineer → Internal Tool Product Manager",
              "Set quality strategy for complex, multi-service driver systems",
              "Created alignment on where validation effort mattered most (failure modes over coverage)",
              "Identified simulation + metrics as the highest-leverage solution",
              "Owned roadmap, reliability, and adoption of the internal simulation tool",
            ],
          },
        }}
        row2={{
          throughline: "UI automation → acceptance tests → still not enough → simulation + metrics",
          left: [
            {
              title: "Used evidence to question UI automation ROI",
              description: "Reviewed six months of Jira bugs and SEVs to see what automation could realistically prevent.",
              bullets: ["UI tests would have caught only a small fraction of high-impact issues"],
            },
            {
              title: "Named where automation breaks down",
              description:
                "The worst failures came from real-world combinations (region logic, ride types, pricing edges) that tests can’t cover reliably.",
              bullets: ["Multi-service interactions", "Edge-case condition explosions"],
            },
            {
              title: "Rebalanced the validation strategy",
              description: "Shifted effort away from flaky UI tests toward deterministic backend acceptance tests.",
              bullets: ["Automate what’s deterministic", "Acknowledge the limits of coverage"],
            },
          ],
          right: [
            {
              title: "Made simulation the center of gravity",
              description:
                "Postmortems + metrics made it clear: system-level simulation paired with alerts was the only reliable early-warning mechanism.",
              bullets: ["Surface failures before launch", "Detect behavioral changes across services"],
            },
            {
              title: "Productized the solution for adoption",
              description:
                "Took ownership of the rider–driver simulation tool and improved reliability, usability, and adoption under constraints.",
              bullets: ["Roadmap from user feedback + usage data", "Better support loops and documentation"],
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcomes",
            bullets: [
              "Earlier detection: shifted discovery of high-risk failures from post-launch to pre-release",
              "Prevented recurring SEVs with metrics, alerts, and simulation checks automation couldn’t cover",
              "Improved reliability/adoption of internal validation tooling (+10%)",
              "Reduced support load and on-call noise (−30%), validating ~$150K quarterly savings",
            ],
          },
          learnings: {
            heading: "Learnings",
            bullets: [
              "Judgment beats tools: redirect effort when it stops creating value",
              "Leverage comes from understanding system interactions, not optimizing a single layer",
              "Evidence is the fastest way to influence and align without authority",
              "Internal tools need product rigor: clear users, workflows, metrics, and positioning",
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
