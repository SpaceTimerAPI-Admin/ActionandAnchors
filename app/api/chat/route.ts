
import { NextRequest, NextResponse } from 'next/server'

async function getParkHours(parkId: string, dateISO: string){
  // ThemeParks.wiki example hours endpoint (no key required for public)
  // Replace with your proxy if rate-limited.
  const url = `https://api.themeparks.wiki/v1/entity/${parkId}/schedule`
  const res = await fetch(url, { next: { revalidate: 300 }})
  if(!res.ok) return { error: 'hours_unavailable' }
  const data = await res.json()
  const day = data?.schedule?.find((d:any)=> d.date === dateISO)
  return day ? { open: day?.openingTime, close: day?.closingTime, type: day?.type } : { error: 'not_found' }
}

async function getWaits(parkId: string){
  const url = `https://api.themeparks.wiki/v1/entity/${parkId}/live`
  const res = await fetch(url, { next: { revalidate: 60 }})
  if(!res.ok) return { error: 'waits_unavailable' }
  const data = await res.json()
  const waits = (data?.liveData||[])
    .filter((x:any)=>x.queue?.STANDBY?.waitTime)
    .sort((a:any,b:any)=> (b.queue.STANDBY.waitTime||0)-(a.queue.STANDBY.waitTime||0))
    .slice(0,5)
    .map((x:any)=> `${x.name}: ${x.queue.STANDBY.waitTime} min`)
  return { waits }
}

export async function POST(req: NextRequest){
  const { messages } = await req.json()
  const last = messages?.[messages.length-1]?.content?.toLowerCase() || ''
  let reply = "I'm not sure yet. Try asking: 'What are Magic Kingdom hours today?' or 'Top waits at Hollywood Studios?'"

  // Simple heuristics for MVP
  const todayISO = new Date().toISOString().slice(0,10)

  const PARKS: Record<string,string> = {
    'magic kingdom': '75ea578a-adc8-4116-a54d-dccb60765ef9',
    'epcot': '47f90d2c-e191-4239-a466-5892ef59a88b',
    'hollywood studios': '288747d1-8b4f-4a64-867e-ea7c9b27bad8',
    'animal kingdom': '1c84a229-8862-4648-9c71-378ddd2c7693',
    'universal studios florida': 'eb3f4560-2383-4a36-9152-6b3e5ed6bc57',
    'islands of adventure': '267615cc-8943-4c2a-ae2c-5da728ca591f',
    'epic universe': '12dbb85b-265f-44e6-bccf-f1faa17211fc'
  }

  for(const key of Object.keys(PARKS)){
    if(last.includes('hour') && last.includes(key)){
      const h = await getParkHours(PARKS[key], todayISO)
      if('error' in h) reply = `Sorry, I couldn't get hours for ${key} right now.`
      else reply = `${key.toUpperCase()} today: open ${h.open?.slice(11,16)} – close ${h.close?.slice(11,16)} (${h.type}).`
      return NextResponse.json({ reply })
    }
    if((last.includes('wait') || last.includes('line')) && last.includes(key)){
      const w = await getWaits(PARKS[key])
      if('error' in w) reply = `Sorry, waits are unavailable for ${key} at the moment.`
      else reply = `Top waits at ${key}:\n- ${w.waits.join('\n- ')}`
      return NextResponse.json({ reply })
    }
  }

  // Handoff trigger example
  if(last.includes('agent') || last.includes('human') || last.includes('emergency')){
    reply = "I can hand you to Anthony via text. Please share what you need help with and your mobile number (US)."
    return NextResponse.json({ reply })
  }

  // Collect phone for SMS
  const phoneMatch = last.match(/\b\+?1?\d{10}\b/)
  if(phoneMatch){
    reply = "Thanks! I've queued a handoff. Anthony will text you shortly from our travel line."
    // In production: create a Twilio conversation & notify admin webhook
    return NextResponse.json({ reply })
  }

  return NextResponse.json({ reply })
}
