"use client"

import {
  Target,
  BookOpen,
  Sparkles,
  Globe,
  Settings,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
      </div>

      <div className="grid w-full gap-5 md:grid-cols-3">
        {/* Focus Areas */}
        <Card className="border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2.5 text-lg font-semibold text-card-foreground">
              <Target className="h-5 w-5 text-primary" />
              Focus Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2.5">
              {data.focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Core Subjects */}
        <Card className="border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2.5 text-lg font-semibold text-card-foreground">
              <BookOpen className="h-5 w-5 text-primary" />
              Core Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2.5">
              {data.coreSubjects.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Skills to Develop */}
        <Card className="border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2.5 text-lg font-semibold text-card-foreground">
              <Sparkles className="h-5 w-5 text-primary" />
              Skills to Develop
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2.5">
              {data.skills.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid w-full gap-5 md:grid-cols-2">
        {/* Recommended Platforms */}
        <Card className="border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2.5 text-lg font-semibold text-card-foreground">
              <Globe className="h-5 w-5 text-primary" />
              Recommended Platforms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {data.platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {platform.name}
                  <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timeline Strategy */}
        <Card className="border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2.5 text-lg font-semibold text-card-foreground">
              <Settings className="h-5 w-5 text-primary" />
              Timeline Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {data.timeline.map((t) => (
                <div
                  key={t.phase}
                  className="rounded-lg bg-muted p-3"
                >
                  <p className="text-sm text-card-foreground">
                    <span className="font-semibold text-foreground">{t.phase}</span>{" "}
                    <span className="text-muted-foreground">{t.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
