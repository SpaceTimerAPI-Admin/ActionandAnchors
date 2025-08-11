
import { NextRequest, NextResponse } from 'next/server'
import { admin } from '@/lib/server-supabase'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const payload = {
    name: String(form.get('name')||''),
    email: String(form.get('email')||''),
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
  // After submitting, send them to login to secure the portal
  const url = new URL('/login', process.env.APP_BASE_URL || 'http://localhost:3000')
  url.searchParams.set('email', payload.email)
  return NextResponse.redirect(url)
}
