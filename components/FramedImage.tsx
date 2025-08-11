
import Image from 'next/image'

export default function FramedImage({ src, alt, className='' }:{ src:string; alt:string; className?:string }){
  return (
    <div className={`relative rounded-2xl p-[3px] bg-gradient-to-br from-[#EE5938] via-[#F39C12] to-[#0E63C6] shadow-[0_20px_40px_rgba(2,6,23,0.15)] ${className}`}>
      {/* Important: h-full so the fill image has a height context */}
      <div className="relative h-full rounded-[calc(theme(borderRadius.2xl)-3px)] overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.15),transparent)] pointer-events-none"/>
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
    </div>
  )
}
