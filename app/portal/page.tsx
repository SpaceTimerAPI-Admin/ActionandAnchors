
'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseBrowser } from '@/lib/supabase-browser'
import ChatWidget from '@/components/ChatWidget'

type Trip = {
  id: string
  destination: string
  status: string
  start_date: string | null
  end_date: string | null
  created_at: string
}

export default function Portal(){
  const router = useRouter()
  const [email,setEmail]=useState<string|null>(null)
  const [trips,setTrips]=useState<Trip[]>([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState<string|null>(null)

  useEffect(()=>{
    const load = async () => {
      const supa = supabaseBrowser()
      const { data: { session } } = await supa.auth.getSession()
      if(!session?.user?.email){ router.push('/login'); return }
      setEmail(session.user.email)
      const { data, error } = await supa.from('trips')
        .select('id,destination,status,start_date,end_date,created_at')
        .ilike('client_email', session.user.email)  // case-insensitive match
        .order('created_at', { ascending: false })
      if(error){ setError(error.message) }
      if(!error && data) setTrips(data as any)
      setLoading(false)
    }
    load()
  },[router])

  if(loading) return <div className="p-8 text-slate-600">Loading your portal…</div>

  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Your Portal</h1>
          <p className="text-slate-600 text-sm">Signed in as {email}</p>
        </div>
        <a className="btn btn-ghost" href="/guides">Quick Guides</a>
      </header>

      {error && (
        <div className="card border-red-200 bg-red-50 text-red-800">
          <div className="font-semibold">Trouble loading trips</div>
          <div className="text-sm">{error}</div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold">Trip Requests</h2>
          <p className="text-slate-600 text-sm mb-3">Think of these like tickets. I’ll update statuses as we plan.</p>
          {trips.length===0 ? (
            <div className="min-h-[160px] flex items-center justify-center">
              <a href="/start" className="btn btn-primary">Plan a Trip</a>
            </div>
          ) : (
            <ul className="space-y-3">
              {trips.map(t=> (
                <li key={t.id} className="border rounded-xl p-3">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{t.destination}</div>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">{t.status||'lead'}</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Created {new Date(t.created_at).toLocaleDateString()} {t.start_date? `• ${t.start_date} → ${t.end_date}`:''}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Ask the Assistant</h2>
          <ChatWidget />
          <div className="text-xs text-slate-500 mt-2">Ask for hours, top waits, or handoff to me anytime.</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <a href="/dashboards/disney" className="card block hover:shadow-xl transition">
          <h3 className="font-semibold">Disney Dashboard</h3>
          <p className="text-slate-600 text-sm">Live wait snapshots, updated every 2 minutes while open.</p>
        </a>
        <a href="/dashboards/universal" className="card block hover:shadow-xl transition">
          <h3 className="font-semibold">Universal Dashboard</h3>
          <p className="text-slate-600 text-sm">See top rides and average waits trend.</p>
        </a>
      </div>
    </section>
  )
}
