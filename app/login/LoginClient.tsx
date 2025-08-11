
'use client'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { supabaseBrowser } from '@/lib/supabase-browser'

export default function LoginClient(){
  const [email,setEmail]=useState('')
  const [sent,setSent]=useState(false)
  const params = useSearchParams()
  const router = useRouter()

  useEffect(()=>{
    const e = params.get('email')
    if(e) setEmail(e)
  },[params])

  const sendMagic = async (e: React.FormEvent) => {
    e.preventDefault()
    const supa = supabaseBrowser()
    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    const { error } = await supa.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: origin + '/portal' }
    })
    if(error){ alert(error.message); return }
    setSent(true)
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-md px-4">
        <div className="card space-y-4">
          <h1 className="text-2xl font-bold">Client Login</h1>
          {!sent ? (
            <form onSubmit={sendMagic} className="space-y-3">
              <p className="text-slate-600 text-sm">Enter your email and we’ll send you a one-time login link.</p>
              <input
                required type="email" placeholder="you@example.com"
                value={email} onChange={e=>setEmail(e.target.value)}
                className="w-full border rounded-xl px-3 py-3"
              />
              <button className="btn btn-primary w-full" type="submit">Email me a login link</button>
            </form>
          ) : (
            <div className="space-y-2">
              <p className="font-semibold">Check your email</p>
              <p className="text-sm text-slate-600">Click the magic link to access your portal. The link will bring you back here logged in.</p>
              <button className="btn btn-ghost w-full" onClick={()=>router.push('/')}>Back to Home</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
