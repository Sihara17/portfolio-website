import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Smart Tracker App",
    summary: "Android app with real-time tracking using Firebase & Maps API.",
    result: "Result: 30% error reduction.",
  },
  {
    title: "Ridwan Sihara Portfolio",
    summary: "Responsive site (React + Node.js + MySQL).",
    result: "Result: 45% engagement increase.",
  },
  {
    title: "Math Adventure Game",
    summary: "Roblox/Unity game with math puzzles.",
    result: "Result: 1,000+ users in first week.",
  },
  {
    title: "ANSYS & MATLAB Simulation",
    summary: "Mechanical and thermal system modeling.",
    result: "Result: 15% accuracy improvement.",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-xl font-semibold md:text-2xl">Projects & Experience</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} className="border">
            <CardHeader>
              <CardTitle className="text-base md:text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground md:text-base">{p.summary}</p>
              <p className="text-sm md:text-base">
                <span className="font-medium">Outcome: </span>
                {p.result}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
