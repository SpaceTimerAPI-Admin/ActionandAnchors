
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest){
  const { searchParams } = new URL(req.url)
  const parkId = searchParams.get('parkId')
  if(!parkId) return NextResponse.json({ error: 'parkId required' }, { status: 400 })
  const url = `https://api.themeparks.wiki/v1/entity/${parkId}/live`
  const res = await fetch(url, { next: { revalidate: 60 }})
  if(!res.ok) return NextResponse.json({ error: 'upstream' }, { status: 502 })
  const data = await res.json()
  const waits = (data?.liveData||[]).map((x:any)=> ({
    name: x.name, wait: x.queue?.STANDBY?.waitTime ?? null
  })).filter((x:any)=> x.wait !== null)
  const avg = waits.length ? Math.round(waits.reduce((a:number,b:any)=>a+b.wait,0)/waits.length) : 0
  return NextResponse.json({ ts: Date.now(), avg, top: waits.sort((a:any,b:any)=> b.wait-a.wait).slice(0,10) })
}
