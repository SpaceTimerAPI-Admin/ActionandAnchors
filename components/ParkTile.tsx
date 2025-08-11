
import FramedImage from '@/components/FramedImage'
import Link from 'next/link'

export default function ParkTile({
  title, img, blurb
}:{
  title: string
  img: string
  blurb: string
}){
  return (
    <div className="space-y-3">
      <FramedImage src={img} alt={title} className="h-48 sm:h-56 md:h-60" />
      <div className="px-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-slate-600 text-sm">{blurb}</p>
        <div className="pt-3">
          <Link href="#start" className="btn btn-ghost">Plan this park</Link>
        </div>
      </div>
    </div>
  )
}
