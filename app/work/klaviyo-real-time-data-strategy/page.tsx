import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { SiteNav } from "@/components/site-nav"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Klaviyo | Evolving the Event Data Platform",
  description:
    "Evolving a high-volume event platform to materially reduce infrastructure cost while preserving the data guarantees customers depend on.",
  pathname: "/work/klaviyo-real-time-data-strategy",
  ogImagePath: "/work/klaviyo-real-time-data-strategy/opengraph-image.png",
  ogImageAlt: "Klaviyo",
  type: "article",
})

export default function KlaviyoRealTimeDataStrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PreserveScroll />

      {/* Navigation */}
      <SiteNav active="work" />

      <ProjectDetailLayout
        title="Klaviyo: Evolving the Event Data Platform"
        subline="Evolving a high-volume event platform to materially reduce infrastructure cost while preserving the data guarantees customers depend on."
        tags={["Event Infrastructure", "Real-Time Data", "APIs & SLOs", "Platform Economics", "Rollout Strategy"]}
        artifacts={{ projectHref: "/work/klaviyo-real-time-data-strategy", projectLabel: "Klaviyo" }}
        heroImage={{
          src: "/klaviyo-events-ecosystem.jpg",
          alt: "The events ecosystem: upstream data sources feed the events platform, which serves downstream products",
          fit: "contain",
          background: "#0a1424",
        }}
        row1={{
          challenge: {
            heading: "Challenge",
            bullets: [
              "One event platform powers many customer workflows.",
              "Those workflows need different history, latency, and freshness.",
              "Growing data volume made those guarantees increasingly expensive.",
              "The challenge: reduce cost without weakening customer value or differentiation.",
            ],
          },
          role: {
            heading: "Role",
            bullets: [
              "Owned product strategy for the Events platform.",
              "Defined customer-facing data guarantees and product requirements.",
              "Led cross-functional decisions across Product, Engineering, GTM, and Customer Success.",
            ],
          },
        }}
        row2={{
          left: [
            {
              title: "Defined the platform contract",
              description:
                "Shifted the question from “how long should we retain data?” to “what must the platform guarantee?”",
            },
            {
              title: "Validated customer needs",
              description:
                "Used customer research, usage patterns, and competitive context to understand required history, latency, freshness, and throughput.",
            },
            {
              title: "Matched architecture to customer value",
              description:
                "Separated workloads requiring low-latency access from those that could use alternative serving paths.",
            },
          ],
          right: [
            {
              title: "Connected cost to value",
              description:
                "Compared infrastructure burden with customer and business value to identify where differentiated access made sense.",
            },
            {
              title: "Decomposed the strategy",
              description:
                "Started with a lower-impact event class to capture savings while preserving optionality on broader changes.",
            },
            {
              title: "Designed for safe rollout",
              description:
                "Used staged cohorts, evidence gates, rollback criteria, communications, and special handling for strategic accounts.",
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcomes so far",
            bullets: [
              {
                label: "High-six-figure savings path",
                description:
                  "Initiated the first phase of a strategy targeting high-six-figure annual infrastructure savings.",
              },
              {
                label: "Clearer platform guarantees",
                description: "Defined history, latency, freshness, completeness, and throughput by workload.",
              },
              {
                label: "Lower-risk execution",
                description: "Turned a broad platform change into staged, reversible releases.",
              },
              {
                label: "Future monetization foundation",
                description: "Connected data access and infrastructure economics to pricing and packaging.",
              },
            ],
          },
          learnings: {
            heading: "How I make the tradeoff",
            flow: "Customer value → Product guarantee → Architecture → Economics → Packaging → Reversibility",
          },
        }}
      />
    </div>
  )
}
