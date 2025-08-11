
'use client'
import { useState } from 'react'

export default function ChatWidget({tripId}:{tripId?:string}){
  const [messages,setMessages]=useState<{role:'user'|'assistant',content:string}[]>([
    {role:'assistant',content:'Hi! I’m your Action & Anchors trip assistant. Ask me about today’s park hours, wait times, or your itinerary.'}
  ])
  const [input,setInput]=useState('')
  const [loading,setLoading]=useState(false)

  const send = async () => {
    if(!input.trim()) return
    const user = {role:'user' as const, content: input}
    setMessages(m=>[...m,user]); setInput(''); setLoading(true)
    const res = await fetch('/api/chat', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({tripId, messages:[...messages,user]})
    })
    const data = await res.json()
    setMessages(m=>[...m,{role:'assistant',content:data.reply}])
    setLoading(false)
  }

  return (
    <div className="card">
      <div className="h-64 overflow-y-auto space-y-2">
        {messages.map((m,i)=>(
          <div key={i} className={m.role==='user'?'text-right':''}>
            <div className={`inline-block px-3 py-2 rounded-2xl ${m.role==='user'?'bg-blue-100':'bg-gray-100'}`}>{m.content}</div>
          </div>
        ))}
        {loading && <div className="text-sm text-gray-500">Thinking…</div>}
      </div>
      <div className="mt-3 flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about hours, waits, dining…" className="flex-1 border rounded-xl px-3 py-2"/>
        <button onClick={send} className="px-4 py-2 rounded-xl bg-blue-600 text-white">Send</button>
      </div>
    </div>
  )
}
