import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Action & Anchors | Disney • Universal • Royal Caribbean',
  description: 'Plan magical parks & ocean escapes with a human advisor and an AI assistant that uses live data during your trip.',
}

export default function Home(){
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-10">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h1 className="text-5xl leading-tight font-black">
              Welcome to <span className="brand-gradient">Action & Anchors</span>
            </h1>
            <p className="text-lg text-slate-700">
              I help families and friends plan unforgettable trips to <b>Disney</b>, <b>Universal Orlando</b>, and <b>Royal Caribbean</b>.
              Your client portal includes live park hours, wait-time insights, and an AI chat that can hand off to me anytime.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="#start" className="btn btn-primary">Start your trip</Link>
              <Link href="/portal" className="btn btn-ghost">Client portal</Link>
            </div>
            <ul className="text-slate-600 grid sm:grid-cols-2 gap-2 pt-1">
              <li>• Personalized day-by-day plans</li>
              <li>• Dining & showtime guidance</li>
              <li>• Live support during travel</li>
              <li>• No planning stress</li>
            </ul>
          </div>

          {/* Photo collage (replace images in /public/photos) */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-40 sm:h-56 md:h-64 rounded-xl overflow-hidden">
              <Image src="/photos/magic-kingdom.jpg" alt="Magic Kingdom" fill className="object-cover" priority />
            </div>
            <div className="relative h-40 sm:h-56 md:h-64 rounded-xl overflow-hidden">
              <Image src="/photos/diagon-alley.jpg" alt="Diagon Alley at Universal Orlando" fill className="object-cover" />
            </div>
            <div className="relative h-40 sm:h-56 md:h-64 rounded-xl overflow-hidden col-span-2">
              <Image src="/photos/royal-caribbean.jpg" alt="Royal Caribbean cruise" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-semibold text-lg">Disney Planning</h3>
            <p className="text-slate-700 mt-2">Park days, Genie+ strategies, character dining, fireworks views — tailored to your dates.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">Universal Orlando</h3>
            <p className="text-slate-700 mt-2">Express Pass tips, Hogsmeade/Diagon Alley routes, shows and thrill-ride pacing.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">Royal Caribbean</h3>
            <p className="text-slate-700 mt-2">Embarkation to excursions with dining, Wi-Fi, and ship day-by-day guidance.</p>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="start" className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="card">
            <h2 className="text-2xl font-bold mb-3">Start a Trip</h2>
            <form method="POST" action="/api/lead" className="grid sm:grid-cols-2 gap-3">
              <input name="name" placeholder="Your name" className="w-full border rounded-xl px-3 py-3" />
              <input name="email" placeholder="Email" className="w-full border rounded-xl px-3 py-3" />
              <input name="phone" placeholder="Phone" className="w-full border rounded-xl px-3 py-3 sm:col-span-1" />
              <select name="destination" className="w-full border rounded-xl px-3 py-3 sm:col-span-1">
                <option>Disney World</option>
                <option>Universal Orlando</option>
                <option>Royal Caribbean</option>
              </select>
              <button className="btn btn-primary sm:col-span-2" type="submit">Submit</button>
            </form>
            <p className="text-xs text-slate-500 mt-3">By submitting, you agree to be contacted for trip planning.</p>
          </div>
        </div>
      </section>
    </>
  )
}
