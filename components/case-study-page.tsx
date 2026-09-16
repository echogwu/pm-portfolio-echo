import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectDetailLayout } from "@/components/project-detail-layout"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SiteNav } from "@/components/site-nav"
import type { CaseStudySlug } from "@/lib/case-studies"
import { resolveCaseStudy } from "@/lib/job-variants"
import { prefixForJob } from "@/lib/paths"

/** Renders one case study, either canonically or inside a job variant. */
export function CaseStudyPage({ slug, jobId }: { slug: CaseStudySlug; jobId?: string }) {
  const { scroll, footer, layout } = resolveCaseStudy(slug, jobId)
  const prefix = prefixForJob(jobId)

  return (
    <div className="min-h-screen bg-background">
      {scroll === "top" ? <ScrollToTop /> : <PreserveScroll />}

      <SiteNav active="work" prefix={prefix} />

      <ProjectDetailLayout {...layout} prefix={prefix} />

      {footer ? (
        <footer className="border-t border-border mt-24">
          <div className="page-container py-12">
            <div className="text-sm text-muted-foreground">© 2025 Product Portfolio. Crafted with care.</div>
          </div>
        </footer>
      ) : null}
    </div>
  )
}
