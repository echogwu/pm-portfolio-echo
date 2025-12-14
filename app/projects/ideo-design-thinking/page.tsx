import Link from "next/link"
import type { Metadata } from "next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "IDEO: Design Thinking Challenge",
  description: "Practiced divergent→convergent thinking, research synthesis, rapid prototyping, and iteration.",
  pathname: "/projects/ideo-design-thinking",
  ogImagePath: "/projects/ideo-design-thinking/opengraph-image.png",
  ogImageAlt: "IDEO design thinking prototype walkthrough",
  type: "article",
})

export default function IDEOPage() {
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
        title="IDEO: Design Thinking Challenge"
        subline="Understanding humans before designing systems"
        tags={["Design Thinking", "User Research", "Prototyping", "Synthesis", "Divergent → Convergent", "Storytelling"]}
        heroImage={{
          src: "/design-thinking.gif",
          alt: "IDEO design thinking prototype walkthrough",
        }}
        row1={{
          challenge: {
            heading: "Challenge",
            bullets: [
              "Loneliness is widely discussed but poorly understood in practice",
              "Most products treat it as a social-graph problem and miss emotional/contextual reality",
              "Understand how people lose and rebuild connection during life transitions",
              "Resist jumping to solutions; optimize for insight quality over feature output",
            ],
          },
          role: {
            heading: "Role",
            bullets: [
              "Project Lead — research, synthesis, and narrative",
              "Planned and conducted primary interviews (stories over opinions)",
              "Led sensemaking sessions and clustered qualitative signals into insights",
              "Sketched concepts to test shared understanding before committing to direction",
              "Owned final narrative and presented to IDEO judges",
            ],
          },
        }}
        row2={{
          throughline: "observe → synthesize → frame → diverge → converge → prototype → test → iterate",
          left: [
            {
              title: "Led qualitative discovery under ambiguity",
              description: "Used deep interviews to surface lived experiences, not abstractions.",
              bullets: ["Open-ended prompts (“Tell me about the last time…”)", "Stories of connection vs invisibility"],
            },
            {
              title: "Treated humans as the system",
              description: "Mapped emotional signals as indirect inputs and avoided premature quantification.",
              bullets: ["Loneliness as perspective, not constant state", "Signals like withdrawal or routine-seeking"],
            },
          ],
          right: [
            {
              title: "Synthesized insight before ideation",
              description: "Formed judgment first, then used it to constrain what should exist.",
              bullets: ["Loneliness is contextual/episodic", "Consistency > intensity", "Shared activity builds bonds"],
            },
            {
              title: "Prototyped to test understanding (not scale)",
              description: "Built low-fidelity flows to validate resonance before committing to a product direction.",
              bullets: ["Reflection check-ins (not broadcasting)", "Inner-circle reminders (not engagement scores)"],
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcomes",
            bullets: [
              "Reframed loneliness from “lack of people” to misalignment between emotion, routine, and connection",
              "Designed a coherent concept (“Lonely Hearts Club”) grounded directly in validated behaviors",
              "Demonstrated disciplined product judgment by avoiding gamification and shallow engagement loops",
              "Delivered a clear narrative and prototype walkthrough to IDEO judges",
            ],
          },
          learnings: {
            heading: "Learnings",
            bullets: [
              "Human behavior is the most important—and least instrumented—part of any system",
              "Clarity comes from synthesis, not data volume",
              "Products fail when they encode assumptions instead of understanding",
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
