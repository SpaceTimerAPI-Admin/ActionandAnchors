
-- Clients table
create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  phone text,
  created_at timestamptz not null default now()
);

-- Trips table
create table if not exists public.trips (
  id uuid primary key default gen_random_uuid(),
  client_email text not null,
  destination text not null,
  status text not null default 'lead',
  start_date date,
  end_date date,
  created_at timestamptz not null default now()
);

create index if not exists trips_client_email_idx on public.trips (client_email);

-- Messages table (for chat / notes)
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid not null,
  sender text not null, -- 'client' | 'agent' | 'bot'
  body text not null,
  created_at timestamptz not null default now()
);

-- FK (optional, not enforced across schemas)
-- alter table public.messages add constraint messages_trip_fk foreign key (trip_id) references public.trips(id) on delete cascade;
