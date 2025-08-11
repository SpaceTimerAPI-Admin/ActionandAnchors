
'use client'
import Link from 'next/link'
export default function Header(){
  return (
    <header className="w-full py-4">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-extrabold brand-gradient">Action & Anchors</Link>
        <div className="space-x-4 text-sm">
          <Link href="/disney">Disney</Link>
          <Link href="/universal">Universal</Link>
          <Link href="/royal">Royal Caribbean</Link>
          <Link href="/portal">Client Portal</Link>
          <Link href="/admin">CRM</Link>
        </div>
      </nav>
    </header>
  )
}
