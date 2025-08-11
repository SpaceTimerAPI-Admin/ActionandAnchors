
-- Enable RLS
alter table if exists clients enable row level security;
alter table if exists trips enable row level security;
alter table if exists messages enable row level security;

-- Clients: a user can see/update their own row by email
create policy "client can view self" on clients
  for select using ( email = auth.email() );

-- Trips: a user can see their trips by email
create policy "client can view own trips" on trips
  for select using ( client_email = auth.email() );

-- Messages: a user can read messages for their trips
create policy "client can read own messages" on messages
  for select using ( exists (select 1 from trips t where t.id = messages.trip_id and t.client_email = auth.email()) );
