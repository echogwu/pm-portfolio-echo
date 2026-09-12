import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { SiteNav } from "@/components/site-nav"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Klaviyo | Evolving the Event Data Platform",
  description:
    "Product strategy across serving, storage, APIs, SLOs, customer impact, and rollout guardrails.",
  pathname: "/journey/klaviyo-real-time-data-strategy",
  ogImagePath: "/journey/klaviyo-real-time-data-strategy/opengraph-image.png",
  ogImageAlt: "Klaviyo event data platform",
  type: "article",
})

export default function KlaviyoRealTimeDataStrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PreserveScroll />
      <SiteNav active="journey" />

      <ProjectDetailLayout
        title="Klaviyo: Evolving the Event Data Platform"
        subline="Product strategy across serving, storage, APIs, SLOs, customer impact, and rollout guardrails."
        tags={["Event infrastructure", "Real-time data", "Platform strategy", "Cost × customer value"]}
        heroImage={{
          src: "/placeholder.jpg",
          alt: "Klaviyo event data platform (placeholder)",
        }}
        row1={{
          challenge: {
            heading: "Problem / business context",
            bullets: [
              "Placeholder: business pressure as event volume, infrastructure cost, and downstream product needs diverged.",
              "Placeholder: why this became a product-contract problem for the event platform—not only a storage policy.",
            ],
          },
          role: {
            heading: "What I owned",
            bullets: [
              "Product strategy across serving, storage, APIs, SLOs, customer impact, and rollout guardrails.",
              "Placeholder: clarify partners, decision rights, and scope.",
            ],
          },
        }}
        row2={{
          throughline: "platform contract → access patterns → cost × value → rollout risk",
          left: [
            {
              title: "Placeholder decision",
              description: "Content TBD — key product decision and why it mattered.",
              bullets: ["Placeholder"],
            },
            {
              title: "Placeholder decision",
              description: "Content TBD — trade-off and leverage created.",
              bullets: ["Placeholder"],
            },
          ],
          right: [
            {
              title: "Placeholder decision",
              description: "Content TBD — how cost and customer value were aligned.",
              bullets: ["Placeholder"],
            },
            {
              title: "Placeholder decision",
              description: "Content TBD — rollout guardrails and risk management.",
              bullets: ["Placeholder"],
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcome / business impact",
            bullets: [
              "Placeholder: measurable impact on cost, reliability, or product enablement.",
              "Placeholder: what the platform now guarantees.",
            ],
          },
          learnings: {
            heading: "Risks / learnings",
            bullets: [
              "Placeholder: where assumptions broke.",
              "Placeholder: implications for future platform product work.",
            ],
          },
        }}
      />
    </div>
  )
}
