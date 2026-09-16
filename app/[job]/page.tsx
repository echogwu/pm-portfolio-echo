import type { Metadata } from "next"
import { notFound } from "next/navigation"
import HomeContent from "@/components/home-content"
import { PreserveScroll } from "@/components/preserve-scroll"
import { assertValidJobIds, getJobVariant, JOB_IDS, resolveHome } from "@/lib/job-variants"
import { prefixForJob } from "@/lib/paths"
import { buildMetadata } from "@/lib/seo"

type Params = { job: string }

export function generateStaticParams() {
  assertValidJobIds()
  return JOB_IDS.map((job) => ({ job }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { job } = await params
  const home = resolveHome(job)

  return buildMetadata({
    title: home.meta?.title ?? home.headline,
    description: home.meta?.description ?? home.subhead,
    pathname: `/${job}`,
    canonicalPathname: "/",
    noindex: true,
    type: "website",
  })
}

export default async function JobHomePage({ params }: { params: Promise<Params> }) {
  const { job } = await params
  if (!getJobVariant(job)) notFound()

  return (
    <>
      <PreserveScroll />
      <HomeContent home={resolveHome(job)} prefix={prefixForJob(job)} />
    </>
  )
}
