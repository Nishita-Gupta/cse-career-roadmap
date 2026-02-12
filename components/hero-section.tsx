"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-2 pt-4 pb-8 text-center">
      
      {/* VIT Logo Box */}
      <div className="flex items-center justify-center p-4">
        <Image
          src="/vit-logo.png"
          alt="VIT-AP University Logo"
          width={200}
          height={100}
          priority
        />
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

