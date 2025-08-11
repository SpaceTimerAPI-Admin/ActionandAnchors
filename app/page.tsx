
export default function Home(){
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center">
      <div className="card">
        <h1 className="text-4xl font-black brand-gradient">Action & Anchors by Anthony</h1>
        <p className="mt-3">Specializing in Orlando attractions (Disney & Universal) and Royal Caribbean cruises. Plan with a real human and a smart assistant that uses live data.</p>
        <ul className="mt-4 list-disc ml-5">
          <li>Trip design & booking</li>
          <li>Client portal with live park info</li>
          <li>AI chat + SMS handoff to Anthony</li>
        </ul>
      </div>
      <div className="card">
        <h2 className="text-2xl font-bold">Start a Trip</h2>
        <form method="POST" action="/api/lead" className="space-y-3">
          <input name="name" placeholder="Your name" className="w-full border rounded-xl px-3 py-2" />
          <input name="email" placeholder="Email" className="w-full border rounded-xl px-3 py-2" />
          <input name="phone" placeholder="Phone" className="w-full border rounded-xl px-3 py-2" />
          <select name="destination" className="w-full border rounded-xl px-3 py-2">
            <option>Disney World</option>
            <option>Universal Orlando</option>
            <option>Royal Caribbean</option>
          </select>
          <button className="w-full bg-orange-600 text-white rounded-xl py-2 font-semibold">Submit</button>
        </form>
      </div>
    </section>
  )
}
