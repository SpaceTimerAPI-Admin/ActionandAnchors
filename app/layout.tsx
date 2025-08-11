
import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Action & Anchors',
  description: 'Disney, Universal & Royal Caribbean travel planning',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4 pb-16">{children}</main>
      </body>
    </html>
  )
}
