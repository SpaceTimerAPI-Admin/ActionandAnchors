
'use client'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean; icon?: ReactNode; variant?: 'primary'|'ghost' }
export default function Button({ loading, icon, children, className='', variant='primary', ...rest }: Props){
  return (
    <button {...rest} className={`btn ${variant==='primary'?'btn-primary':'btn-ghost'} ${className}`}>
      {loading ? <Loader2 className="animate-spin w-4 h-4" /> : icon}
      <span>{children}</span>
    </button>
  )
}
