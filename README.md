
# Action & Anchors (MVP)

Next.js + Supabase + Twilio starter for:
- Marketing site
- CRM admin
- Client portal with AI chat (live park hours & waits)
- SMS handoff to Anthony

## Quick start

1) `npm i`
2) Copy `.env.example` to `.env.local` and fill values.
3) Create a Supabase project → run `db/schema.sql` in the SQL editor.
4) Start: `npm run dev` then open http://localhost:3000

## Deploy on Netlify
- Connect repo → build command `npm run build`
- Add the Next.js plugin (already included via `netlify.toml`)
- Set env vars in Netlify dashboard.

## Live data
The chat endpoint queries ThemeParks.wiki for **hours** and **live waits** using your known park IDs.
Extend `app/api/chat/route.ts` with more tools (showtimes, dining, weather).

## SMS handoff
Wire **Twilio**:
- Create Messaging Service (or a phone number).
- Set env vars: `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_MESSAGING_SERVICE_SID`.
- Point Twilio webhook to `https://YOUR_DOMAIN/api/twilio`.
- Update `app/api/chat/route.ts` to open a Twilio Conversation and notify you when a handoff occurs.

## Notes
- Styling: Tailwind minimal.
- Auth: Add Supabase Auth (magic links) next.
- Security: Add RLS policies once tables populate.

Generated 2025-08-11T01:55:05.701967 UTC.
