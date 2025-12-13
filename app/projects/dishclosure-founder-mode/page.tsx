import Link from "next/link"
import { PreserveScroll } from "@/components/preserve-scroll"
import { BackButton } from "@/components/back-button"

export const metadata = {
  title: "Dishclosure | Founder and Product Lead",
  description:
    "An operator-first investigation that revealed the real constraint wasn’t UX or adoption, but broken upstream data lineage.",
}

export default function DishclosurePage() {
  return (
    <div className="min-h-screen bg-[#fafaf7]">
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
            <Link href="#" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Work Samples
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <BackButton />

        <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
          Dishclosure: Founder and Product Lead
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          An operator-first investigation that revealed the real constraint wasn’t UX or adoption, but broken upstream
          data lineage.
        </p>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">Zero-to-One</span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Data Lineage
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Schema Design
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Ecosystem Diagnosis
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Go/No-Go Decision
          </span>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-muted mb-12">
          <img src="/dishclosure.gif" alt="Dishclosure allergen knowledge graph" className="w-full" />
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 pb-16 space-y-12 justify-text">
        {/* The Challenge */}
        <section>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">The Challenge</h2>
          <div className="space-y-6 text-foreground/90 leading-relaxed text-lg justify-text">
            <p>
              Dishclosure was an early-stage product exploring how to help diners with dietary restrictions confidently
              identify what's safe to eat at restaurants.
            </p>
            <p>
              The problem looked deceptively simple: surface allergen information so people can order safely. In
              reality, food allergies sit at the intersection of health risk, legal liability, operational constraints,
              and fragmented data systems.
            </p>
            <p>
              For diners and parents, eating out involves anxiety, social exclusion, and real financial risk — a single
              mistake can result in emergency care and thousands of dollars in medical bills. For restaurants,
              disclosing allergen information carries legal exposure, workflow overhead, and accuracy risk, especially
              when ingredient data is incomplete or constantly changing.
            </p>
            <div className="border-l-4 border-[#0066cc]/30 pl-6 py-4 my-8 bg-muted/30 rounded-r">
              <p className="text-xl font-medium text-balance leading-relaxed">
                The core challenge wasn't building a consumer experience. It was this: there is no reliable, end-to-end
                source of truth for allergen data in the restaurant ecosystem, from suppliers to inventory systems to
                menus. Without that foundation, any diner-facing solution risks being untrustworthy.
              </p>
            </div>
          </div>
        </section>

        {/* My Role */}
        <section>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">My Role</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-lg justify-text">
            <p>Founder and Product Lead.</p>
            <p>
              I owned the problem end-to-end: market research, ecosystem analysis, data modeling, system design,
              prototyping, validation, and go/no-go decision-making. I was responsible not just for building solutions,
              but for determining whether a safe, scalable product was viable given real-world constraints.
            </p>
          </div>
        </section>

        {/* Approach / Decisions */}
        <section>
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Approach / Decisions</h2>
          <p className="text-muted-foreground italic mb-6">
              systems investigation → source-of-truth analysis → schema enforcement → ecosystem constraint discovery → stop decision
            </p>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-3">Anchor on Safety and Trust, Not Growth Narratives</h3>
              <p className="text-foreground/90 leading-relaxed text-lg justify-text">
                Given the stakes of food allergies, I rejected approaches that relied on probabilistic inference,
                crowdsourcing, or "AI labeling" without authoritative data. A 1% error rate is unacceptable when
                outcomes include hospitalization or worse. Trust had to be engineered, not assumed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Start with Operators, Not Diners</h3>
              <p className="text-foreground/90 leading-relaxed text-lg justify-text">
                I began on the operator side, where allergen information is created and maintained. Restaurants already
                run on complex stacks — POS, inventory management, recipe management, and menu platforms — and any
                solution had to fit into existing workflows without adding cognitive or labor burden. I segmented
                operators not just by size, but by tech adoption, mindset, and motivation (e.g., inclusive dining,
                personal connection to allergies, or revenue upside).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Design the Data Model to Surface Reality</h3>
              <div className="space-y-4 text-foreground/90 leading-relaxed text-lg justify-text">
                <p>
                  I defined a structured allergen schema connecting ingredients → packaged goods → recipes → menu items,
                  and built an operator portal that enforced normalized inputs. This wasn't about speed or convenience —
                  it was about making ambiguity visible.
                </p>
                <p>
                  I explored barcode scanning and external ingredient databases as the entry point for operators, only
                  to discover a critical blocker: supplier-level allergen data was inconsistent, incomplete, or
                  unavailable via APIs. If the first step in the workflow fails, the entire system collapses.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Trace the Ecosystem End-to-End</h3>
              <p className="text-foreground/90 leading-relaxed text-lg justify-text">
                I mapped the full data flow — supplier → operator → platform → diner — and prototyped integrations with
                tools like Toast, Meez, and BentoBox to understand where data contracts broke down. This clarified that
                the limiting factor wasn't UI, education, or willingness — it was missing upstream infrastructure
                outside the control of a standalone startup.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Make the Call to Stop</h3>
              <p className="text-foreground/90 leading-relaxed text-lg justify-text">
                Despite building functional MVPs on both the operator and diner sides, securing pilot interest, and
                advocating for regulatory change (including supporting California SB68), I concluded that delivering a
                truly reliable allergen experience would require supplier-level aggregation and standardization. Rather
                than ship something unsafe or misleading, I chose to pause the product.
              </p>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">What I Learned</h2>
          <div className="space-y-6">
            <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                High-stakes consumer problems demand infrastructure-level solutions
              </h3>
              <p className="text-foreground/90 leading-relaxed justify-text">
                When errors carry medical and legal consequences, probabilistic or surface-level fixes break down
                quickly.
              </p>
            </div>

            <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Trust is an ecosystem property, not a UI feature</h3>
              <p className="text-foreground/90 leading-relaxed justify-text">
                It emerges from enforceable schemas, authoritative sources, and aligned incentives across multiple
                actors — not better messaging.
              </p>
            </div>

            <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Operators don't resist solutions; they resist risk and overhead
              </h3>
              <p className="text-foreground/90 leading-relaxed justify-text">
                Any tool that adds workflow friction or liability without clear guarantees will stall, regardless of
                user empathy or market size.
              </p>
            </div>

            <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Regulation can create urgency, but not readiness</h3>
              <p className="text-foreground/90 leading-relaxed justify-text">
                Even when laws like SB68 mandate disclosure, most operators lack the data and systems needed to comply
                cleanly.
              </p>
            </div>

            <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Knowing when to stop is part of the job</h3>
              <p className="text-foreground/90 leading-relaxed justify-text">
                Exercising restraint — and not scaling on broken inputs — is a core product skill, not a failure.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
