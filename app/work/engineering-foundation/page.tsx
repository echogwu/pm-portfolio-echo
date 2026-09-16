import type { Metadata } from "next"
import { CaseStudyPage } from "@/components/case-study-page"
import { CASE_STUDIES } from "@/lib/case-studies"
import { buildMetadata } from "@/lib/seo"

const SLUG = "engineering-foundation" as const
const { meta } = CASE_STUDIES[SLUG]

export const metadata: Metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  pathname: `/work/${SLUG}`,
  ogImagePath: meta.ogImagePath,
  ogImageAlt: meta.ogImageAlt,
  type: "article",
})

export default function Page() {
  return <CaseStudyPage slug={SLUG} />
}
