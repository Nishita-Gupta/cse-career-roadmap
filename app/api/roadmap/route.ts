import { NextRequest, NextResponse } from "next/server"
import { getDriver } from "@/lib/neo4j"
import type { RoadmapData } from "@/lib/roadmap-data"

export async function POST(req: NextRequest) {
  const { year, goal } = await req.json()

  if (!year || !goal) {
    return NextResponse.json({ error: "Missing year or goal" }, { status: 400 })
  }

  const driver = getDriver()
  const session = driver.session()

  try {
    // Fetch skills by category
    const skillsResult = await session.run(
      `MATCH (yr:Year {name: $year})-[:HAS_GOAL]->(cg:CareerGoal {name: $goal, yearLevel: $year})
       MATCH (cg)-[:REQUIRES]->(sk:Skill)
       RETURN sk.name AS name, sk.category AS category
       ORDER BY sk.category`,
      { year, goal }
    )

    const focusAreas: string[] = []
    const coreSubjects: string[] = []
    const skills: string[] = []

    for (const record of skillsResult.records) {
      const name = record.get("name") as string
      const category = record.get("category") as string
      if (category === "focusArea") focusAreas.push(name)
      else if (category === "coreSubject") coreSubjects.push(name)
      else skills.push(name)
    }

    // Fetch recommended platforms (resources)
    const platformsResult = await session.run(
      `MATCH (yr:Year {name: $year})-[:HAS_GOAL]->(cg:CareerGoal {name: $goal, yearLevel: $year})
       MATCH (cg)-[:RECOMMENDS]->(res:Resource)
       RETURN res.name AS name, res.url AS url`,
      { year, goal }
    )

    const platforms = platformsResult.records.map((r) => ({
      name: r.get("name") as string,
      url: r.get("url") as string,
    }))

    // Fetch timeline phases
    const timelineResult = await session.run(
      `MATCH (yr:Year {name: $year})-[:HAS_GOAL]->(cg:CareerGoal {name: $goal, yearLevel: $year})
       MATCH (cg)-[:HAS_TIMELINE]->(tp:TimelinePhase)
       RETURN tp.phase AS phase, tp.description AS description, tp.order AS order
       ORDER BY tp.order`,
      { year, goal }
    )

    const timeline = timelineResult.records.map((r) => ({
      phase: r.get("phase") as string,
      description: r.get("description") as string,
    }))

    if (focusAreas.length === 0 && skills.length === 0) {
      return NextResponse.json(
        { error: `No data found for ${year} – ${goal}` },
        { status: 404 }
      )
    }

    const roadmap: RoadmapData = { focusAreas, coreSubjects, skills, platforms, timeline }
    return NextResponse.json(roadmap)
  } catch (err) {
    console.error("[/api/roadmap] Neo4j error:", err)
    return NextResponse.json(
      { error: "Failed to fetch roadmap from database." },
      { status: 500 }
    )
  } finally {
    await session.close()
    // In production (serverless) close the driver too — no persistent process to hold it
    if (process.env.NODE_ENV !== "development") {
      await driver.close()
    }
  }
}
