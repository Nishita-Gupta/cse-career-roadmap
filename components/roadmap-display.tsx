"use client"

import { Badge } from "@/components/ui/badge"
import { RoadmapGraph } from "@/components/roadmap-graph"
import type { RoadmapData, Year, Goal } from "@/lib/roadmap-data"

interface RoadmapDisplayProps {
  data: RoadmapData
  year: Year
  goal: Goal
}

export function RoadmapDisplay({ data, year, goal }: RoadmapDisplayProps) {
  return (
    <section className="mx-auto w-full max-w-5xl flex flex-col items-center gap-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col items-center gap-3">
        <Badge
          variant="secondary"
          className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm font-medium"
        >
          {year} &middot; {goal}
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance">
          Your Personalized Roadmap
        </h2>
        <p className="text-sm text-muted-foreground">
          Interactive Neo4j graph — drag nodes, scroll to zoom, click platforms to open
        </p>
      </div>

      <div className="w-full">
        <RoadmapGraph data={data} year={year} goal={goal} />
      </div>
    </section>
  )
}
