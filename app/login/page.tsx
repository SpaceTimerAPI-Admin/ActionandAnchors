
import { Suspense } from 'react'
import LoginClient from './LoginClient'

// Keep this config on the server side to avoid client/runtime issues
export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Client Login | Action & Anchors',
}

export default function LoginPage(){
  return (
    <Suspense fallback={<section className="py-16"><div className="mx-auto max-w-md px-4"><div className="card">Loading…</div></div></section>}>
      <LoginClient />
    </Suspense>
  )
}
