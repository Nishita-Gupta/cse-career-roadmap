"use client"

import { useEffect, useRef, useState } from "react"
import type { RoadmapData, Year, Goal } from "@/lib/roadmap-data"

// ── Node type config ──────────────────────────────────────────────────────────
const NODE_CFG = {
  year:        { color: "#6366f1", r: 32, label: "Year"         },
  goal:        { color: "#a855f7", r: 42, label: "Career Goal"  },
  focusArea:   { color: "#f59e0b", r: 22, label: "Focus Area"   },
  coreSubject: { color: "#10b981", r: 22, label: "Core Subject" },
  skill:       { color: "#06b6d4", r: 22, label: "Skill"        },
  platform:    { color: "#f43f5e", r: 20, label: "Platform"     },
  timeline:    { color: "#eab308", r: 20, label: "Timeline"     },
} as const

type NodeType = keyof typeof NODE_CFG

interface GNode { id: string; label: string; type: NodeType; x: number; y: number; url?: string }
interface GEdge { src: string; tgt: string; rel: string }

// ── Layout builder ────────────────────────────────────────────────────────────
function buildGraph(
  data: RoadmapData, year: Year, goal: Goal, cx: number, cy: number
): { nodes: GNode[]; edges: GEdge[] } {
  const nodes: GNode[] = []
  const edges: GEdge[] = []

  // Centre nodes
  nodes.push({ id: "year", label: year, type: "year", x: cx, y: cy - 220 })
  nodes.push({ id: "goal", label: goal, type: "goal", x: cx, y:  cy })
  edges.push({ src: "year", tgt: "goal", rel: "HAS_GOAL" })

  // 5 groups fanned around Goal — angles avoid the top (where Year sits)
  type Group = { items: { label: string; url?: string }[]; type: NodeType; rel: string; angleDeg: number }
  const groups: Group[] = [
    {
      items: data.focusAreas.map((f) => ({ label: f })),
      type: "focusArea", rel: "REQUIRES", angleDeg: 340,
    },
    {
      items: data.coreSubjects.map((c) => ({ label: c })),
      type: "coreSubject", rel: "REQUIRES", angleDeg: 55,
    },
    {
      items: data.skills.map((s) => ({ label: s })),
      type: "skill", rel: "REQUIRES", angleDeg: 115,
    },
    {
      items: data.platforms.map((p) => ({ label: p.name, url: p.url })),
      type: "platform", rel: "LEARN_FROM", angleDeg: 180,
    },
    {
      items: data.timeline.map((t) => ({ label: t.phase.replace(":", "").trim() })),
      type: "timeline", rel: "HAS_TIMELINE", angleDeg: 248,
    },
  ]

  const RADIUS = 270
  const SPREAD = 38 // degrees of arc spread per group

  groups.forEach(({ items, type, rel, angleDeg }) => {
    const count = items.length
    items.forEach((item, i) => {
      const offset = count > 1 ? (i / (count - 1) - 0.5) * SPREAD * 2 : 0
      const rad = ((angleDeg + offset) * Math.PI) / 180
      const id = `${type}_${i}`
      nodes.push({
        id,
        label: item.label,
        type,
        x: cx + Math.cos(rad) * RADIUS,
        y: cy + Math.sin(rad) * RADIUS,
        url: item.url,
      })
      edges.push({ src: "goal", tgt: id, rel })
    })
  })

  return { nodes, edges }
}

// ── Text wrapping ─────────────────────────────────────────────────────────────
function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(" ")
  const lines: string[] = []
  let cur = ""
  for (const w of words) {
    const candidate = cur ? `${cur} ${w}` : w
    if (candidate.length > maxChars && cur) { lines.push(cur); cur = w }
    else cur = candidate
  }
  if (cur) lines.push(cur)
  return lines.slice(0, 3)
}

// ── Edge geometry (trim to circle edge) ──────────────────────────────────────
function edgePts(src: GNode, tgt: GNode) {
  const dx = tgt.x - src.x
  const dy = tgt.y - src.y
  const d  = Math.hypot(dx, dy) || 1
  const sr = NODE_CFG[src.type].r
  const tr = NODE_CFG[tgt.type].r
  const nx = dx / d; const ny = dy / d
  return {
    x1: src.x + nx * (sr + 3),
    y1: src.y + ny * (sr + 3),
    x2: tgt.x - nx * (tr + 10), // +10 for arrowhead
    y2: tgt.y - ny * (tr + 10),
  }
}

