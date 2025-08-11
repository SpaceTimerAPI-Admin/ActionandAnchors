
import FramedImage from '@/components/FramedImage'
import ParkTile from '@/components/ParkTile'
import Link from 'next/link'

export const metadata = {
  title: 'Universal Orlando Planning | Action & Anchors',
  description: 'Custom Universal itineraries + Express Pass strategy, Wizarding World planning, and live tips in your portal.',
}

export default function UniversalPage(){
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-10">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl font-black">Universal Orlando Planning</h1>
            <p className="text-lg text-slate-700">
              From <b>Express Pass</b> choices to the best way to do <b>Diagon Alley ↔ Hogsmeade</b>, I’ll build a smooth plan for thrill rides and shows without burning out.
              Your portal includes live info and an assistant that can hand off to me anytime.
            </p>
            <div className="flex gap-3">
              <Link href="#start" className="btn btn-primary">Start your Universal trip</Link>
              <Link href="/portal" className="btn btn-ghost">Client portal</Link>
            </div>
          </div>
          <FramedImage
            src="/photos/universal-hero.jpg"
            alt="Universal Orlando skyline"
            className="h-48 sm:h-72 md:h-80"
          />
        </div>
      </section>

      {/* Parks */}
      <section className="py-10 bg-white/60">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold mb-6">Pick your park</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ParkTile
              title="Universal Studios Florida"
              img="/photos/universal-studios-florida.jpg"
              blurb="Diagon Alley, Transformers, Rip Ride Rockit, and shows. We’ll time Gringotts and the parade."
            />
            <ParkTile
              title="Islands of Adventure"
              img="/photos/islands-of-adventure.jpg"
              blurb="Hogsmeade, VelociCoaster, and Spider‑Man. Smart morning routing keeps waits down."
            />
            <ParkTile
              title="Epic Universe"
              img="/photos/epic-universe.jpg"
              blurb="The newest park with next‑gen lands. We’ll plan ahead for virtual queues and headliners."
            />
            <ParkTile
              title="Volcano Bay"
              img="/photos/volcano-bay.jpg"
              blurb="TapuTapu tips, lazy river vs. slides, and cabana strategy for a relaxed water‑park day."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="card">
            <h2 className="text-2xl font-bold mb-3">Tell me your dates & party size</h2>
            <form method="POST" action="/api/lead" className="grid sm:grid-cols-2 gap-3">
              <input name="name" placeholder="Your name" className="w-full border rounded-xl px-3 py-3" />
              <input name="email" placeholder="Email" className="w-full border rounded-xl px-3 py-3" />
              <input name="phone" placeholder="Phone" className="w-full border rounded-xl px-3 py-3 sm:col-span-1" />
              <select name="destination" className="w-full border rounded-xl px-3 py-3 sm:col-span-1" defaultValue="Universal Orlando">
                <option>Universal Orlando</option>
                <option>Disney World</option>
                <option>Royal Caribbean</option>
              </select>
              <button className="btn btn-primary sm:col-span-2" type="submit">Start planning</button>
            </form>
            <p className="text-xs text-slate-500 mt-3">No planning fee. I’m paid by the suppliers.</p>
          </div>
        </div>
      </section>
    </>
  )
}
