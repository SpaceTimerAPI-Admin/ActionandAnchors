
export default function Badge({children, tone='info'}:{children:React.ReactNode, tone?:'success'|'warning'|'danger'|'info'}){
  const map:any = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800'
  }
  return <span className={`inline-block text-xs px-2 py-1 rounded-full ${map[tone]}`}>{children}</span>
}
