"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#home" className="font-sans text-sm font-semibold tracking-wide">
          <span className="text-primary">Ridwan Sihara</span>
          <span className="sr-only">Go to Home</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary Navigation">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn("text-sm text-foreground/80 hover:text-foreground transition-colors")}
            >
              {n.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-primary text-primary-foreground">
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </nav>
        <Button
          variant="secondary"
          size="sm"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </Button>
      </div>

      <div id="mobile-nav" className={cn("md:hidden border-t", open ? "block" : "hidden")}>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="py-2 text-sm text-foreground/80 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-primary text-primary-foreground">
            <a href="/resume.pdf" download onClick={() => setOpen(false)}>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
