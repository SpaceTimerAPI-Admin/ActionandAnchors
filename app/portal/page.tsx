
import ChatWidget from '@/components/ChatWidget'

export default function Portal(){
  // Future: fetch user trips; for MVP, static
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Client Portal</h1>
      <div className="card">
        <h2 className="text-xl font-semibold">Your Itinerary</h2>
        <p>Trip: Orlando (Disney & Universal) • Dates: TBD</p>
      </div>
      <ChatWidget />
    </section>
  )
}
