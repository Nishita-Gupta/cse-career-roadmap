"use client"

import { useRef, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { SelectionForm } from "@/components/selection-form"
import { RoadmapDisplay } from "@/components/roadmap-display"
import { getRoadmap, type Year, type Goal, type RoadmapData } from "@/lib/roadmap-data"

export default function Page() {
  const [roadmap, setRoadmap] = useState<RoadmapData | null>(null)
  const [selectedYear, setSelectedYear] = useState<Year | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)
  const roadmapRef = useRef<HTMLDivElement>(null)

  const handleGenerate = (year: Year, goal: Goal) => {
    const data = getRoadmap(year, goal)
    setRoadmap(data)
    setSelectedYear(year)
    setSelectedGoal(goal)

    setTimeout(() => {
      roadmapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-16">
      <HeroSection />
      <div className="mx-auto max-w-5xl flex flex-col gap-10 pt-4">
        <SelectionForm onGenerate={handleGenerate} />
        {roadmap && selectedYear && selectedGoal && (
          <div ref={roadmapRef}>
            <RoadmapDisplay data={roadmap} year={selectedYear} goal={selectedGoal} />
          </div>
        )}
      </div>
    </main>
  )
}
