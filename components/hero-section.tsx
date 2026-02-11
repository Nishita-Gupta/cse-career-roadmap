"use client"

import { GraduationCap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-4 pt-16 pb-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary">
        <GraduationCap className="h-10 w-10 text-primary-foreground" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
        CSE Career Roadmap Advisor
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground text-pretty">
        Get a personalized career roadmap based on your academic year and career goal. Plan smarter, achieve more.
      </p>
    </section>
  )
}
