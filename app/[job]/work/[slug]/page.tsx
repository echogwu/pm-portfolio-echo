import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudyPage } from "@/components/case-study-page"
import { CASE_STUDY_SLUGS, isCaseStudySlug } from "@/lib/case-studies"
import { assertValidJobIds, getJobVariant, JOB_IDS, resolveCaseStudy } from "@/lib/job-variants"
import { buildMetadata } from "@/lib/seo"

type Params = { job: string; slug: string }

export function generateStaticParams() {
  assertValidJobIds()
  return JOB_IDS.flatMap((job) => CASE_STUDY_SLUGS.map((slug) => ({ job, slug })))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { job, slug } = await params
  if (!isCaseStudySlug(slug)) return {}

  const { meta } = resolveCaseStudy(slug, job)

  return buildMetadata({
    title: meta.title,
    description: meta.description,
    pathname: `/${job}/work/${slug}`,
    canonicalPathname: `/work/${slug}`,
    // Reuse the canonical OG image rather than generating one per job.
    ogImagePath: meta.ogImagePath,
    ogImageAlt: meta.ogImageAlt,
    noindex: true,
    type: "article",
  })
}

export default async function JobCaseStudyPage({ params }: { params: Promise<Params> }) {
  const { job, slug } = await params
  if (!getJobVariant(job) || !isCaseStudySlug(slug)) notFound()

  return <CaseStudyPage slug={slug} jobId={job} />
}
