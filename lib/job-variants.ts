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
          title: "Klaviyo: Events Platform Strategy",
          description:
            "Evolved events infrastructure from a cost center into a growth lever",
          outcome:
            "Initiated rollout targeting high six-figure near-term infrastructure savings, with a path to multi-million-dollar annual savings at full scale. Create full customer journey from anonymous activity to conversion, enabling onsite personalization, more efficient acquisition, and higher-quality ML training data.",
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
  {
    id: "01a155",
    note: "API product manager role. Homepage, work index, and the Klaviyo, Dishclosure, and Lyft case studies.",
    home: {
      headline: "API & Platform Product Leader",
      subhead:
        "I build API platforms and developer tools that turn complex systems into reliable, usable products—connecting developer needs, technical architecture, and business outcomes.",
      profileTagline: "Product Lead, APIs & Developer Platforms",
      featuredProjects: [
        {
          title: "Klaviyo: API Strategy at Enterprise Scale",
          description:
            "Shaping API capabilities, data access strategies, and developer-facing experiences while balancing platform reliability, customer needs, and infrastructure economics.",
          href: "/work/klaviyo-real-time-data-strategy",
          imageSrc: "/klaviyo-logo.jpg",
          imageAlt: "Klaviyo",
          tags: ["API Strategy", "Developer Experience", "Data Access", "Platform Economics"],
        },
        {
          title: "Dishclosure: Building a Multi-Tenant API Platform from 0→1",
          description:
            "Designed and built 50+ API endpoints with multi-tenant isolation, authentication, and role-based access—turning complex restaurant workflows into reliable, structured data for consumer applications.",
          href: "/work/dishclosure-founder-mode",
          imageSrc: "/dishclosure.gif",
          imageAlt: "Dishclosure project",
          tags: ["API Product Design", "Multi-Tenant Architecture", "Developer Experience", "0→1 Product"],
        },
        {
          title: "Lyft: Driving Developer Platform Adoption",
          description:
            "Led an internal simulation platform, translating developer workflows and feedback into product improvements that increased adoption and reliability by 10%, reduced support demand by 30%, and saved $150K quarterly.",
          href: "/work/lyft-developer-experience-pm",
          imageSrc: "/lyft.gif",
          imageAlt: "Lyft project",
          tags: ["Developer Experience", "Platform Adoption", "Product Strategy", "Developer Tools"],
        },
        {
          title: "Gainbridge: Product Manager, Data and Measurement",
          description: "Built the instrumentation layer that made performance trustworthy — before optimization.",
          href: "/work/gainbridge-data-architecture",
          imageSrc: "/gainbridge.gif",
          imageAlt: "Gainbridge project",
          tags: [
            "Data Architecture",
            "Measurement Strategy",
            "Event Taxonomy",
            "Identity Resolution",
            "Attribution Systems",
          ],
        },
      ],
    },
    work: {
      description:
        "My career has evolved from engineering, to developer experience, to API and platform product leadership.",
      intro: [
        "My career has evolved from ",
        { text: "engineering", accent: "lime" },
        ", to ",
        { text: "developer experience", accent: "sky" },
        ", to ",
        { text: "API and platform product leadership", accent: "emerald" },
        ". Along the way, I've designed APIs, built developer tools, and led complex data platform decisions. Today, I bring together ",
        { text: "developer needs", accent: "amber" },
        ", ",
        { text: "technical architecture", accent: "pink" },
        ", and ",
        { text: "business strategy", accent: "violet" },
        " to build platforms that are reliable, usable, and valuable.",
      ],
      items: {
        klaviyo: {
          label: "Defining API Strategy at Scale",
          microCaption:
            "Driving API governance, data access strategy, and developer-facing change management while balancing customer experience and platform economics.",
          tags: ["API Strategy", "API Governance", "Developer Experience", "Data Serving", "Platform Economics"],
        },
        dishclosure: {
          label: "Building an API Platform from 0→1",
          microCaption:
            "Designed 50+ endpoints with multi-tenant isolation, role-based access, and operator-first data models to power secure, trustworthy consumer experiences.",
          tags: [
            "API Product Design",
            "Multi-Tenant Architecture",
            "Authentication & RBAC",
            "Operator Experience",
            "Zero-to-One",
          ],
        },
        gainbridge: {
          label: "Connecting Data, APIs, and Business Decisions",
          microCaption:
            "Unified customer data and third-party integrations to power reliable attribution, personalization, and multimillion-dollar marketing decisions.",
          tags: ["API Integrations", "Data Architecture", "Event Taxonomy", "Attribution", "Business Decisioning"],
        },
        lyft: {
          label: "Driving Developer Platform Adoption",
          microCaption:
            "Improved internal developer tooling, increasing adoption and reliability by 10%, reducing support demand by 30%, and saving $150K quarterly.",
          tags: ["Developer Experience", "Platform Adoption", "Internal Tools", "Simulation", "Developer Productivity"],
        },
        engineering: {
          label: "Building an Engineering Foundation for Platform Products",
          microCaption:
            "Developing expertise in APIs, distributed systems, reliability, and automation across large-scale software platforms.",
        },
      },
    },
    caseStudies: {
      "klaviyo-real-time-data-strategy": {
        meta: {
          title: "Klaviyo | Evolving an Enterprise Event & API Platform",
          description:
            "Defining API capabilities, data access guarantees, and rollout strategies that balance customer experience, platform reliability, and infrastructure economics.",
        },
        layout: {
          title: "Klaviyo: Evolving an Enterprise Event & API Platform",
          subline:
            "Defining API capabilities, data access guarantees, and rollout strategies that balance customer experience, platform reliability, and infrastructure economics.",
          tags: ["API Strategy", "API Governance", "Data Access", "Platform Economics", "Change Management"],
          row1: {
            challenge: {
              heading: "Challenge",
              bullets: [
                "One event platform serves internal products, customer integrations, and external APIs.",
                "Different consumers require different guarantees for schema, history, latency, freshness, and completeness.",
                "Growing data volume and evolving API needs introduced competing demands for flexibility, reliability, and cost.",
                "The challenge: evolve platform capabilities and economics without breaking customer workflows or developer trust.",
              ],
            },
            role: {
              heading: "Role",
              bullets: [
                "Owned product strategy for event ingestion, storage, and serving.",
                "Defined API capabilities, data access requirements, and customer-facing platform guarantees.",
                "Drove tradeoffs across developer flexibility, backward compatibility, reliability, and infrastructure economics.",
                "Coordinated Engineering, adjacent Product teams, Marketing, and Customer Success on platform changes.",
              ],
            },
          },
          row2: {
            left: [
              {
                title: "Defined API and data access contracts",
                description:
                  "Translated customer workflows into requirements for history, latency, freshness, completeness, throughput, and API compatibility.",
              },
              {
                title: "Balanced API flexibility with governance",
                description:
                  "Evaluated partner demand for creating event types without payloads. Weighed developer convenience against event proliferation and schema drift, favoring a lightweight endpoint to test adoption before broader governance investment.",
              },
              {
                title: "Matched access patterns to customer needs",
                description:
                  "Evaluated synchronous APIs, asynchronous exports, and warehouse sync against workload requirements to distinguish low-latency access from cost-efficient historical retrieval.",
              },
            ],
            right: [
              {
                title: "Connected platform economics to product value",
                description:
                  "Compared infrastructure cost, customer usage, and strategic account needs to inform differentiated access and future pricing and packaging decisions.",
              },
              {
                title: "Decomposed change to protect compatibility",
                description:
                  "Isolated a lower-impact event class for the initial cost-reduction rollout, preserving higher-value workflows while validating the broader strategy.",
              },
              {
                title: "Designed customer-centered rollout and monitoring",
                description:
                  "Defined representative cohorts, evidence gates, rollback criteria, proactive communications, support workflows, and API-related ticket monitoring to identify customer friction early.",
              },
            ],
          },
          row3: {
            outcomes: {
              heading: "Outcomes so far",
              bullets: [
                {
                  label: "$624K–$960K annual savings opportunity",
                  description:
                    "Initiated a targeted event-removal rollout with projected annual infrastructure savings in this range.",
                },
                {
                  label: "Defined API and data access requirements",
                  description:
                    "Established workload-specific requirements across history, latency, freshness, completeness, throughput, and compatibility.",
                },
                {
                  label: "Reduced change risk",
                  description:
                    "Designed reversible cohorts, monitoring, customer communications, and escalation paths before broader rollout.",
                },
                {
                  label: "Informed future platform investment",
                  description:
                    "Connected API capabilities, customer access patterns, and infrastructure economics to prioritization and packaging decisions.",
                },
              ],
            },
            learnings: {
              heading: "How I make the tradeoff",
              flow: "Developer & customer needs → API contract → Architecture → Economics → Compatibility → Rollout",
            },
          },
          artifacts: {
            projectHref: "/work/klaviyo-real-time-data-strategy",
            projectLabel: "Klaviyo",
            items: [
              { id: "klaviyo-data-access-decision-gates", headline: "API & Data Access Decision Gates" },
              { id: "klaviyo-cost-to-value-segmentation" },
              { id: "klaviyo-rollout-and-evidence-plan" },
            ],
          },
        },
      },
      "dishclosure-founder-mode": {
        meta: {
          title: "Dishclosure | Building a Multi-Tenant API Platform from 0→1",
          description:
            "Turning fragmented restaurant data into structured, trustworthy APIs—while testing whether the underlying customer problem justified building a business.",
        },
        layout: {
          title: "Dishclosure: Building a Multi-Tenant API Platform from 0→1",
          subline:
            "Turning fragmented restaurant data into structured, trustworthy APIs—while testing whether the underlying customer problem justified building a business.",
          tags: ["0→1 Product", "API Architecture", "Multi-Tenant Platform", "Data Integrity", "Customer Discovery"],
          row1: {
            challenge: {
              heading: "Challenge",
              bullets: [
                "Diners with dietary restrictions need reliable ingredient and allergen information.",
                "Restaurants manage that information across fragmented menus, recipes, modifiers, and operational workflows.",
                "Existing systems were not designed to consistently expose the ingredient-level data required for trustworthy consumer experiences.",
                "The challenge: design a scalable data foundation while validating whether restaurants would adopt and maintain it.",
              ],
            },
            role: {
              heading: "Role",
              bullets: [
                "Founded the venture and owned product discovery, technical architecture, and go-to-market exploration.",
                "Conducted 10 consumer interviews, 15 operator interviews, and 50 field visits.",
                "Designed and built a multi-tenant application with 50+ API endpoints.",
                "Led product prioritization and the evidence-based decision on whether to continue investing.",
              ],
            },
          },
          row2: {
            throughline: undefined,
            left: [
              {
                title: "Started with the data integrity problem",
                description:
                  "Mapped how ingredients, recipes, modifiers, and menu items relate, identifying where incomplete or inconsistent information could undermine consumer trust.",
              },
              {
                title: "Designed operator-first data models",
                description:
                  "Structured APIs around restaurant workflows rather than consumer-facing screens alone, with allergen propagation, validation, and explicit unknown states.",
              },
              {
                title: "Built a multi-tenant API foundation",
                description:
                  "Implemented 50+ endpoints with tenant isolation, authentication, role-based access, and scoped operator and diner workflows.",
              },
            ],
            right: [
              {
                title: "Evaluated ecosystem integration",
                description:
                  "Explored how existing restaurant systems could supply or maintain data, distinguishing feasible integrations from unresolved dependencies and operational gaps.",
              },
              {
                title: "Validated willingness to adopt",
                description:
                  "Combined consumer interviews, restaurant-operator discovery, and field visits to test the problem, workflow burden, and potential adoption barriers.",
              },
              {
                title: "Made the go/no-go decision",
                description:
                  "Weighed technical feasibility against data-maintenance costs, restaurant incentives, and evidence of demand; chose to pause rather than scale an unproven model.",
              },
            ],
          },
          row3: {
            outcomes: {
              heading: "Outcomes",
              bullets: [
                {
                  label: "Built the technical foundation",
                  description:
                    "Designed and implemented a multi-tenant application with 50+ API endpoints and scoped access controls.",
                },
                {
                  label: "Established a trustworthy data model",
                  description:
                    "Connected ingredients, recipes, modifiers, and menus with validation and explicit handling of unknown information.",
                },
                {
                  label: "Generated market evidence",
                  description:
                    "Completed 10 consumer interviews, 15 operator interviews, and 50 field visits; identified three restaurants interested in potential pilots.",
                },
                {
                  label: "Exercised founder-level judgment",
                  description:
                    "Paused further investment when evidence did not yet support a repeatable, scalable business.",
                },
              ],
            },
            learnings: {
              heading: "How I make the tradeoff",
              flow: "User trust → Data requirements → API design → Operator workflow → Adoption economics → Go/No-Go",
            },
          },
          artifacts: {
            projectHref: "/work/dishclosure-founder-mode",
            projectLabel: "Dishclosure",
            items: [
              { id: "dishclosure-technical-design" },
              { id: "dishclosure-data-erd" },
              { id: "dishclosure-ux-prototype" },
              { id: "dishclosure-product-strategy" },
              { id: "dishclosure-legal-doc" },
            ],
          },
        },
      },
      "lyft-developer-experience-pm": {
        meta: {
          title: "Lyft | Driving Developer Platform Adoption",
          description:
            "Improving internal developer workflows and platform reliability to accelerate engineering productivity, reduce operational friction, and deliver measurable cost savings.",
        },
        layout: {
          title: "Lyft: Driving Developer Platform Adoption",
          subline:
            "Improving internal developer workflows and platform reliability to accelerate engineering productivity, reduce operational friction, and deliver measurable cost savings.",
          tags: ["Developer Experience", "Platform Adoption", "Internal Tools", "Reliability", "Product Strategy"],
          row1: {
            challenge: {
              heading: "Challenge",
              bullets: [
                "Internal developer platforms must make complex engineering workflows faster and more dependable.",
                "Friction in tooling, validation, and support creates costs across engineering teams.",
                "Platform success depends on adoption and developer outcomes—not just technical capabilities.",
                "The challenge: prioritize improvements that developers would use while improving reliability and operating efficiency.",
              ],
            },
            role: {
              heading: "Role",
              bullets: [
                "Led product improvements for an internal rider-driver simulation platform.",
                "Translated developer workflows and feedback into product requirements and priorities.",
                "Partnered with engineering to improve platform usability, reliability, and operational efficiency.",
              ],
            },
          },
          row2: {
            throughline: undefined,
            left: [
              {
                title: "Started with developer workflows",
                description:
                  "Focused on where engineers encountered friction in simulation, validation, and day-to-day platform usage.",
              },
              {
                title: "Prioritized adoption over feature volume",
                description:
                  "Evaluated improvements through developer usefulness and recurring workflow needs, rather than treating feature delivery as the measure of success.",
              },
            ],
            right: [
              {
                title: "Improved reliability as part of the product experience",
                description:
                  "Treated dependable tooling and reduced support friction as essential requirements for developer trust.",
              },
              {
                title: "Connected platform investment to measurable value",
                description:
                  "Evaluated adoption, reliability, support demand, and operational cost together to prioritize improvements with meaningful impact.",
              },
            ],
          },
          row3: {
            outcomes: {
              heading: "Outcomes",
              bullets: [
                {
                  label: "10% higher adoption and reliability",
                  description: "Increased usage and dependability of the internal developer platform.",
                },
                {
                  label: "30% lower support demand",
                  description: "Reduced support burden and on-call noise through platform improvements.",
                },
                {
                  label: "$150K quarterly savings",
                  description: "Validated about $150K in quarterly operating cost reductions.",
                },
                {
                  label: "Earlier detection of high-risk failures",
                  description: "Shifted discovery of severe failures from post-launch to pre-release.",
                },
              ],
            },
            learnings: {
              heading: "How I make the tradeoff",
              flow: "Developer workflow → Product friction → Platform improvement → Adoption → Reliability → Business impact",
            },
          },
        },
      },
    },
  },
  {
    id: "4f8b2a",
    note: "MongoDB, Senior PM Technical Services Engineering. Homepage plus the Klaviyo, Lyft, and Dishclosure case studies. No MongoDB branding in the rendered copy.",
    home: {
      headline: "Building technical platforms that make engineers more effective",
      subhead:
        "I turn complex engineering workflows into scalable products—improving developer productivity, automating repetitive work, and making technical systems more reliable. My experience spans internal developer tools, API integrations, and large-scale data platforms.",
      profileTagline: "Product Lead | Technical Platforms & Developer Experience",
      featuredProjects: [
        {
          title: "Lyft: Scaling Developer Productivity Through Internal Platforms",
          description:
            "Owned an internal developer simulation platform, turning workflow friction and reliability problems into a product roadmap that improved adoption, reduced support demand, and increased engineering efficiency.",
          href: "/work/lyft-developer-experience-pm",
          imageSrc: "/lyft.gif",
          imageAlt: "Lyft project",
          tags: ["Developer Experience", "Internal Platforms", "Workflow Optimization", "Operational Efficiency"],
          ctaLabel: "Explore Case Study",
        },
        {
          title: "Gainbridge: Turning Fragmented Systems into Reliable Workflows",
          description:
            "Built internal automation and integrated data systems to eliminate repetitive work, improve API validation, and give teams more reliable information for operational and business decisions.",
          href: "/work/gainbridge-data-architecture",
          imageSrc: "/gainbridge.gif",
          imageAlt: "Gainbridge project",
          tags: ["Workflow Automation", "Systems Integration", "Internal Tools", "Data Reliability"],
          ctaLabel: "Explore Case Study",
        },
        {
          title: "Klaviyo: Leading Strategy for a Scalable Data Platform",
          description:
            "Shaped platform strategy across data access, reliability, and infrastructure economics—balancing enterprise customer needs, long-term product differentiation, and operational scalability.",
          href: "/work/klaviyo-real-time-data-strategy",
          imageSrc: "/klaviyo-logo.jpg",
          imageAlt: "Klaviyo",
          tags: ["Platform Strategy", "Enterprise Reliability", "Customer Trust", "Cross-Functional Leadership"],
          ctaLabel: "Explore Case Study",
        },
      ],
      howIWork: {
        heading: "How I work: turn technical complexity into",
        headingAccent: "operational leverage",
        quote: "The best internal platforms make complex work simpler, faster, and more reliable.",
        steps: [
          {
            title: "Understand the Workflow",
            bullets: [
              "Observe how engineers actually work",
              "Identify friction, repetition, and failure points",
              "Quantify impact on productivity and customers",
            ],
          },
          {
            title: "Map the System",
            bullets: [
              "Trace workflows across tools and services",
              "Identify integration and reliability constraints",
              "Use telemetry to distinguish symptoms from root causes",
            ],
          },
          {
            title: "Design for Leverage",
            bullets: [
              "Prioritize the highest-impact opportunities",
              "Evaluate automation, self-service, and platform improvements",
              "Balance technical feasibility with business value",
            ],
          },
          {
            title: "Drive Adoption & Outcomes",
            bullets: [
              "Align stakeholders around clear tradeoffs",
              "Deliver incrementally with measurable guardrails",
              "Track adoption, efficiency, reliability, and customer impact",
            ],
          },
        ],
      },
    },
    caseStudies: {
      "klaviyo-real-time-data-strategy": {
        meta: {
          title: "Klaviyo | Evolving a Data Platform for Scale and Customer Trust",
          description:
            "Balancing enterprise reliability, platform economics, and customer experience through complex technical change.",
        },
        layout: {
          title: "Klaviyo: Evolving a Data Platform for Scale and Customer Trust",
          subline:
            "Balancing enterprise reliability, platform economics, and customer experience through complex technical change.",
          tags: [
            "Platform Strategy",
            "Enterprise Reliability",
            "Customer Experience",
            "Cross-Functional Leadership",
            "Operational Scalability",
          ],
          row1: {
            challenge: {
              heading: "Challenge",
              bullets: [
                "A shared event platform powers mission-critical workflows across automation, customer profiles, APIs, reporting, and data exports.",
                "Different customer workflows require different guarantees for latency, data history, freshness, and reliability.",
                "Growing infrastructure costs created pressure to change how data was stored and accessed—without undermining enterprise customer expectations.",
                "Any platform change required coordination across multiple product, engineering, and customer-facing teams.",
              ],
            },
            role: {
              heading: "Role",
              bullets: [
                "Platform Strategy: Own the product direction for event ingestion, storage, serving, and data-access capabilities.",
                "Customer & Business Judgment: Translate customer needs, enterprise requirements, and infrastructure economics into product priorities.",
                "Cross-Functional Leadership: Align Engineering, Product, Customer Success, and Marketing on decisions, dependencies, and rollout readiness.",
                "Change Management: Define customer safeguards, success criteria, and reversible rollout approaches for high-impact changes.",
              ],
            },
          },
          row2: {
            throughline: "Customer workflows → Platform guarantees → Strategic tradeoffs → Customer-safe rollout",
            left: [
              {
                title: "Define What Customers Must Be Able to Rely On",
                description:
                  "Shifted the discussion from infrastructure policies to the actual guarantees customers and downstream products need.",
                bullets: [
                  "Distinguished latency-sensitive operational workflows from analytical and historical data-access needs.",
                ],
              },
              {
                title: "Make Platform Economics a Product Decision",
                description:
                  "Evaluated serving architectures against customer value, performance expectations, operational complexity, and long-term business economics.",
                bullets: [
                  "Prioritized differentiated access where it matters most, rather than applying the same expensive guarantees to every workload.",
                ],
              },
            ],
            right: [
              {
                title: "Protect Enterprise Customer Workflows",
                description:
                  "Mapped the impact of proposed changes across APIs, integrations, data exports, and dependent products to identify where customer experience could degrade.",
                bullets: [
                  "Defined customer-facing guarantees and special handling for strategically important accounts and workflows.",
                ],
              },
              {
                title: "Design Change for Adoption and Reversibility",
                description:
                  "Translated strategy into a phased rollout model with clear readiness criteria across engineering and customer-facing teams.",
                bullets: [
                  "Used representative customer cohorts, monitoring signals, and explicit rollback criteria.",
                  "Incorporated customer communication and support readiness into launch decisions—not as an afterthought.",
                ],
              },
            ],
          },
          row3: {
            outcomes: {
              heading: "Outcomes so far",
              bullets: [
                {
                  label: "Strategic Clarity",
                  description:
                    "Reframed an infrastructure cost challenge into a platform strategy balancing customer value, reliability, differentiation, and economics.",
                },
                {
                  label: "Business Impact",
                  description:
                    "Initiated phased changes targeting approximately $1M in annual infrastructure savings, with additional opportunities at broader scale.",
                },
                {
                  label: "Operational Risk Reduction",
                  description:
                    "Established staged rollout decisions, customer safeguards, monitoring criteria, and cross-functional readiness requirements for high-impact platform changes.",
                },
              ],
            },
            learnings: {
              heading: "How I make the tradeoff",
              bullets: [
                "Customer Impact: Which customer workflows and experiences are at risk?",
                "Platform Guarantees: What must remain reliable, available, and predictable?",
                "Technical Feasibility: Which architectures meet those requirements?",
                "Business Economics: What does each level of service cost?",
                "Operational Readiness: Can engineering and customer-facing teams support the change?",
                "Reversibility: What evidence is needed before expanding the rollout?",
              ],
            },
          },
          artifacts: {
            projectHref: "/work/klaviyo-real-time-data-strategy",
            projectLabel: "Klaviyo",
            items: [
              {
                id: "klaviyo-data-access-decision-gates",
                subline: "How customer guarantees, technical constraints, and business tradeoffs shape platform decisions.",
              },
              {
                id: "klaviyo-cost-to-value-segmentation",
                subline:
                  "A structured method for evaluating infrastructure costs alongside customer value and revenue exposure.",
              },
              {
                id: "klaviyo-rollout-and-evidence-plan",
                subline:
                  "A staged approach to customer-safe change, combining representative cohorts, monitoring, rollback criteria, and communication readiness.",
              },
            ],
          },
        },
      },
      "lyft-developer-experience-pm": {
        meta: {
          title: "Lyft | Transforming Internal Developer Tools into a Productivity Platform",
          description:
            "Turning fragmented engineering workflows into reliable self-service capabilities that improve adoption, reduce support demand, and scale developer productivity.",
        },
        layout: {
          title: "Lyft: Transforming Internal Developer Tools into a Productivity Platform",
          subline:
            "Turning fragmented engineering workflows into reliable self-service capabilities that improve adoption, reduce support demand, and scale developer productivity.",
          tags: [
            "Developer Experience",
            "Internal Platforms",
            "Workflow Transformation",
            "Engineering Productivity",
            "Operational Efficiency",
          ],
          row1: {
            challenge: {
              heading: "Challenge",
              bullets: [
                "An internal rider-driver simulation platform supported engineering development and validation workflows.",
                "Usability friction, inconsistent reliability, and troubleshooting overhead limited developer productivity.",
                "Technical and non-technical users had different needs, making a one-size-fits-all experience ineffective.",
                "The challenge was to improve adoption and self-service while reducing the operational burden on engineering teams.",
              ],
            },
            role: {
              heading: "Role",
              bullets: [
                "Product Ownership: Took ownership of the internal simulation platform's product direction and roadmap.",
                "Developer Discovery: Combined user feedback, workflow analysis, and telemetry to identify high-impact friction.",
                "Cross-Functional Leadership: Partnered with backend engineering, frontend engineering, and design to prioritize platform improvements.",
                "Outcome Accountability: Measured success through adoption, reliability, support demand, and engineering productivity.",
              ],
            },
          },
          row2: {
            throughline: "Discover friction → Segment workflows → Prioritize leverage → Drive adoption",
            left: [
              {
                title: "Start With Developer Workflows",
                description:
                  "Shifted the focus from technical defects to understanding how developers used the platform and where their workflows broke down.",
                bullets: [
                  "Gathered feedback from technical and non-technical users.",
                  "Combined user research with usage logs and support patterns.",
                  "Identified barriers to adoption and self-service.",
                ],
              },
              {
                title: "Differentiate User Needs",
                description:
                  "Recognized that the platform served multiple user groups with different technical capabilities and workflows.",
                bullets: [
                  "Segmented user needs based on usage and workflow.",
                  "Distinguished reliability problems from usability and onboarding friction.",
                  "Focused the roadmap on improvements with broad productivity impact.",
                ],
              },
            ],
            right: [
              {
                title: "Prioritize Operational Leverage",
                description:
                  "Evaluated improvements based on how much developer effort and troubleshooting they could eliminate—not simply the number of defects resolved.",
                bullets: [
                  "Prioritized reliability, clearer errors, onboarding, and documentation.",
                  "Used support burden and adoption as product signals.",
                  "Balanced implementation cost against recurring operational savings.",
                ],
              },
              {
                title: "Build for Self-Service and Adoption",
                description:
                  "Worked across engineering and design to make the platform more dependable and easier to use without relying on ongoing manual support.",
                bullets: [
                  "Turned workflow findings into a sequenced product roadmap.",
                  "Improved usability and reliability for a wider range of users.",
                  "Validated impact through usage, adoption, and operational metrics.",
                ],
              },
            ],
          },
          row3: {
            outcomes: {
              heading: "Outcomes",
              bullets: [
                {
                  label: "Developer adoption and reliability",
                  description: "Increased reliability and adoption of the internal platform by 10%.",
                },
                {
                  label: "Operational Efficiency",
                  description: "Reduced support demand and on-call noise by 30%.",
                },
                {
                  label: "Business Impact",
                  description: "Validated approximately $150K in quarterly savings.",
                },
                {
                  label: "Earlier failure detection",
                  description: "Shifted discovery of high-risk failures from post-launch to pre-release.",
                },
              ],
            },
            learnings: {
              heading: "How I Make the Product Decision",
              bullets: [
                "Developer Value: Where are users losing the most time?",
                "Workflow Frequency: How often does the friction occur?",
                "Reliability: Which failures interrupt critical workflows?",
                "Self-Service: What can users resolve without engineering assistance?",
                "Engineering Investment: Which improvements create the most leverage?",
                "Adoption: Does the change measurably improve real usage?",
              ],
              closing:
                "A successful internal platform isn't measured by how much functionality it offers, but by how much friction it removes from the work people need to do.",
            },
          },
        },
      },
      "dishclosure-founder-mode": {
        meta: {
          title: "Dishclosure | Turning Complex Operator Workflows into a Scalable Product",
          description:
            "From frontline customer discovery to a working multi-tenant platform—designing for data reliability, operational simplicity, and sustainable scale.",
        },
        layout: {
          title: "Dishclosure: Turning Complex Operator Workflows into a Scalable Product",
          subline:
            "From frontline customer discovery to a working multi-tenant platform—designing for data reliability, operational simplicity, and sustainable scale.",
          tags: [
            "0→1 Product Development",
            "Workflow Transformation",
            "Systems Architecture",
            "Customer Discovery",
            "AI-Assisted Development",
          ],
          row1: {
            challenge: {
              heading: "Challenge",
              bullets: [
                "Restaurants manage complex ingredient, recipe, menu, and customization data across fragmented operational workflows.",
                "Consumers with dietary restrictions depend on accurate information, but restaurant data is often incomplete or difficult to maintain.",
                "A useful solution needed to fit restaurant operations without creating excessive manual upkeep.",
                "The central challenge was designing a trustworthy, scalable system while validating whether the business could support ongoing data maintenance.",
              ],
            },
            role: {
              heading: "Role",
              bullets: [
                "End-to-End Ownership: Led problem discovery, product strategy, technical design, implementation, and early customer validation.",
                "Operator Workflow Discovery: Conducted 15 restaurant-operator interviews, 10 consumer interviews, and 50 field visits to understand operational constraints.",
                "Technical Product Development: Designed and built a multi-tenant product with operator-facing workflows, consumer experiences, and 50+ backend API endpoints.",
                "Investment Judgment: Evaluated demand, reliability, operating costs, ecosystem dependencies, and scalability before deciding whether to continue investing.",
              ],
            },
          },
          row2: {
            throughline: "Discover workflows → Model complexity → Build for reliability → Validate scalability",
            left: [
              {
                title: "Understand the Real Operator Workflow",
                description:
                  "Started with how restaurants actually manage menus, ingredients, and customer requests rather than assuming they would adopt a new standalone system.",
                bullets: [
                  "Interviewed restaurant operators and observed frontline workflows.",
                  "Identified data-maintenance burden and integration constraints.",
                  "Distinguished consumer demand from restaurant willingness and ability to participate.",
                ],
              },
              {
                title: "Translate Domain Complexity into a Data Model",
                description:
                  "Designed a structured data model to represent ingredients, recipes, modifiers, and menu items while making information accuracy an explicit product requirement.",
                bullets: [
                  "Modeled relationships between ingredients, recipes, and customized menu items.",
                  "Accounted for allergen propagation and incomplete information.",
                  "Designed APIs around maintainable operator workflows rather than isolated consumer features.",
                ],
              },
            ],
            right: [
              {
                title: "Build an Integrated, Multi-Tenant Product",
                description: "Turned research into a working system spanning restaurant operations, consumer access, and backend services.",
                bullets: [
                  "Built an operator portal, consumer application, and backend with 50+ API endpoints.",
                  "Implemented tenant isolation, authentication, and role-based access.",
                  "Used AI-assisted development to accelerate prototyping and implementation.",
                ],
              },
              {
                title: "Make the Scale-or-Stop Decision",
                description:
                  "Evaluated whether a functional product and early customer interest translated into a sustainable business opportunity.",
                bullets: [
                  "Secured pilot interest from three restaurants.",
                  "Evaluated ongoing data accuracy, liability, integration dependencies, and operational cost.",
                  "Paused further investment when the scalability and market-timing constraints outweighed the available evidence for expansion.",
                ],
              },
            ],
          },
          row3: {
            outcomes: {
              heading: "Outcomes",
              bullets: [
                {
                  label: "Customer Validation",
                  description:
                    "Conducted 25 customer interviews and 50 field visits, identifying both consumer demand and operator adoption constraints.",
                },
                {
                  label: "Technical Execution",
                  description:
                    "Built a functional multi-tenant MVP with an operator portal, consumer application, and 50+ API endpoints.",
                },
                {
                  label: "Early Market Traction",
                  description: "Secured pilot interest from three restaurant operators.",
                },
                {
                  label: "Investment Discipline",
                  description:
                    "Made an evidence-based decision to pause rather than scale a product with unresolved operational and ecosystem constraints.",
                },
              ],
            },
            learnings: {
              heading: "How I Evaluate Product Viability",
              bullets: [
                "User Value: Does the product solve a meaningful problem?",
                "Workflow Fit: Can it work within existing operator processes?",
                "Data Reliability: Can the system maintain accurate, trustworthy information?",
                "Technical Complexity: What architecture and integrations are required?",
                "Operational Scalability: What manual work remains as adoption grows?",
                "Investment Decision: Does the evidence justify the next phase of development?",
              ],
              closing:
                "Building a working product proves technical feasibility. Building a scalable business requires operational feasibility—and knowing when those two diverge is a critical product decision.",
            },
          },
          artifacts: {
            projectHref: "/work/dishclosure-founder-mode",
            projectLabel: "Dishclosure",
            items: [
              {
                id: "dishclosure-product-strategy",
                subline:
                  "How adjacent products, integrations, and market structure informed the product's strategic positioning.",
              },
              {
                id: "dishclosure-data-erd",
                subline:
                  "How ingredients, recipes, modifiers, and menu relationships were translated into the data model.",
              },
              {
                id: "dishclosure-ux-prototype",
                subline:
                  "How frontline observation and operator interviews shaped the workflows used to test menu and ingredient maintenance.",
              },
              {
                id: "dishclosure-legal-doc",
              },
              {
                id: "dishclosure-technical-design",
                subline:
                  "How customer research became technical specifications and a working multi-tenant product.",
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