// ── Component ─────────────────────────────────────────────────────────────────
export function RoadmapGraph({ data, year, goal }: { data: RoadmapData; year: Year; goal: Goal }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(860)
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null)
  const height = 620

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setWidth(containerRef.current.offsetWidth)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const cx = width  / 2
  const cy = height / 2 - 10
  const { nodes, edges } = buildGraph(data, year, goal, cx, cy)
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))

  return (
    <div className="flex flex-col gap-5">
      {/* Graph */}
      <div
        ref={containerRef}
        className="w-full rounded-2xl overflow-hidden border border-white/10"
        style={{ height, background: "#0d1117" }}
      >
        <svg width={width} height={height} style={{ display: "block" }}>
          <defs>
            {/* Arrow marker */}
            <marker id="arrowhead" viewBox="0 -5 10 10" refX="9" refY="0"
              markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0,-5L10,0L0,5" fill="rgba(148,163,184,0.55)" />
            </marker>
            {/* Per-type glow */}
            {(Object.entries(NODE_CFG) as [NodeType, { color: string }][]).map(([t, c]) => (
              <filter key={t} id={`glow-${t}`} x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix"
                  values={`0 0 0 0 ${parseInt(c.color.slice(1,3),16)/255}
                           0 0 0 0 ${parseInt(c.color.slice(3,5),16)/255}
                           0 0 0 0 ${parseInt(c.color.slice(5,7),16)/255}
                           0 0 0 0.7 0`}
                  result="glow" />
                <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            ))}
          </defs>

          {/* ── Edges ── */}
          {edges.map((e, i) => {
            const s = byId[e.src]; const t = byId[e.tgt]
            if (!s || !t) return null
            const { x1, y1, x2, y2 } = edgePts(s, t)
            const mx = (x1 + x2) / 2; const my = (y1 + y2) / 2
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI

            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="rgba(148,163,184,0.2)" strokeWidth="1.5"
                  markerEnd="url(#arrowhead)" />
                <text
                  x={mx} y={my}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize="7.5" fontFamily="monospace" letterSpacing="0.5"
                  fill="rgba(148,163,184,0.5)"
                  transform={`rotate(${angle > 90 || angle < -90 ? angle + 180 : angle}, ${mx}, ${my})`}
                  dy="-5"
                >
                  {e.rel}
                </text>
              </g>
            )
          })}

          {/* ── Nodes ── */}
          {nodes.map((node) => {
            const cfg   = NODE_CFG[node.type]
            const lines = wrapText(node.label, cfg.r > 30 ? 9 : 12)
            const lh    = cfg.r > 30 ? 12 : 10
            const totalH = lines.length * lh

            return (
              <g key={node.id}
                style={{ cursor: node.url ? "pointer" : "default" }}
                onClick={() => node.url && window.open(node.url, "_blank")}
                onMouseEnter={() => setTooltip({ text: node.label, x: node.x, y: node.y - cfg.r - 14 })}
                onMouseLeave={() => setTooltip(null)}
              >
                {/* Halo */}
                <circle cx={node.x} cy={node.y} r={cfg.r + 6}
                  fill="none" stroke={cfg.color} strokeWidth="1" opacity="0.2" />
                {/* Body */}
                <circle cx={node.x} cy={node.y} r={cfg.r}
                  fill={cfg.color} filter={`url(#glow-${node.type})`} />
                {/* Rim */}
                <circle cx={node.x} cy={node.y} r={cfg.r}
                  fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                {/* Label */}
                {lines.map((line, li) => (
                  <text key={li}
                    x={node.x}
                    y={node.y - totalH / 2 + li * lh + lh * 0.7}
                    textAnchor="middle" dominantBaseline="middle"
                    fontSize={cfg.r > 30 ? "10" : "8.5"}
                    fontWeight="700"
                    fill="#fff"
                    fontFamily="Inter, sans-serif"
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {line}
                  </text>
                ))}
              </g>
            )
          })}

          {/* ── Tooltip ── */}
          {tooltip && (() => {
            const pad = 8; const w = 180
            return (
              <g>
                <rect x={tooltip.x - w / 2} y={tooltip.y - 14}
                  width={w} height={20} rx="5"
                  fill="#1e293b" stroke="rgba(148,163,184,0.3)" strokeWidth="1" />
                <text x={tooltip.x} y={tooltip.y - 4}
                  textAnchor="middle" fontSize="9" fill="#e2e8f0"
                  fontFamily="Inter, sans-serif">
                  {tooltip.text.length > 38 ? tooltip.text.slice(0, 38) + "…" : tooltip.text}
                </text>
              </g>
            )
          })()}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {(Object.entries(NODE_CFG) as [NodeType, { color: string; label: string }][]).map(([t, c]) => (
          <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: c.color }} />
            {c.label}
          </span>
        ))}
        <span className="text-xs text-muted-foreground">· Hover nodes for full text · Click platforms to open</span>
      </div>

      {/* Timeline strip */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {data.timeline.map((t) => (
          <div key={t.phase} className="rounded-lg bg-muted p-3 text-sm">
            <span className="font-semibold text-foreground">{t.phase} </span>
            <span className="text-muted-foreground">{t.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
