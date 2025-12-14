import Link from "next/link"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectDetailLayout } from "@/components/project-detail-layout"

export const metadata = {
  title: "Gainbridge | Product Manager, Data and Measurement",
  description: "Built the instrumentation layer that made performance trustworthy — before optimization.",
}

export default function GainbridgePage() {
  return (
    <div className="min-h-screen bg-background">
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

      <ProjectDetailLayout
        title="Gainbridge: Product Manager, Data and Measurement"
        subline="Built the instrumentation layer that made performance trustworthy — before optimization."
        tags={["Data Architecture", "Measurement Strategy", "Event Taxonomy", "Identity Resolution", "Attribution Systems"]}
        heroImage={{
          src: "/gainbridge.gif",
          alt: "Gainbridge data architecture",
        }}
        row1={{
          challenge: {
            heading: "Challenge",
            bullets: [
              "New leadership shifted focus to profitability and CAC reduction",
              "Siloed optimization: teams optimized local KPIs with no shared funnel definition",
              "Unclear event definitions/timing broke performance analysis across tools",
              "Data quality + tool confusion eroded trust in dashboards and attribution",
              "No end-to-end journey: discovery/consideration were invisible and attribution started too late",
            ],
          },
          role: {
            heading: "Role",
            bullets: [
              "Stepped in as de facto owner for data architecture and measurement",
              "Partnered with marketing, data engineering, product, and operations",
              "Audited tooling, pipelines, and dashboards end-to-end",
              "Translated technical findings into business implications and demos for leadership",
              "Mandate: build a foundation that makes CAC reduction operational, not theoretical",
            ],
          },
        }}
        row2={{
          throughline: "systems thinking → tooling audit → taxonomy freeze → identity architecture → attribution proof",
          left: [
            {
              title: "Reframed growth as a systems problem",
              description:
                "Started from decisions we needed to make, then worked backward to the signals required and where the system lost them.",
              bullets: ["Shifted work from reporting to system design"],
            },
            {
              title: "Clarified what each tool actually did",
              description:
                "Mapped the stack (Segment, GA4, FullStory, Braze, Pendo, Snowflake, ad platforms) and made contracts explicit.",
              bullets: ["Overlap vs gaps", "Source-of-truth expectations"],
            },
            {
              title: "Paused event expansion until definitions were fixed",
              description:
                "Stopped “add events now, figure it out later” to prevent schema debt and bad data being operationalized.",
              bullets: ["Canonical names", "Lifecycle-aligned timing", "Explicit ownership per event"],
            },
          ],
          right: [
            {
              title: "Designed an identity-first architecture",
              description:
                "Rebuilt around Segment for identity/routing, Snowflake as system of record, FullStory for pre-enrollment behavior.",
              bullets: ["Anonymous → known stitching", "True end-to-end journey reconstruction"],
            },
            {
              title: "Proved value with a concrete attribution model",
              description:
                "Built a starter multi-touch model and walked leadership through real journeys from first ad click to funding.",
              bullets: ["Turned attribution into an operational lever"],
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcomes",
            bullets: [
              "CAC discussions moved from opinion to evidence by grounding debate in reliable signals",
              "Leadership aligned on data clarity as a prerequisite to profitability work",
              "Marketing and product shared a unified end-to-end journey model",
              "Activation strategies (suppression, re-engagement, bidding) became possible with confidence",
            ],
          },
          learnings: {
            heading: "Learnings",
            bullets: [
              "Growth metrics are meaningless without lifecycle context",
              "Most analytics problems are definition + ownership failures, not tooling failures",
              "Pausing instrumentation can unlock more value than adding it",
              "A data PM’s job is to prevent bad decisions from scaling",
            ],
          },
        }}
      />
    </div>
  )
}
