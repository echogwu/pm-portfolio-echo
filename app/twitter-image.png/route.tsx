import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 84,
          background:
            "radial-gradient(900px 630px at 15% 20%, rgba(34,197,94,0.20), transparent 55%), radial-gradient(900px 630px at 85% 30%, rgba(59,130,246,0.20), transparent 55%), linear-gradient(135deg, #0b1220 0%, #070b14 100%)",
          color: "#e5e7eb",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 24, fontWeight: 650, color: "rgba(229,231,235,0.9)" }}>PM Portfolio</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 74,
              fontWeight: 850,
              letterSpacing: -1.6,
              lineHeight: 1.03,
            }}
          >
            <span>AI ships features.</span>
            <span>I ship direction.</span>
          </div>
          <div style={{ fontSize: 28, color: "rgba(229,231,235,0.82)", lineHeight: 1.25, maxWidth: 980 }}>
            Data & Platform PM — event-driven systems, analytics foundations, and decision-making under uncertainty.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}


