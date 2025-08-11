
'use client'
import { useEffect, useState } from 'react'

const PARKS = [
  { name:'Magic Kingdom', id:'75ea578a-adc8-4116-a54d-dccb60765ef9' },
  { name:'EPCOT', id:'47f90d2c-e191-4239-a466-5892ef59a88b' },
  { name:'Hollywood Studios', id:'288747d1-8b4f-4a64-867e-ea7c9b27bad8' },
  { name:'Animal Kingdom', id:'1c84a229-8862-4648-9c71-378ddd2c7693' },
]

export default function DisneyDash(){
  const [park, setPark] = useState(PARKS[0])
  const [series, setSeries] = useState<{ts:number, avg:number}[]>([])
  const [top, setTop] = useState<{name:string, wait:number}[]>([])

  useEffect(()=>{
    setSeries([]) // reset when park changes
    const tick = async () => {
      const res = await fetch(`/api/waits?parkId=${park.id}`)
      const data = await res.json()
      setSeries(s => [...s.slice(-19), { ts: data.ts, avg: data.avg }])
      setTop(data.top)
    }
    tick()
    const id = setInterval(tick, 120000) // every 2 min
    return ()=> clearInterval(id)
  },[park])

  // simple sparkline
  const w=560, h=120, pad=8
  const values = series.map(p=>p.avg)
  const max = Math.max(60, ...values, 1)
  const pts = series.map((p,i)=>{
    const x = pad + i*( (w-2*pad)/Math.max(series.length-1,1) )
    const y = h - pad - (p.avg/max)*(h-2*pad)
    return `${x},${y}`
  }).join(' ')

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Disney Dashboard</h1>
          <select value={park.id} onChange={e=>setPark(PARKS.find(p=>p.id===e.target.value)!)}
            className="border rounded-xl px-3 py-2">
            {PARKS.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </header>

        <div className="card">
          <h2 className="font-semibold mb-2">Average Standby Wait (last ~40 min)</h2>
          <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-32">
            <rect x="0" y="0" width={w} height={h} fill="white" rx="12"/>
            {series.length>1 && <polyline fill="none" stroke="#0E63C6" strokeWidth="3" points={pts} />}
          </svg>
          <div className="text-sm text-slate-600">Auto-refreshes every 2 minutes while open.</div>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-2">Top waits right now</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {top.map((t,i)=> (
              <li key={i} className="border rounded-xl px-3 py-2 flex justify-between">
                <span className="truncate">{t.name}</span>
                <span className="font-semibold">{t.wait} min</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
