
export const metadata = { title: 'Quick Guides | Action & Anchors' }

export default function Guides(){
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        <header>
          <h1 className="text-3xl font-bold">Quick Guides</h1>
          <p className="text-slate-600">Must-dos and fast tips for busy days.</p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="/guides/disney" className="card block hover:shadow-xl transition">
            <h2 className="font-semibold">Disney Must-Dos</h2>
            <p className="text-slate-600 text-sm">Headliners + parade/fireworks strategy.</p>
          </a>
          <a href="/guides/universal" className="card block hover:shadow-xl transition">
            <h2 className="font-semibold">Universal Must-Dos</h2>
            <p className="text-slate-600 text-sm">Wizarding World routing + Express tips.</p>
          </a>
        </div>
      </div>
    </section>
  )
}
