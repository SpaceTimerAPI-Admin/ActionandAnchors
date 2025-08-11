
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { Ship, Castle, Landmark } from 'lucide-react'

export default function StyleGuide(){
  return (
    <section className="section">
      <div className="container space-y-8">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-black brand-gradient">Action & Anchors • Style Guide</h1>
          <p className="text-slate-600">Design tokens, components, and patterns for the site.</p>
        </header>

        <Card className="space-y-4">
          <h2 className="text-xl font-bold">Colors</h2>
          <div className="grid sm:grid-cols-5 gap-3">
            {[
              ['Primary','var(--aa-primary)'],
              ['Accent','var(--aa-accent)'],
              ['Success','var(--aa-success)'],
              ['Warning','var(--aa-warning)'],
              ['Danger','var(--aa-danger)'],
            ].map(([label, varName])=>(
              <div key={label} className="p-4 rounded-xl border">
                <div className="h-12 rounded-lg mb-2" style={{background:`var(${varName})`}} />
                <div className="text-sm">{label}</div>
                <code className="text-xs text-slate-500">{varName}</code>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-3">
          <h2 className="text-xl font-bold">Buttons</h2>
          <div className="flex gap-3 flex-wrap">
            <Button>Primary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button loading>Loading</Button>
            <Button icon={<Ship className="w-4 h-4" />}>Cruise CTA</Button>
          </div>
        </Card>

        <Card className="space-y-3">
          <h2 className="text-xl font-bold">Badges</h2>
          <div className="flex gap-2 flex-wrap">
            <Badge tone="success">Open</Badge>
            <Badge tone="warning">Crowded</Badge>
            <Badge tone="danger">Closed</Badge>
            <Badge tone="info">Info</Badge>
          </div>
        </Card>

        <Card className="space-y-3">
          <h2 className="text-xl font-bold">Iconography</h2>
          <div className="flex gap-6 text-slate-700">
            <Castle /> <Landmark /> <Ship />
          </div>
        </Card>

        <footer className="text-center text-sm text-slate-500">
          Need alternative themes (dark / nautical)? We can drop in overrides for the CSS variables.
        </footer>
      </div>
    </section>
  )
}
