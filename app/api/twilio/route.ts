
import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

export async function POST(req: NextRequest){
  // This would process inbound SMS (after configuring Twilio webhook)
  // For now, just acknowledge.
  return NextResponse.json({ ok: true })
}
