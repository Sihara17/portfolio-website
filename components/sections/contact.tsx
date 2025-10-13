"use client"

import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-xl font-semibold md:text-2xl">Contact</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <dl className="grid grid-cols-3 gap-3 text-sm">
            <dt className="col-span-1 text-muted-foreground">Phone</dt>
            <dd className="col-span-2">+62 821-1118-2593</dd>
            <dt className="col-span-1 text-muted-foreground">Email</dt>
            <dd className="col-span-2">
              <a
                className="underline underline-offset-4"
                href="mailto:sihararidwansihara@gmail.com"
              >
                sihararidwansihara@gmail.com
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

          {/* ✅ tombol diletakkan di luar <dl> */}
          <div className="mt-4 flex gap-3">
            <Button asChild className="bg-primary text-primary-foreground">
              <a href="mailto:sihararidwansihara@gmail.com">Email Ridwan Sihara</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="tel:+6282111182593">Call</a>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Optional Contact Form</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            You can wire this to Firebase or EmailJS later.
          </p>
          <form
            className="mt-3 grid gap-3"
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thanks! This demo form is not yet wired to a backend.")
            }}
          >
            <label className="grid gap-1 text-sm">
              <span className="text-muted-foreground">Name</span>
              <input
                className="w-full rounded-md border bg-background px-3 py-2 outline-none"
                name="name"
                placeholder="Your name"
                required
              />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="text-muted-foreground">Email</span>
              <input
                className="w-full rounded-md border bg-background px-3 py-2 outline-none"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="text-muted-foreground">Message</span>
              <textarea
                className="min-h-24 w-full rounded-md border bg-background px-3 py-2 outline-none"
                name="message"
                placeholder="Tell me about your project..."
                required
              />
            </label>

            <Button type="submit" className="bg-accent text-accent-foreground">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
