import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Logo } from "@/components/logo"

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <header className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-2">
              <Link href="/login" className="text-sm text-blue-600 hover:underline">
                Sign in
              </Link>
              <Link href="/register">
                <Button className="bg-green-600 hover:bg-green-700">Get started</Button>
              </Link>
            </div>
          </header>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h1 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl">
                Protecting Mangroves, Protecting Life
              </h1>
              <p className="text-balance text-gray-700">
                MangrooveGuard empowers communities, NGOs, and authorities to report, validate, and respond to threats
                against mangrove forests with AI-assisted workflows and transparent coordination.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="/register">
                  <Button className="w-full bg-green-600 hover:bg-green-700 sm:w-auto">Join the movement</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="w-full border-gray-300 sm:w-auto bg-transparent">
                    I already have an account
                  </Button>
                </Link>
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                <li>AI-aided incident validation</li>
                <li>Live mapping with severity overlays</li>
                <li>Gamified community engagement</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="text-base">Platform Highlights</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <Feature
                    title="Report incidences with photos"
                    desc="Auto geotag and classify issues like cutting, pollution, or reclamation."
                  />
                  <Feature
                    title="Authority dashboard"
                    desc="Filter by severity and time with satellite overlays and response logs."
                  />
                  <Feature
                    title="Earn rewards"
                    desc="Badges, points, and eco-rewards for validated reports and learning."
                  />
                </CardContent>
              </Card>

              {/* Simple image gallery */}
              <div className="rounded-md border border-gray-200 p-2">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <figure className="overflow-hidden rounded">
                    <img
                      src="/images/mangrove-tree.png"
                      alt="Mangrove tree with exposed roots and dense green canopy near shoreline"
                      className="h-40 w-full rounded object-cover"
                      loading="lazy"
                    />
                    <figcaption className="mt-1 text-center text-xs text-gray-600">Mangrove tree</figcaption>
                  </figure>
                  <figure className="overflow-hidden rounded">
                    <img
                      src="/images/mangrove-satellite.png"
                      alt="Satellite view of a coastal mangrove estuary showing winding tidal channels"
                      className="h-40 w-full rounded object-cover"
                      loading="lazy"
                    />
                    <figcaption className="mt-1 text-center text-xs text-gray-600">Satellite view</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="px-4 pb-14">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard title="Community" text="Simple reporting tools and learning modules built for mobile." />
          <InfoCard title="NGOs" text="Coordinate events and validate incidents with expert workflows." />
          <InfoCard title="Authorities" text="Prioritize responses with verified, severity-coded reports." />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Logo />
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} MangrooveGuard</p>
        </div>
      </footer>
    </main>
  )
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-md border border-gray-200 p-3">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  )
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border border-gray-200 p-4">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  )
}
