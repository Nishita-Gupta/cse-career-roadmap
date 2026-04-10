"use client"

import { useRef, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { SelectionForm } from "@/components/selection-form"
import { RoadmapDisplay } from "@/components/roadmap-display"
import type { Year, Goal, RoadmapData } from "@/lib/roadmap-data"

export default function Page() {
  const [roadmap, setRoadmap] = useState<RoadmapData | null>(null)
  const [selectedYear, setSelectedYear] = useState<Year | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const roadmapRef = useRef<HTMLDivElement>(null)

  const handleGenerate = async (year: Year, goal: Goal) => {
    setIsLoading(true)
    setError(null)
    setRoadmap(null)

    try {
      const res = await fetch("/api/roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ year, goal }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || `Server error (${res.status})`)
      }

      const data: RoadmapData = await res.json()
      setRoadmap(data)
      setSelectedYear(year)
      setSelectedGoal(goal)

      setTimeout(() => {
        roadmapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-16">
      <HeroSection />
      <div className="mx-auto max-w-5xl flex flex-col gap-10 pt-4">
        <SelectionForm onGenerate={handleGenerate} isLoading={isLoading} />

        {error && (
          <div className="mx-auto w-full max-w-lg rounded-lg border border-destructive/40 bg-destructive/10 px-5 py-4 text-sm text-destructive text-center">
            {error}
          </div>
        )}

        {roadmap && selectedYear && selectedGoal && (
          <div ref={roadmapRef}>
            <RoadmapDisplay data={roadmap} year={selectedYear} goal={selectedGoal} />
          </div>
        )}
      </div>
    </main>
  )
}
