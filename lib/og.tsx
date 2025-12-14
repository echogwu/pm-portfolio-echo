import { ImageResponse } from "next/og"

export function arrayBufferToBase64(data: ArrayBuffer) {
  const bytes = new Uint8Array(data)
  const chunkSize = 0x8000
  let binary = ""
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize))
  }
  return btoa(binary)
}

export function mimeFromPath(pathname: string) {
  const lower = pathname.toLowerCase()
  if (lower.endsWith(".png")) return "image/png"
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg"
  if (lower.endsWith(".webp")) return "image/webp"
  if (lower.endsWith(".gif")) return "image/gif"
  return "application/octet-stream"
}

export async function fetchAsDataUrl(url: URL, mime: string) {
  const buf = await fetch(url).then((res) => res.arrayBuffer())
  return `data:${mime};base64,${arrayBufferToBase64(buf)}`
}

export type ProjectOgTemplateProps = {
  title: string
  subline: string
  heroImageDataUrl: string
  heroAlt?: string
}

export function createProjectOgImageResponse(props: ProjectOgTemplateProps) {
  const { title, subline, heroImageDataUrl, heroAlt } = props

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 84,
          background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
          color: "#0b0f19",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        {/* Left: headline + subline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22, flex: 1, paddingRight: 56 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 850,
              letterSpacing: -1.4,
            }}
          >
            <span>{title}</span>
          </div>

          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(15, 23, 42, 0.62)",
              maxWidth: 640,
            }}
          >
            {subline}
          </div>

          <div style={{ fontSize: 22, color: "rgba(15, 23, 42, 0.45)", marginTop: 6 }}>echo-paulus.com</div>
        </div>

        {/* Right: hero image */}
        <div style={{ width: 520, height: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 28,
              overflow: "hidden",
              background: "rgba(15, 23, 42, 0.04)",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              boxShadow: "0 30px 90px rgba(2, 6, 23, 0.14)",
            }}
          >
            <img
              src={heroImageDataUrl}
              alt={heroAlt || "Project hero"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}


