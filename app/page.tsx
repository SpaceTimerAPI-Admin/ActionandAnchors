
import Image from 'next/image'
import Link from 'next/link'
import FramedImage from '@/components/FramedImage'

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

            {/* Profile welcome */}
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-full ring-4 ring-[#0E63C6]/20 shadow-lg overflow-hidden">
                {/* Upload your photo to /public/profile/anthony.jpg */}
                <Image src="/profile/anthony.jpg" alt="Anthony McHugh headshot" fill className="object-cover" priority />
              </div>
              <div>
                <p className="font-semibold">Hey, I'm Anthony 👋</p>
                <p className="text-slate-600 text-sm">Your Orlando & cruising trip planner. Let’s make this effortless.</p>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap pt-1">
              <Link href="#start" className="btn btn-primary">Start your trip</Link>
              <Link href="/portal" className="btn btn-ghost">Client portal</Link>
            </div>
          </div>

          {/* Photo collage with frames */}
          <div className="grid grid-cols-2 gap-3">
            <FramedImage src="/photos/magic-kingdom.jpg" alt="Magic Kingdom" className="h-40 sm:h-56 md:h-64" />
            <FramedImage src="/photos/diagon-alley.jpg" alt="Diagon Alley at Universal Orlando" className="h-40 sm:h-56 md:h-64" />
            <FramedImage src="/photos/royal-caribbean.jpg" alt="Royal Caribbean cruise" className="h-40 sm:h-56 md:h-64 col-span-2" />
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
