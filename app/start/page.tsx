
export const metadata = {
  title: 'Start a Trip | Action & Anchors',
  description: 'Tell me your dates and destination to start your Disney, Universal, or Royal Caribbean trip.',
}

export default function StartTrip(){
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="card">
          <h1 className="text-3xl font-bold mb-2">Start a Trip</h1>
          <p className="text-slate-600 mb-4">I’ll follow up to confirm details and begin planning.</p>
          <form method="POST" action="/api/lead" className="grid sm:grid-cols-2 gap-3">
            <input name="name" placeholder="Your name" className="w-full border rounded-xl px-3 py-3" required />
            <input name="email" placeholder="Email" className="w-full border rounded-xl px-3 py-3" type="email" required />
            <input name="phone" placeholder="Phone" className="w-full border rounded-xl px-3 py-3 sm:col-span-1" />
            <select name="destination" className="w-full border rounded-xl px-3 py-3 sm:col-span-1" defaultValue="Disney World">
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
  )
}
