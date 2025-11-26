import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "RekBer",
    screenshot: "/buyerTransaction.png",
    summary: "Rekening Bersama — Role: Admin, Seller, Buyer.",
    link: "https://v0-rekening-bersama-website.vercel.app/",
  },
  {
    title: "Ridwan Sihara Portfolio",
    screenshot: "/portofolio.png",
    summary: "Responsive site (React + Node.js + MySQL).",
    result: "Result: 45% engagement increase.",
  },
  {
    title: "CryptoCommerce",
    screenshot: "/CryptoGame.png",
    summary: "Play Game and Transaction With Crypto.",
    result: "1,000+ users in first week.",
  },
  {
    title: "Simulation LTE Network",
    screenshot: "/LTE.png",
    summary: "LTE Network Simulation Web.",
    link: "https://v0-lte-5-g-radio-simulation.vercel.app/",
  },
  {
    title: "ANSYS & MATLAB Simulation",
    screenshot: "/ansys.png",
    summary: "Mechanical and thermal system modeling.",
    result: "15% accuracy improvement.",
  },
  {
    title: "Kamus Digital Indonesia - Inggris",
    screenshot: "/kamus.png",
    summary: "Kamus digital Indonesia & Inggris.",
    result:
      "Temukan definisi, sinonim, dan antonim kata dalam Bahasa Indonesia dan Inggris.",
    link: "https://v0-web-dictionary-indonesian-englis.vercel.app/",
  },
  {
    title: "VRM - Mocap",
    screenshot: "/VRM-Mocap.png",
    summary: "Mocap and VRM Animation System.",
    link: "https://open-foam.vercel.app/",
  },
  {
    title: "Dapp Line",
    screenshot: "/Dapp.png",
    summary: "Dapp Portal Line with OKX and Bitget.",
    result: "Dapp Line with wallet integration.",
    link: "https://dapp-starter-six.vercel.app/",
  },
  {
    title: "Skripsi Contur + Trase",
    screenshot: "/Kontur+trase.png",
    summary: "Create Contur+trase dengan geometry 6% dan skala 1:10000.",
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
              <CardTitle className="text-base md:text-lg flex items-center justify-between">
                {p.title}

                {/* screenshot (100×50) */}
                {p.screenshot && (
                  <Image
                    src={p.screenshot}
                    alt={p.title}
                    width={100}
                    height={50}
                    className="rounded object-cover"
                  />
                )}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground md:text-base">
                {p.summary}
              </p>

              {p.result && (
                <p className="text-sm md:text-base">
                  <span className="font-medium">Outcome: </span>
                  {p.result}
                </p>
              )}

              {/* Link button */}
              {p.link && (
                <Link
                  href={p.link}
                  target="_blank"
                  className="inline-block text-blue-600 hover:underline text-sm md:text-base"
                >
                  Visit Project →
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
