type SkillGroup = {
  title: string
  items: string[]
}

const groups: SkillGroup[] = [
  {
    title: "Software Development",
    items: [
      "Android (Java, Kotlin, XML)",
      "Web (HTML, CSS, JavaScript, React, Node.js)",
      "Game (Unity, Roblox Studio, Blender, C#)",
    ],
  },
  {
    title: "Engineering & Analysis",
    items: ["ANSYS", "MATLAB", "AutoCAD"],
  },
  {
    title: "Database & Cloud",
    items: ["Firebase", "MySQL", "PostgreSQL"],
  },
  {
    title: "Version Control",
    items: ["Git & GitHub (branching, pull requests, CI/CD)"],
  },
  {
    title: "Data Handling",
    items: ["Python", "MATLAB", "Excel"],
  },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Documentation", "Project Management"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-xl font-semibold md:text-2xl">Skills</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title} className="rounded-lg border p-4">
            <h3 className="font-medium text-primary">{g.title}</h3>
            <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed md:text-base">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
