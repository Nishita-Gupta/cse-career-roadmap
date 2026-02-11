"use client"

import { useState } from "react"
import { Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import type { Year, Goal } from "@/lib/roadmap-data"

interface SelectionFormProps {
  onGenerate: (year: Year, goal: Goal) => void
}

const years: Year[] = ["1st Year", "2nd Year", "3rd Year", "4th Year"]
const goals: Goal[] = ["Placements", "Higher Studies", "GATE", "Research"]

export function SelectionForm({ onGenerate }: SelectionFormProps) {
  const [year, setYear] = useState<Year | "">("")
  const [goal, setGoal] = useState<Goal | "">("")

  const handleSubmit = () => {
    if (year && goal) {
      onGenerate(year as Year, goal as Goal)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-lg border-border shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-center text-xl font-semibold text-card-foreground">
          Tell us about yourself
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="year" className="text-sm font-medium text-muted-foreground">
            Your Current Year
          </Label>
          <Select value={year} onValueChange={(v) => setYear(v as Year)}>
            <SelectTrigger id="year" className="bg-card text-card-foreground">
              <SelectValue placeholder="Select your year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="goal" className="text-sm font-medium text-muted-foreground">
            Your Career Goal
          </Label>
          <Select value={goal} onValueChange={(v) => setGoal(v as Goal)}>
            <SelectTrigger id="goal" className="bg-card text-card-foreground">
              <SelectValue placeholder="Select your goal" />
            </SelectTrigger>
            <SelectContent>
              {goals.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!year || !goal}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base py-5"
        >
          <Compass className="h-5 w-5" />
          Generate Roadmap
        </Button>
      </CardContent>
    </Card>
  )
}
