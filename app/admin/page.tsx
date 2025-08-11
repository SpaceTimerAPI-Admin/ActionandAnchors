
'use client'
import { useEffect, useState } from 'react'
import { supabaseBrowser } from '@/lib/supabase-browser'

type Trip = {
  id: string
  client_email: string
  destination: string
  status: string
  start_date: string | null
  end_date: string | null
  created_at: string
  itinerary_url?: string | null
}

export default function AdminCRM(){
  const [email,setEmail]=useState<string|null>(null)
  const [trips,setTrips]=useState<Trip[]>([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState<string|null>(null)
  const [selected, setSelected] = useState<Trip|null>(null)
  const supa = supabaseBrowser()

  useEffect(()=>{
    (async ()=>{
      const { data: { session } } = await supa.auth.getSession()
      const me = session?.user?.email || null
      setEmail(me)
      if(!me){
        window.location.href = '/login'
        return
      }
      const { data, error } = await supa.from('trips')
        .select('id,client_email,destination,status,start_date,end_date,created_at')
        .order('created_at', { ascending: false })
      if(error){ setError(error.message) }
      else setTrips(data as any)
      setLoading(false)
    })()
  },[])

  const updateStatus = async (tripId: string, status: string) => {
    const { error } = await supa.from('trips').update({ status }).eq('id', tripId)
    if(error) return alert(error.message)
    setTrips(t => t.map(x => x.id===tripId ? { ...x, status } : x))
  }

  const uploadItinerary = async (tripId: string, file: File) => {
    const path = `${tripId}/${Date.now()}-${file.name}`
    const { error } = await supa.storage.from('itineraries').upload(path, file, { upsert: true })
    if(error) return alert(error.message)
    const { data: { publicUrl } } = supa.storage.from('itineraries').getPublicUrl(path)
    const { error: e2 } = await supa.from('trips').update({ itinerary_url: publicUrl }).eq('id', tripId)
    if(e2) return alert(e2.message)
    setTrips(t => t.map(x => x.id===tripId ? { ...x, itinerary_url: publicUrl } : x))
    alert('Itinerary uploaded')
  }

  const newQuote = async (tripId: string) => {
    const amount = prompt('Quote amount (USD, e.g. 2499.00)?')
    if(!amount) return
    const cents = Math.round(parseFloat(amount)*100)
    const { error } = await supa.from('quotes').insert({ trip_id: tripId, amount_cents: cents, currency: 'usd', status: 'draft' })
    if(error) return alert(error.message)
    alert('Quote saved')
  }

  const checkout = async (tripId: string) => {
    const amount = prompt('Charge amount (USD, e.g. 500.00)')
    if(!amount) return
    const cents = Math.round(parseFloat(amount)*100)
    const res = await fetch('/api/payments/checkout', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ tripId, amount_cents: cents })
    })
    const data = await res.json()
    if(data.url) window.location.href = data.url
    else alert(data.error || 'Could not create checkout')
  }

  if(loading) return <div className="p-8">Loading CRM…</div>
  if(error) return <div className="p-8 text-red-700">Error: {error}</div>

  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">CRM</h1>
            <p className="text-sm text-slate-600">Signed in as {email}</p>
          </div>
          <a href="/" className="btn btn-ghost">Home</a>
        </header>

        <div className="card">
          <h2 className="text-xl font-semibold mb-3">All Trip Requests</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-slate-500">
                <tr><th className="py-2">Created</th><th>Client</th><th>Destination</th><th>Status</th><th>Itinerary</th><th className="text-right">Actions</th></tr>
              </thead>
              <tbody>
                {trips.map(t=> (
                  <tr key={t.id} className="border-t">
                    <td className="py-2">{new Date(t.created_at).toLocaleString()}</td>
                    <td>{t.client_email}</td>
                    <td>{t.destination}</td>
                    <td>
                      <select defaultValue={t.status} onChange={e=>updateStatus(t.id, e.target.value)} className="border rounded px-2 py-1">
                        <option>lead</option>
                        <option>planning</option>
                        <option>booked</option>
                        <option>completed</option>
                      </select>
                    </td>
                    <td>
                      {t.itinerary_url ? <a className="text-blue-600 underline" href={t.itinerary_url} target="_blank">View</a> : '—'}
                    </td>
                    <td className="text-right space-x-2 py-2">
                      <label className="btn btn-ghost">
                        Upload itinerary
                        <input type="file" className="hidden" onChange={e=> e.target.files && uploadItinerary(t.id, e.target.files[0]) } />
                      </label>
                      <button className="btn btn-ghost" onClick={()=>newQuote(t.id)}>Quote</button>
                      <button className="btn btn-primary" onClick={()=>checkout(t.id)}>Take payment</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
