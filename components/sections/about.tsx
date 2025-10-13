export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-xl font-semibold md:text-2xl">About</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <p className="text-pretty text-sm leading-relaxed md:text-base">
          Ridwan Sihara is a developer with experience in Android app development, web development, game development,
          and engineering tools such as ANSYS, MATLAB, and AutoCAD. Skilled in data gathering, database management,
          Firebase integration, and version control with GitHub.
        </p>
        <div className="rounded-lg border p-4">
          <dl className="grid grid-cols-3 gap-3 text-sm">
            <dt className="col-span-1 text-muted-foreground">Location</dt>
            <dd className="col-span-2">Bekasi, West Java</dd>
            <dt className="col-span-1 text-muted-foreground">Phone</dt>
            <dd className="col-span-2">+62 821-1118-2593</dd>
            <dt className="col-span-1 text-muted-foreground">Email</dt>
            <dd className="col-span-2">
              <a className="underline underline-offset-4" href="mailto:sihararidwansihara@gmail.com">
                sihararidwansihara@gmail.com
              </a>
            </dd>
            <dt className="col-span-1 text-muted-foreground">Portfolio</dt>
            <dd className="col-span-2">
              <a
                className="underline underline-offset-4"
                href="https://vercel.com/sihara21-projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com/sihara21-projects
              </a>
            </dd>
            <dt className="col-span-1 text-muted-foreground">GitHub</dt>
            <dd className="col-span-2">
              <a
                className="underline underline-offset-4"
                href="https://github.com/Sihara17"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Sihara17
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  )
}
