"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import dynamic from "next/dynamic"
import type { RoadmapData, Year, Goal } from "@/lib/roadmap-data"

// Must be dynamically imported — uses canvas/browser APIs, not SSR-safe
const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false })

// ── Node type config ──────────────────────────────────────────────────────────
const NODE_CONFIG = {
  year:         { color: "#6366f1", radius: 22, label: "Year"          },
  goal:         { color: "#a855f7", radius: 20, label: "Career Goal"   },
  focusArea:    { color: "#f59e0b", radius: 12, label: "Focus Area"    },
  coreSubject:  { color: "#10b981", radius: 12, label: "Core Subject"  },
  skill:        { color: "#06b6d4", radius: 12, label: "Skill"         },
  platform:     { color: "#f43f5e", radius: 10, label: "Platform"      },
  timeline:     { color: "#eab308", radius: 10, label: "Timeline"      },
} as const

type NodeType = keyof typeof NODE_CONFIG

interface GraphNode {
  id: string
  label: string
  type: NodeType
  nodeRadius: number
  url?: string
  x?: number
  y?: number
}

interface GraphLink {
  source: string
  target: string
  label: string
}

interface RoadmapGraphProps {
  data: RoadmapData
  year: Year
  goal: Goal
}

function wrapText(text: string, maxLen = 18): string {
  return text.length > maxLen ? text.slice(0, maxLen) + "…" : text
}

export function RoadmapGraph({ data, year, goal }: RoadmapGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(800)
  const height = 560

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setWidth(containerRef.current.offsetWidth)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const graphData = useMemo(() => {
    const nodes: GraphNode[] = []
    const links: GraphLink[] = []

    const add = (node: GraphNode) => nodes.push(node)
    const link = (source: string, target: string, label: string) =>
      links.push({ source, target, label })

    // Year → Goal
    add({ id: "year", label: year, type: "year", nodeRadius: NODE_CONFIG.year.radius })
    add({ id: "goal", label: goal, type: "goal", nodeRadius: NODE_CONFIG.goal.radius })
    link("year", "goal", "HAS_GOAL")

    // Focus Areas
    data.focusAreas.forEach((fa, i) => {
      const id = `fa_${i}`
      add({ id, label: fa, type: "focusArea", nodeRadius: NODE_CONFIG.focusArea.radius })
      link("goal", id, "REQUIRES")
    })

    // Core Subjects
    data.coreSubjects.forEach((cs, i) => {
      const id = `cs_${i}`
      add({ id, label: cs, type: "coreSubject", nodeRadius: NODE_CONFIG.coreSubject.radius })
      link("goal", id, "REQUIRES")
    })

    // Skills
    data.skills.forEach((sk, i) => {
      const id = `sk_${i}`
      add({ id, label: sk, type: "skill", nodeRadius: NODE_CONFIG.skill.radius })
      link("goal", id, "REQUIRES")
    })

    // Platforms (Resources)
    data.platforms.forEach((pl, i) => {
      const id = `pl_${i}`
      add({ id, label: pl.name, type: "platform", nodeRadius: NODE_CONFIG.platform.radius, url: pl.url })
      link("goal", id, "LEARN_FROM")
    })

    // Timeline phases
    data.timeline.forEach((t, i) => {
      const id = `tl_${i}`
      add({ id, label: t.phase.replace(":", ""), type: "timeline", nodeRadius: NODE_CONFIG.timeline.radius })
      link("goal", id, "HAS_TIMELINE")
    })

    return { nodes, links }
  }, [data, year, goal])

  const paintNode = (node: GraphNode, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const { color, radius } = NODE_CONFIG[node.type]
    const r = radius
    const x = node.x ?? 0
    const y = node.y ?? 0

    // Glow / shadow
    ctx.shadowColor = color
    ctx.shadowBlur = 12

    // Circle
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill()
    ctx.strokeStyle = "rgba(255,255,255,0.25)"
    ctx.lineWidth = 1.5
    ctx.stroke()

    ctx.shadowBlur = 0

    // Label inside node for large nodes, below for small
    const fontSize = Math.max(8, Math.min(r * 0.55, 13))
    ctx.font = `bold ${fontSize}px Inter, sans-serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    if (r >= 18) {
      // Large nodes: two-line inside
      const words = node.label.split(" ")
      const half = Math.ceil(words.length / 2)
      const line1 = words.slice(0, half).join(" ")
      const line2 = words.slice(half).join(" ")
      ctx.fillStyle = "#fff"
      if (line2) {
        ctx.fillText(wrapText(line1, 10), x, y - fontSize * 0.6)
        ctx.fillText(wrapText(line2, 10), x, y + fontSize * 0.6)
      } else {
        ctx.fillText(wrapText(line1, 12), x, y)
      }
    } else if (globalScale > 0.5) {
      // Small nodes: short label below
      ctx.font = `${Math.max(6, 9 / globalScale)}px Inter, sans-serif`
      ctx.fillStyle = "rgba(255,255,255,0.85)"
      ctx.fillText(wrapText(node.label, 16), x, y + r + 8 / globalScale)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Graph canvas */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden rounded-2xl border border-border"
        style={{ background: "#0f172a", height }}
      >
        {width > 0 && (
          <ForceGraph2D
            graphData={graphData as any}
            width={width}
            height={height}
            backgroundColor="#0f172a"
            /* nodes */
            nodeVal={(n: any) => (n.nodeRadius as number) * 2}
            nodeColor={(n: any) => NODE_CONFIG[n.type as NodeType].color}
            nodeCanvasObject={(n: any, ctx, gs) => paintNode(n as GraphNode, ctx, gs)}
            nodeCanvasObjectMode={() => "replace"}
            /* links */
            linkColor={() => "rgba(148,163,184,0.45)"}
            linkWidth={1.5}
            linkDirectionalArrowLength={5}
            linkDirectionalArrowRelPos={1}
            linkDirectionalParticles={1}
            linkDirectionalParticleSpeed={0.004}
            linkDirectionalParticleColor={() => "rgba(148,163,184,0.8)"}
            linkLabel={(l: any) => l.label}
            /* physics */
            d3AlphaDecay={0.02}
            d3VelocityDecay={0.3}
            cooldownTicks={120}
            onNodeClick={(n: any) => {
              if (n.url) window.open(n.url, "_blank")
            }}
          />
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-3">
        {(Object.entries(NODE_CONFIG) as [NodeType, typeof NODE_CONFIG[NodeType]][]).map(
          ([type, cfg]) => (
            <div key={type} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span
                className="inline-block h-3 w-3 rounded-full shrink-0"
                style={{ background: cfg.color }}
              />
              {cfg.label}
            </div>
          )
        )}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="text-primary">↗</span> Click platform nodes to open
        </div>
      </div>

      {/* Timeline detail strip */}
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
