import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { SiteNav } from "@/components/site-nav"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Klaviyo | Evolving the Event Data Platform",
  description:
    "Defining what the event platform must guarantee as data volume, infrastructure cost, and downstream product requirements diverge.",
  pathname: "/selected-work/klaviyo-event-data-platform",
  ogImagePath: "/selected-work/klaviyo-event-data-platform/opengraph-image.png",
  ogImageAlt: "Klaviyo event data platform",
  type: "article",
})

export default function KlaviyoEventDataPlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <PreserveScroll />
      <SiteNav active="selected-work" />

      <ProjectDetailLayout
        title="Klaviyo: Evolving the Event Data Platform"
        subline="Defining what the event platform must guarantee as data volume, infrastructure cost, and downstream product requirements diverge."
        tags={["Event infrastructure", "Real-time data", "Platform strategy", "Cost × customer value"]}
        heroImage={{
          src: "/placeholder.jpg",
          alt: "Klaviyo event data platform (hero image TBD)",
        }}
        row1={{
          challenge: {
            heading: "Problem / business context",
            bullets: [
              "As event volume and infrastructure cost scaled, downstream products needed clearer guarantees from the event platform.",
              "Serving, storage, APIs, freshness expectations, and customer experience requirements increasingly diverged.",
              "Placeholder: flesh out the business pressure, constraints, and why this became a product problem—not only an infra policy.",
            ],
          },
          role: {
            heading: "What I owned",
            bullets: [
              "Product strategy for the event data platform across serving, storage, APIs, SLOs, customer impact, and rollout guardrails.",
              "Defining the product contract: what the platform must guarantee, where it can flex, and which trade-offs create leverage.",
              "Placeholder: clarify scope, partners, and decision rights.",
            ],
          },
        }}
        row2={{
          throughline: "platform contract → access patterns → cost × value → rollout risk",
          left: [
            {
              title: "Reframed retention as a platform contract problem",
              description:
                "The question was not only how long to keep data—it was what each downstream product could rely on from the event platform.",
              bullets: [
                "Ingestion, storage, and serving as one product surface",
                "Hot vs. cold access patterns",
                "Placeholder: key decision and why it mattered",
              ],
            },
            {
              title: "Defined guarantees vs. flexible surfaces",
              description:
                "Separated non-negotiable platform promises (latency/freshness, correctness, availability) from areas where the system could flex under cost pressure.",
              bullets: ["SLOs and customer-facing expectations", "Placeholder: concrete trade-off"],
            },
          ],
          right: [
            {
              title: "Aligned cost with customer and product value",
              description:
                "Tied infrastructure spend to downstream product requirements so cost decisions stayed grounded in customer impact.",
              bullets: ["Placeholder: decision framework used", "Placeholder: stakeholders aligned"],
            },
            {
              title: "Set rollout guardrails for architectural change",
              description:
                "Treated migration and policy change as product rollouts—with risk, sequencing, and fallback explicit up front.",
              bullets: ["Placeholder: phased approach", "Placeholder: risk mitigated"],
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcome / business impact",
            bullets: [
              "Placeholder: measurable impact on cost, reliability, or product enablement.",
              "Placeholder: what became clearer for downstream teams.",
              "Placeholder: what the platform now guarantees.",
            ],
          },
          learnings: {
            heading: "Risks / learnings",
            bullets: [
              "Placeholder: where assumptions broke.",
              "Placeholder: what you would decide differently.",
              "Placeholder: implications for future platform product work.",
            ],
          },
        }}
      />
    </div>
  )
}
