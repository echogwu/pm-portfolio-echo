import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectsTimeline } from "@/components/projects-timeline"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { assertValidJobIds, getJobVariant, JOB_IDS, resolveWork } from "@/lib/job-variants"
import { prefixForJob } from "@/lib/paths"
import { buildMetadata } from "@/lib/seo"

type Params = { job: string }

export function generateStaticParams() {
  assertValidJobIds()
  return JOB_IDS.map((job) => ({ job }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { job } = await params
  const work = resolveWork(job)

  return buildMetadata({
    title: work.title,
    description: work.description,
    pathname: `/${job}/work`,
    canonicalPathname: "/work",
    noindex: true,
    type: "website",
  })
}

export default async function JobWorkPage({ params }: { params: Promise<Params> }) {
  const { job } = await params
  if (!getJobVariant(job)) notFound()

  const work = resolveWork(job)

  return (
    <div className="min-h-screen bg-background">
      <PreserveScroll />

      <SiteNav active="work" prefix={prefixForJob(job)} />

      <ProjectsTimeline
        prefix={prefixForJob(job)}
        intro={work.intro}
        itemIds={work.itemIds}
        itemCopy={work.items}
      />

      <SiteFooter />
    </div>
  )
}
