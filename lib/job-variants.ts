import { CASE_STUDIES, mergeCaseStudy, type CaseStudyContent, type CaseStudyOverride, type CaseStudySlug } from "@/lib/case-studies"
import { DEFAULT_HOME, type HomeData } from "@/lib/home-data"
import { isReservedJobId } from "@/lib/paths"
import { DEFAULT_WORK, type WorkData } from "@/lib/work-data"

/**
 * A tailored copy of the portfolio for one job application, served at
 * `/<id>`. Every field is optional: anything omitted falls back to the
 * canonical content, so a variant only states what it actually changes.
 *
 * These pages are public static HTML on the same domain. They are noindexed,
 * but anyone who guesses an id can read it — prefer opaque ids over company
 * names, and delete a variant once the application closes.
 */
export type JobVariant = {
  id: string
  /** Internal note for you; never rendered. */
  note?: string
  home?: Partial<HomeData>
  work?: Partial<WorkData>
  caseStudies?: Partial<Record<CaseStudySlug, CaseStudyOverride>>
}

export const JOB_VARIANTS: readonly JobVariant[] = [
  {
    id: "a7f3c2",
    note: "Example variant — streaming/data-activation platform role.",
    home: {
      headline: "Product lead, streaming data infrastructure",
      subhead:
        "I decide what event platforms must guarantee — then match serving architecture and cost to those guarantees.",
    },
    work: {
      intro:
        "Seven roles, one throughline: deciding what data systems must guarantee, then making the architecture and economics follow.",
    },
    caseStudies: {
      "klaviyo-real-time-data-strategy": {
        layout: {
          subline: "Reframed for a role where data activation and platform economics sit in the same decision.",
        },
      },
    },
  },
  {
    id: "ljqme6",
    note: "Tremendous, special projects — technical product leadership framing rather than data-platform PM.",
    home: {
      meta: {
        title: "Echo Paulus | Technical Product Leader",
        description:
          "Technical product leader combining customer research, business analysis, and engineering depth to turn ambiguous opportunities into clear product and investment decisions.",
      },
      eyebrow: "Product strategy · Data platforms · Zero-to-one",
      headline: "Technical Product Leader",
      subhead:
        "I turn ambiguous opportunities into clear product and investment decisions by combining customer research, business analysis, and technical depth.",
      supporting:
        "My work spans data platforms, internal tools, and zero-to-one products where the right answer may be to build, sequence, redesign, or stop.",
      secondaryCta: {
        label: "View resume",
        // /preview rather than /edit: read-only, and keeps the account ouid out of the page.
        href: "https://docs.google.com/document/d/1C_CWiI04BhbqndfwnNRW6J8NLtvylQZg/preview",
      },
      profileTagline: "Technical Product Leader",
      featured: {
        heading: "Featured Projects",
        intro:
          "Three examples of turning incomplete information into a product strategy, build plan, or investment decision.",
      },
      // Dishclosure leads as the flagship case study.
      featuredProjects: [
        {
          title: "Dishclosure: Founder and Product Lead",
          description:
            "Took a high-stakes consumer opportunity from market thesis through customer research, competitive analysis, MVP development, pilot validation, and an evidence-based decision to stop.",
          outcome:
            "Validated demand and secured pilot interest, then stopped after identifying safety, liability, data-maintenance, and ecosystem constraints that weakened the investment case.",
          href: "/work/dishclosure-founder-mode",
          imageSrc: "/dishclosure.gif",
          imageAlt: "Dishclosure project",
          tags: [
            "Opportunity Sizing",
            "Customer Discovery",
            "Competitive Analysis",
            "Zero-to-One Build",
            "Go or No-Go Decision",
          ],
        },
        {
          title: "Klaviyo: Event Platform Strategy",
          description:
            "Turned infrastructure cost pressure into a phased data-access strategy balancing customer value, platform economics, technical constraints, and long-term differentiation.",
          outcome:
            "The first release targets high six-figure annual savings, followed by retention changes expected to save hundreds of thousands of dollars per month across an experience used by hundreds of thousands of customers.",
          href: "/work/klaviyo-real-time-data-strategy",
          imageSrc: "/klaviyo-logo.jpg",
          imageAlt: "Klaviyo",
          tags: [
            "Platform Strategy",
            "Customer Research",
            "Product Economics",
            "Roadmap Sequencing",
            "Decision Frameworks",
          ],
        },
        {
          title: "Gainbridge: Data and Measurement Strategy",
          description:
            "Elevated data into a first-class product by unifying behavioral and server-side events across the data warehouse, analytics, and marketing activation systems.",
          outcome:
            "Created reliable product and marketing signals, including an attribution application that helped leadership evaluate changes to a multimillion-dollar advertising strategy.",
          href: "/work/gainbridge-data-architecture",
          imageSrc: "/gainbridge.gif",
          imageAlt: "Gainbridge project",
          tags: [
            "Data Product Strategy",
            "Measurement Architecture",
            "Attribution",
            "Technical Specifications",
            "Internal Tooling",
          ],
        },
      ],
      howIWork: {
        heading: "How I Work",
        intro:
          "I reduce ambiguity by making the decision explicit, gathering the evidence that matters, and testing the riskiest assumptions before scaling the investment.",
        steps: [
          {
            title: "Frame the decision",
            copy: "Define the customer, business stakes, constraints, and decision the work must support.",
          },
          {
            title: "Build the evidence",
            copy: "Combine customer research, market analysis, product data, and technical investigation.",
          },
          {
            title: "Test critical assumptions",
            copy: "Use prototypes, specifications, experiments, or phased releases to resolve the highest-risk unknowns.",
          },
          {
            title: "Make the call",
            copy: "Recommend whether to invest, sequence, redesign, hand off, or stop.",
          },
        ],
      },
    },
    work: {
      description:
        "My work has evolved from software engineering to internal platforms to leading complex technical products. Across roles, I combine customer research, business analysis, and technical depth to decide what to build, how to sequence it, and when to stop.",
      // Three parallel trios — career arc, capabilities, decisions — so the
      // underline palette repeats with the sentence structure.
      intro: [
        "My work has evolved from ",
        { text: "software engineering", accent: "lime" },
        " to ",
        { text: "internal platforms", accent: "sky" },
        " to leading complex ",
        { text: "technical products", accent: "emerald" },
        ". Across roles, I combine ",
        { text: "customer research", accent: "amber" },
        ", ",
        { text: "business analysis", accent: "pink" },
        ", and ",
        { text: "technical depth", accent: "violet" },
        " to decide ",
        { text: "what to build", accent: "lime" },
        ", ",
        { text: "how to sequence it", accent: "sky" },
        ", and ",
        { text: "when to stop", accent: "emerald" },
        ".",
      ],
      items: {
        klaviyo: {
          label: "Turning platform economics into product strategy",
          microCaption: "Sequencing data-access changes across customer value, cost, and technical risk",
          tags: [
            "Platform Strategy",
            "Customer Research",
            "Product Economics",
            "Roadmap Sequencing",
            "Change Management",
          ],
        },
        dishclosure: {
          companyRole: "Dishclosure: Founder and Product Lead",
          label: "Testing whether a high-stakes opportunity was investable",
          microCaption: "From market thesis and MVP to an evidence-based stop decision",
          tags: [
            "Opportunity Sizing",
            "Customer Discovery",
            "Competitive Analysis",
            "Zero-to-One Build",
            "Go/No-Go Decision",
          ],
        },
      },
    },
    caseStudies: {
      "dishclosure-founder-mode": {
        meta: {
          description:
            "Took a high-stakes consumer opportunity from market thesis through customer research, competitive analysis, MVP development, pilot validation, and an evidence-based decision to stop.",
        },
        layout: {
          subline:
            "Took a high-stakes consumer opportunity from market thesis through customer research, competitive analysis, MVP development, pilot validation, and an evidence-based decision to stop.",
          tags: [
            "Opportunity Sizing",
            "Customer Discovery",
            "Competitive Analysis",
            "Zero-to-One Build",
            "Go or No-Go Decision",
          ],
          row1: {
            challenge: {
              heading: "Challenge",
              bullets: [
                "Approximately 20 million Americans live with food allergies, creating an estimated $25B in annual medical, productivity, and family costs.",
                "Restaurants face lost demand, operational overhead, and liability when allergen information is incomplete or inaccurate.",
                "Digital ordering reduces the staff interaction customers traditionally rely on to verify ingredients.",
                "The initial opportunity was to determine whether a trusted consumer and restaurant platform could improve discovery, ordering, and allergen disclosure.",
                "The central question was whether the problem could be solved by a startup or required upstream ecosystem change.",
              ],
            },
            role: {
              heading: "Role",
              // Scope of ownership only. The activities and their numbers live in
              // Approach & Decisions and Outcomes, so they are not repeated here.
              bullets: [
                "Founder and Product Lead with end-to-end responsibility for opportunity evaluation, product strategy, and technical execution.",
                "Hands-on across customer research, product design, data modeling, and backend engineering.",
                "Owned both sides of a two-sided product: the restaurant operator portal and the diner experience.",
                "Held the go/no-go authority on whether to keep investing.",
              ],
            },
          },
          row2: {
            // The default throughline frames data lineage as the premise; here it was the finding.
            throughline: undefined,
            left: [
              {
                title: "Formed and sized the opportunity thesis",
                description:
                  "Evaluated the scale of the food-allergy problem, restaurant economics, digital-ordering trends, and potential business models. The initial hypothesis was that better allergen information could unlock safer dining and incremental restaurant demand.",
                bullets: [
                  "Approximately 20 million potential US users",
                  "Estimated $25B annual economic burden",
                  "Consumer, restaurant, grocery, platform, and healthcare models assessed",
                ],
              },
              {
                title: "Tested the market from both sides",
                description:
                  "Interviewed consumers and restaurant operators, conducted field research, and analyzed 14+ competitors and adjacent products. The research confirmed meaningful demand while exposing acquisition, maintenance, liability, and integration constraints.",
                bullets: [
                  "10 consumer interviews",
                  "15 restaurant-operator interviews",
                  "50 field visits",
                  "14+ competitors and adjacent products mapped",
                ],
              },
            ],
            right: [
              {
                title: "Built to test feasibility",
                description:
                  "Converted the findings into product and technical specifications, then built a multi-tenant MVP spanning an operator portal, diner experience, structured allergen model, and backend API. Used the prototype to test workflow fit, data availability, and pilot interest.",
                bullets: [
                  "Operator portal and diner application",
                  "Structured ingredient, recipe, and menu-item model",
                  "50+ backend API endpoints",
                  "Pilot interest from three restaurants",
                ],
              },
              {
                title: "Made the investment decision",
                description:
                  "The MVP generated pilot interest, but reliable execution depended on supplier-level ingredient standardization and ongoing data maintenance outside the startup’s control. I stopped rather than scale a product whose core safety promise could not be supported consistently.",
                bullets: [
                  "Supplier-level data inconsistency",
                  "High ongoing maintenance burden",
                  "Safety and liability exposure",
                  "Fragmented restaurant technology ecosystem",
                ],
              },
            ],
          },
          row3: {
            outcomes: {
              heading: "Outcomes",
              bullets: [
                "Validated demand through 25 stakeholder interviews, 50 field visits, and pilot interest from three restaurants.",
                "Produced a working multi-tenant MVP with operator and diner applications and more than 50 backend API endpoints.",
                "Identified supplier-level data quality, maintenance burden, liability, and fragmented restaurant systems as structural constraints.",
                "Determined that the opportunity was not investable under current ecosystem conditions and stopped before committing further resources.",
                "Preserved the research, specifications, schema, prototype, and market analysis as build-ready evidence should the ecosystem change.",
              ],
            },
            learnings: {
              heading: "Learnings",
              bullets: [
                "Product demand does not make an opportunity investable when the operating model cannot support the promise.",
                "High-stakes consumer products require authoritative inputs, clear ownership, and reliable maintenance workflows.",
                "Building far enough to test feasibility can expose constraints that interviews and market research cannot.",
                "A well-supported stop decision is a product outcome, not a failure to ship.",
              ],
            },
          },
          artifacts: {
            projectHref: "/work/dishclosure-founder-mode",
            projectLabel: "Dishclosure",
            items: [
              {
                // This deck covers the competitive landscape too, so the two are one artifact.
                id: "dishclosure-product-strategy",
                subline:
                  "Market sizing, business-model options, and a comparison of 14+ competitors and adjacent products.",
              },
              {
                id: "dishclosure-ux-prototype",
                subline: "Operator and diner workflows used to test input, validation, discovery, and filtering.",
              },
              {
                id: "dishclosure-technical-design",
                subline:
                  "System boundaries, integration assumptions, reliability requirements, and technical tradeoffs.",
              },
              {
                id: "dishclosure-data-erd",
                headline: "Data Entity Relationship Diagram",
                subline:
                  "Entity relationships connecting ingredients, packaged goods, recipes, menu items, and dietary profiles.",
              },
              {
                id: "dishclosure-legal-doc",
                subline: "Pilot scope, operating responsibilities, liability considerations, and policy constraints.",
              },
            ],
          },
        },
      },
      "klaviyo-real-time-data-strategy": {
        meta: {
          title: "Klaviyo | Turning Platform Economics into Product Strategy",
          description:
            "Turned an infrastructure cost mandate into a phased data-access strategy—balancing customer value, platform differentiation, technical risk, and savings at increasing scale.",
        },
        layout: {
          title: "Klaviyo: Turning Platform Economics into Product Strategy",
          subline:
            "Turned an infrastructure cost mandate into a phased data-access strategy—balancing customer value, platform differentiation, technical risk, and savings at increasing scale.",
          tags: [
            "Platform Strategy",
            "Customer Research",
            "Product Economics",
            "Roadmap Sequencing",
            "Change Management",
          ],
          row1: {
            challenge: {
              heading: "Challenge",
              bullets: [
                "One event platform supports customer experiences with very different requirements for history, latency, freshness, and throughput.",
                "Rapid data growth created substantial infrastructure costs, but reducing retention could disrupt workflows across the product.",
                "Long-term data access was also part of the company’s customer promise and competitive positioning.",
                "The decision extended beyond storage: what access should remain standard, what required a different architecture, and what could eventually become a paid capability?",
                "The challenge was to reduce cost without treating every event, workload, or customer as interchangeable.",
              ],
            },
            role: {
              heading: "Role",
              // Scope and accountability only; the actions live in Approach & Decisions.
              bullets: [
                "Senior Product Manager for the Events platform.",
                "Product owner for event ingestion, storage, and retrieval experiences.",
                "Accountable for the platform’s product strategy, customer-facing guarantees, and roadmap priorities.",
                "Product lead coordinating decisions across Engineering, adjacent product teams, Marketing, and Customer Success.",
              ],
            },
          },
          // Six items read down the left column, then down the right.
          row2: {
            left: [
              {
                title: "Reframed the mandate",
                description:
                  "Turned a cost-reduction request into a broader product, architecture, and monetization decision. Shifted the question from “How long should we retain data?” to “What access must the product guarantee—and for which customer workflows?”",
              },
              {
                title: "Built the evidence",
                description:
                  "Combined customer interviews, product usage, competitive research, downstream requirements, and infrastructure economics to distinguish essential access from costly historical availability.",
              },
              {
                title: "Defined a phased strategy",
                description:
                  "Separated the opportunity into sequenced decisions: begin with a lower-impact event class, then address broader hot-storage retention, cross-product consistency, cold retrieval, and future monetization.",
              },
            ],
            right: [
              {
                title: "Matched access to value",
                description:
                  "Distinguished workloads requiring immediate access from those that could use alternative serving paths, preserving critical customer outcomes without applying the most expensive guarantee universally.",
              },
              {
                title: "Aligned the organization",
                description:
                  "Established shared requirements and decision points across Engineering, adjacent product teams, Marketing, and Customer Success before moving from strategy into customer-facing change.",
              },
              {
                title: "Designed for reversible learning",
                description:
                  "Created staged cohorts, evidence gates, rollback criteria, customer communications, and special handling for strategically important accounts before expanding exposure.",
              },
            ],
          },
          row3: {
            outcomes: {
              heading: "Outcomes so far",
              bullets: [
                {
                  label: "Near-term savings underway",
                  description:
                    "Initiated the first rollout in a broader strategy, targeting high-six-figure annual infrastructure savings from a lower-impact event class.",
                },
                {
                  label: "Larger strategic decision defined",
                  description:
                    "Structured subsequent retention changes expected to save hundreds of thousands of dollars per month while reshaping data access across the product for hundreds of thousands of customers.",
                },
                {
                  label: "Execution risk reduced",
                  description:
                    "Turned a broad, irreversible platform change into sequenced releases with measurable evidence, rollback paths, customer communication, and explicit decision gates.",
                },
                {
                  label: "Future business model enabled",
                  description:
                    "Connected data-access guarantees and infrastructure economics to future pricing, packaging, and differentiated retention options.",
                },
              ],
            },
            learnings: {
              heading: "How I structure the decision",
              flow: "Customer workflow → Product guarantee → Serving model → Economics → Packaging → Rollout evidence",
            },
          },
          // Titles, order, and destinations come from the catalog; descriptions only here.
          artifacts: {
            projectHref: "/work/klaviyo-real-time-data-strategy",
            projectLabel: "Klaviyo",
            items: [
              {
                id: "klaviyo-data-access-decision-gates",
                subline:
                  "How customer access requirements translate into product guarantees and serving decisions.",
              },
              {
                id: "klaviyo-cost-to-value-segmentation",
                subline:
                  "How customer value and infrastructure burden inform investment, service, and monetization decisions.",
              },
              {
                id: "klaviyo-rollout-and-evidence-plan",
                subline:
                  "How representative cohorts, evidence gates, rollback criteria, and communication reduce the risk of consequential platform changes.",
              },
            ],
          },
        },
      },
    },
  },
]

