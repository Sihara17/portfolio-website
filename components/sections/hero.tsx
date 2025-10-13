import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-start gap-6">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Bekasi, West Java — Indonesia
        </p>
        <h1 className="text-balance text-3xl font-bold md:text-5xl">Ridwan Sihara</h1>
        <p className="text-pretty text-base text-muted-foreground md:text-lg">
          Multidisciplinary Developer — Android, Web, Game, and Engineering Solutions.
        </p>
        <p className="text-pretty text-sm md:text-base">
          Focused on building efficient, scalable, and user-centered digital solutions by combining engineering
          precision with modern software practices.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild className="bg-primary text-primary-foreground">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
