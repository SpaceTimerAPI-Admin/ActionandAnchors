
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest){
  try{
    const body = await req.json()
    const amount_cents = Number(body.amount_cents)
    const tripId = String(body.tripId||'')
    if(!amount_cents || !tripId) return NextResponse.json({ error: 'amount_cents and tripId required' }, { status: 400 })
    const key = process.env.STRIPE_SECRET_KEY
    if(!key) return NextResponse.json({ error: 'STRIPE_SECRET_KEY not set' }, { status: 500 })
    const stripe = (await import('stripe')).default
    const client = new stripe(key, { apiVersion: '2024-06-20' as any })
    const session = await client.checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Trip payment', metadata: { tripId } },
          unit_amount: amount_cents,
        },
        quantity: 1
      }],
      success_url: req.nextUrl.origin + '/portal?paid=1',
      cancel_url: req.nextUrl.origin + '/portal?canceled=1',
      metadata: { tripId }
    })
    return NextResponse.json({ url: session.url })
  }catch(e:any){
    console.error(e)
    return NextResponse.json({ error: 'checkout_error' }, { status: 500 })
  }
}
