// Types shared between the API route and UI components.
// The hardcoded roadmap data has been removed — data is now fetched from Neo4j
// via POST /api/roadmap.

export interface RoadmapData {
  focusAreas: string[]
  coreSubjects: string[]
  skills: string[]
  platforms: { name: string; url: string }[]
  timeline: { phase: string; description: string }[]
}

export type Year = "1st Year" | "2nd Year" | "3rd Year" | "4th Year"
export type Goal = "Placements" | "Higher Studies" | "GATE" | "Research"
