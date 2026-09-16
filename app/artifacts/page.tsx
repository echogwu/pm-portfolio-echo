import type { Metadata } from "next"
import {
  ARTIFACTS_PAGE_DESCRIPTION,
  ARTIFACTS_PAGE_TITLE,
  ArtifactsPageContent,
} from "@/components/artifacts-page"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: ARTIFACTS_PAGE_TITLE,
  description: ARTIFACTS_PAGE_DESCRIPTION,
  pathname: "/artifacts",
  type: "website",
})

export default function ArtifactsPage() {
  return <ArtifactsPageContent />
}
