
-- Enable RLS
alter table if exists clients enable row level security;
alter table if exists trips enable row level security;
alter table if exists messages enable row level security;

-- Policies (idempotent drop/create pattern omitted for brevity)
create policy if not exists "client can view self" on clients
  for select using ( lower(email) = lower(auth.email()) );

create policy if not exists "client can view own trips" on trips
  for select using ( lower(client_email) = lower(auth.email()) );

create policy if not exists "client can read own messages" on messages
  for select using (
    exists (
      select 1 from trips t
      where t.id = messages.trip_id
        and lower(t.client_email) = lower(auth.email())
    )
  );
