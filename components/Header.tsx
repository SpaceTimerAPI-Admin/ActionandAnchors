
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { href: '/disney', label: 'Disney' },
  { href: '/universal', label: 'Universal' },
  { href: '/royal', label: 'Royal Caribbean' },
  { href: '/portal', label: 'Client Portal' },
  { href: '/admin', label: 'CRM' },
]

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full sticky top-0 z-50 bg-[var(--aa-bg)]/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo now expected at /public/photos/logo.png */}
          <Image src="/photos/logo.png" width={56} height={56} alt="Action & Anchors logo" className="rounded-md" priority />
          <span className="hidden sm:block text-xl font-extrabold brand-gradient">Action & Anchors</span>
        </Link>

        <div className="hidden md:flex items-center gap-5 text-sm">
          {nav.map(n => (<Link key={n.href} href={n.href} className="hover:underline">{n.label}</Link>))}
        </div>

        <button className="md:hidden" aria-label="Open menu" onClick={()=>setOpen(v=>!v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
            {nav.map(n => (<Link key={n.href} href={n.href} className="py-2">{n.label}</Link>))}
          </div>
        </div>
      )}
    </header>
  )
}