const BY_ID = new Map(JOB_VARIANTS.map((variant) => [variant.id, variant]))

export const JOB_IDS = JOB_VARIANTS.map((variant) => variant.id)

export function getJobVariant(id: string): JobVariant | undefined {
  return BY_ID.get(id)
}

export function resolveHome(jobId?: string): HomeData {
  const variant = jobId ? getJobVariant(jobId) : undefined
  return { ...DEFAULT_HOME, ...variant?.home }
}

export function resolveWork(jobId?: string): WorkData {
  const variant = jobId ? getJobVariant(jobId) : undefined
  return { ...DEFAULT_WORK, ...variant?.work }
}

export function resolveCaseStudy(slug: CaseStudySlug, jobId?: string): CaseStudyContent {
  const base = CASE_STUDIES[slug]
  const variant = jobId ? getJobVariant(jobId) : undefined
  return mergeCaseStudy(base, variant?.caseStudies?.[slug])
}

/**
 * Guards against an id that would be shadowed by an existing root route, or
 * duplicated. Called from `generateStaticParams` so the build fails loudly
 * rather than silently serving the wrong page.
 */
export function assertValidJobIds() {
  const seen = new Set<string>()
  for (const { id } of JOB_VARIANTS) {
    if (isReservedJobId(id)) {
      throw new Error(`Job variant id "${id}" collides with an existing route and would never be reachable.`)
    }
    if (!/^[a-z0-9][a-z0-9-]*$/.test(id)) {
      throw new Error(`Job variant id "${id}" must be lowercase alphanumeric with dashes.`)
    }
    if (seen.has(id)) {
      throw new Error(`Duplicate job variant id "${id}".`)
    }
    seen.add(id)
  }
}
