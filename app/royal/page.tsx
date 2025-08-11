
import Link from 'next/link'
import { Ship, Bell } from 'lucide-react'

export const metadata = {
  title: "Royal Caribbean — Offering Soon | Action & Anchors",
  description: "We're adding dedicated Royal Caribbean planning features soon. Join the waitlist to be notified.",
}

export default function RoyalComingSoon(){
  return (
    <section className="pt-10 pb-16">
      <div className="mx-auto max-w-6xl px-4 space-y-10">
        <header className="space-y-3 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-700">
            <Ship className="w-7 h-7" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">Royal Caribbean <span className="text-slate-400 font-extrabold">— Offering Soon</span></h1>
          <p className="text-slate-700 max-w-2xl mx-auto">
            I’m building a dedicated Royal Caribbean experience with ship tracking, day-by-day plans, dining & Wi-Fi tips, and live help during your cruise.
            Leave your info and I’ll notify you the moment it launches.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card space-y-3">
            <h2 className="text-xl font-bold">What’s coming</h2>
            <ul className="list-disc ml-5 text-slate-700 space-y-2">
              <li>Ship & itinerary view with port days and sea days</li>
              <li>Dining, shows, dress codes, Wi-Fi & beverage package guidance</li>
              <li>Live trip assistant with SMS handoff to me</li>
              <li>Optional alerts: embarkation reminders, port arrival times</li>
            </ul>
            <div className="pt-2">
              <Link href="/" className="btn btn-ghost">Back to Home</Link>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-2 mb-3">
              <Bell className="w-5 h-5" />
              <h2 className="text-xl font-bold">Join the waitlist</h2>
            </div>
            <form method="POST" action="/api/lead" className="grid sm:grid-cols-2 gap-3">
              <input name="name" placeholder="Your name" className="w-full border rounded-xl px-3 py-3" required />
              <input name="email" placeholder="Email" className="w-full border rounded-xl px-3 py-3" type="email" required />
              <input name="phone" placeholder="Phone (optional)" className="w-full border rounded-xl px-3 py-3 sm:col-span-2" />
              <input type="hidden" name="destination" value="Royal Caribbean (Waitlist)" />
              <button className="btn btn-primary sm:col-span-2" type="submit">Notify me when it’s ready</button>
            </form>
            <p className="text-xs text-slate-500 mt-3">No spam—just a heads up when Royal Caribbean planning goes live.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
