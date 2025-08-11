
import Image from 'next/image'
import Link from 'next/link'
import FramedImage from '@/components/FramedImage'
import ParkTile from '@/components/ParkTile'

export const metadata = {
  title: 'Disney World Planning | Action & Anchors',
  description: 'Custom Disney itineraries + live park info in your client portal. Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom.',
}

export default function DisneyPage(){
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-10">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl font-black">Disney World Planning</h1>
            <p className="text-lg text-slate-700">
              From <b>Genie+ strategy</b> to the best fireworks views, I’ll design your days around your family’s pace.
              Your portal shows live <b>park hours</b>, <b>wait-time trends</b>, and answers questions while you’re there.
            </p>
            <div className="flex gap-3">
              <Link href="#start" className="btn btn-primary">Start your Disney trip</Link>
              <Link href="/portal" className="btn btn-ghost">Client portal</Link>
            </div>
          </div>
          <FramedImage
            src="/photos/disney-hero.jpg"
            alt="Disney World fireworks over the castle"
            className="h-48 sm:h-72 md:h-80"
          />
        </div>
      </section>

      {/* Four parks */}
      <section className="py-10 bg-white/60">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold mb-6">Choose your park</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ParkTile
              title="Magic Kingdom"
              img="/photos/disney-magic-kingdom.jpg"
              blurb="Classics + headliners. We’ll time TRON, Seven Dwarfs, and parades around naps and meals."
            />
            <ParkTile
              title="EPCOT"
              img="/photos/disney-epcot.jpg"
              blurb="Guardians, Frozen, and World Showcase food. We’ll plan a smooth loop and fireworks spot."
            />
            <ParkTile
              title="Hollywood Studios"
              img="/photos/disney-hollywood-studios.jpg"
              blurb="Star Wars: Galaxy’s Edge, Tower of Terror, Slinky Dog… balanced to avoid wall-to-wall queues."
            />
            <ParkTile
              title="Animal Kingdom"
              img="/photos/disney-animal-kingdom.jpg"
              blurb="Flight of Passage, Kilimanjaro Safaris, and shows — with the right morning strategy."
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
              <select name="destination" className="w-full border rounded-xl px-3 py-3 sm:col-span-1" defaultValue="Disney World">
                <option>Disney World</option>
                <option>Universal Orlando</option>
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
