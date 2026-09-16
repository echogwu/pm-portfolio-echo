import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  ARTIFACTS_PAGE_DESCRIPTION,
  ARTIFACTS_PAGE_TITLE,
  ArtifactsPageContent,
} from "@/components/artifacts-page"
import { assertValidJobIds, getJobVariant, JOB_IDS } from "@/lib/job-variants"
import { prefixForJob } from "@/lib/paths"
import { buildMetadata } from "@/lib/seo"

type Params = { job: string }

export function generateStaticParams() {
  assertValidJobIds()
  return JOB_IDS.map((job) => ({ job }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { job } = await params

  return buildMetadata({
    title: ARTIFACTS_PAGE_TITLE,
    description: ARTIFACTS_PAGE_DESCRIPTION,
    pathname: `/${job}/artifacts`,
    canonicalPathname: "/artifacts",
    noindex: true,
    type: "website",
  })
}

export default async function JobArtifactsPage({ params }: { params: Promise<Params> }) {
  const { job } = await params
  if (!getJobVariant(job)) notFound()

  return <ArtifactsPageContent prefix={prefixForJob(job)} />
}
