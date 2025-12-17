import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Journey",
  description:
    "A collection of product management work spanning data platforms, APIs, zero-to-one products, and strategic frameworks.",
  pathname: "/projects",
  type: "website",
})

export default function ProjectsPage() {
  return <ClientRedirect to="/journey" />
}
