import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { SiteNav } from "@/components/site-nav"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Dishclosure | Founder and Product Lead",
  description:
    "An operator-first investigation that revealed the real constraint wasn’t UX or adoption, but broken upstream data lineage.",
  pathname: "/journey/dishclosure-founder-mode",
  ogImagePath: "/journey/dishclosure-founder-mode/opengraph-image.png",
  ogImageAlt: "Dishclosure allergen knowledge graph",
  type: "article",
})

export default function DishclosurePage() {
  return (
    <div className="min-h-screen bg-background">
      <PreserveScroll />

      {/* Navigation */}
      <SiteNav active="journey" />

      <ProjectDetailLayout
        title="Dishclosure: Founder and Product Lead"
        subline="An operator-first investigation that revealed the real constraint wasn’t UX or adoption, but broken upstream data lineage."
        tags={["Zero-to-One", "Data Lineage", "Schema Design", "Ecosystem Diagnosis", "Go/No-Go Decision"]}
        artifacts={{ projectHref: "/journey/dishclosure-founder-mode", projectLabel: "Dishclosure" }}
        heroImage={{
          src: "/dishclosure.gif",
          alt: "Dishclosure allergen knowledge graph",
        }}
        row1={{
          challenge: {
            heading: "Challenge",
            bullets: [
              "Food allergy mistakes carry medical, financial, and legal consequences",
              "Restaurants face workflow overhead and liability if allergen info is wrong or incomplete",
              "Allergen data is fragmented across suppliers, inventory systems, recipes, and menus",
              "No reliable end-to-end source of truth → any diner-facing UX risks being untrustworthy",
              "Build trust as infrastructure, not as messaging",
            ],
          },
          role: {
            heading: "Role",
            bullets: [
              "Founder and Product Lead (end-to-end ownership)",
              "Market research and ecosystem analysis across supplier → operator → platform → diner",
              "Designed the data model and operator workflow (schema enforcement)",
              "Prototyped and validated product concepts on both operator and diner sides",
              "Made the go/no-go call based on safety and infrastructure constraints",
            ],
          },
        }}
        row2={{
          throughline:
            "systems investigation → source-of-truth analysis → schema enforcement → ecosystem constraint discovery → stop decision",
          left: [
            {
              title: "Anchored on safety and trust",
              description:
                "Rejected probabilistic inference/crowdsourcing/“AI labeling” without authoritative data — trust had to be engineered.",
              bullets: ["A 1% error rate is unacceptable in high-stakes contexts"],
            },
            {
              title: "Started with operators (not diners)",
              description:
                "Focused on where allergen information is created and maintained, designing for existing restaurant workflows and constraints.",
              bullets: ["Fit into POS/inventory/recipe/menu stacks", "Segmented operators by adoption and motivation"],
            },
            {
              title: "Designed the data model to surface reality",
              description:
                "Built a structured schema connecting ingredients → packaged goods → recipes → menu items to make ambiguity visible.",
              bullets: ["Normalized inputs via an operator portal", "Discovered supplier-level data inconsistency as a blocker"],
            },
          ],
          right: [
            {
              title: "Traced the ecosystem end-to-end",
              description:
                "Mapped supplier → operator → platform → diner flows and prototyped integrations to find where contracts broke.",
              bullets: ["Constraint was upstream infrastructure outside a startup’s control"],
            },
            {
              title: "Made the call to stop",
              description:
                "Chose to pause rather than ship an unsafe or misleading product given missing supplier-level standardization.",
              bullets: ["Built MVPs and secured pilot interest, but reliability required ecosystem change"],
            },
          ],
        }}
        row3={{
          outcomes: {
            heading: "Outcomes",
            bullets: [
              "Validated the true constraint: broken upstream data lineage, not diner UX",
              "Produced a structured allergen schema + operator workflow prototype to test feasibility",
              "Mapped ecosystem contracts and identified where data reliability collapses",
              "Made a principled stop decision to avoid scaling on unsafe inputs",
            ],
          },
          learnings: {
            heading: "Learnings",
            bullets: [
              "High-stakes consumer problems demand infrastructure-level solutions",
              "Trust is an ecosystem property, not a UI feature",
              "Operators don’t resist solutions; they resist risk and overhead",
              "Knowing when to stop is part of the job",
            ],
          },
        }}
      />
    </div>
  )
}


