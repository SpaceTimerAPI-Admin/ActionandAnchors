
import { NextRequest, NextResponse } from 'next/server'
import { admin } from '@/lib/server-supabase'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const emailRaw = String(form.get('email')||'').trim()
  const email = emailRaw.toLowerCase()
  const payload = {
    name: String(form.get('name')||''),
    email,
    phone: String(form.get('phone')||''),
    destination: String(form.get('destination')||''),
    created_at: new Date().toISOString(),
    status: 'lead'
  }
  try{
    const supa = admin()
    await supa.from('clients').upsert({ name: payload.name, email: payload.email, phone: payload.phone })
    await supa.from('trips').insert({ client_email: payload.email, destination: payload.destination, status: 'lead' })
  }catch(e){
    console.error(e)
  }
  const origin = req.nextUrl.origin
  const url = new URL('/login', origin)
  url.searchParams.set('email', payload.email)
  return NextResponse.redirect(url)
}
