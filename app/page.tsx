
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

            {/* Profile welcome (now reads from /photos/anthony.jpg) */}
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-full ring-4 ring-[#0E63C6]/20 shadow-lg overflow-hidden">
                <Image src="/photos/anthony.jpg" alt="Anthony McHugh headshot" fill className="object-cover" priority />
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
    </>
  )
}
