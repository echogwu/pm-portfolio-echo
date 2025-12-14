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
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(1200px 630px at 10% 15%, rgba(59,130,246,0.22), transparent 55%), radial-gradient(900px 700px at 90% 10%, rgba(34,197,94,0.22), transparent 55%), linear-gradient(135deg, #0b1220 0%, #0a0f1c 55%, #070b14 100%)",
          color: "#e5e7eb",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 26,
              letterSpacing: -0.2,
              color: "rgba(229,231,235,0.9)",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "linear-gradient(135deg, #22c55e, #3b82f6)",
                boxShadow: "0 0 0 4px rgba(255,255,255,0.06)",
              }}
            />
            <div style={{ fontWeight: 650 }}>PM Portfolio</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 66,
                lineHeight: 1.04,
                fontWeight: 800,
                letterSpacing: -1.4,
              }}
            >
              <span>AI ships features.</span>
              <span>I ship direction.</span>
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.25,
                color: "rgba(229,231,235,0.82)",
                maxWidth: 980,
              }}
            >
              Data & Platform Product Manager — event-driven systems, analytics foundations, and decision-making under uncertainty.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(229,231,235,0.78)",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              Data Architecture
            </div>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              Measurement
            </div>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              Systems Thinking
            </div>
          </div>

          <div style={{ fontWeight: 600, color: "rgba(229,231,235,0.86)" }}>echo-paulus.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}


