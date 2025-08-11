
export const metadata = { title: 'Disney Must-Dos | Action & Anchors' }
export default function DisneyGuide(){
  return (
    <section className="py-10">
      <div className="mx-auto max-w-3xl px-4 space-y-4">
        <h1 className="text-3xl font-bold">Disney Must-Dos</h1>
        <ul className="list-disc ml-5 space-y-2 text-slate-700">
          <li>Rope drop your #1 ride (TRON / Rise / Flight of Passage).</li>
          <li>Mobile order meals 30–60 minutes ahead.</li>
          <li>Stake a fireworks spot 30–45 minutes early.</li>
          <li>Afternoon break to avoid peak heat and queues.</li>
        </ul>
      </div>
    </section>
  )
}
