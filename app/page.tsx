
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Ship, Castle, Landmark, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home(){
  return (
    <>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h1 className="text-5xl leading-tight font-black">
              Plan magical parks & ocean escapes with <span className="brand-gradient">Action & Anchors</span>
            </h1>
            <p className="text-lg text-slate-700">
              Disney • Universal • Royal Caribbean — expert guidance + a smart assistant that uses live data during your trip.
            </p>
            <div className="flex gap-3">
              <Link href="#start"><Button icon={<ArrowRight className="w-4 h-4" />}>Start your trip</Button></Link>
              <Link href="/portal"><Button variant="ghost">Client portal</Button></Link>
            </div>
            <div className="flex gap-6 pt-2 text-slate-600">
              <span className="inline-flex items-center gap-2"><Castle className="w-4 h-4" /> Disney & Universal expertise</span>
              <span className="inline-flex items-center gap-2"><Ship className="w-4 h-4" /> Royal Caribbean certified</span>
            </div>
          </div>
          <div className="relative">
            <Card className="p-0 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold">During-Trip Live Help</h3>
                <p className="text-slate-700">Your portal shows today’s park hours and busiest rides. Ask the AI or handoff to Anthony by text.</p>
              </div>
              <img src="/waves.svg" alt="waves" className="w-full" />
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center gap-3"><Castle /><h3 className="font-semibold">Disney Planning</h3></div>
            <p className="text-slate-700 mt-2">Park hours, Genie+ strategy, dining and special events — curated for your dates.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3"><Landmark /><h3 className="font-semibold">Universal Orlando</h3></div>
            <p className="text-slate-700 mt-2">Express Pass tips, showtimes, and wait-time heatmaps in your client portal.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3"><Ship /><h3 className="font-semibold">Royal Caribbean</h3></div>
            <p className="text-slate-700 mt-2">Embarkation to excursions — Wi‑Fi, dining, and ship day-by-day plans.</p>
          </Card>
        </div>
      </section>

      <section id="start" className="section">
        <div className="container">
          <Card className="p-6">
            <h2 className="text-2xl font-bold">Start a Trip</h2>
            <form method="POST" action="/api/lead" className="mt-4 grid sm:grid-cols-2 gap-3">
              <input name="name" placeholder="Your name" className="w-full border rounded-xl px-3 py-3" />
              <input name="email" placeholder="Email" className="w-full border rounded-xl px-3 py-3" />
              <input name="phone" placeholder="Phone" className="w-full border rounded-xl px-3 py-3 sm:col-span-1" />
              <select name="destination" className="w-full border rounded-xl px-3 py-3 sm:col-span-1">
                <option>Disney World</option>
                <option>Universal Orlando</option>
                <option>Royal Caribbean</option>
              </select>
              <div className="sm:col-span-2">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </>
  )
}
