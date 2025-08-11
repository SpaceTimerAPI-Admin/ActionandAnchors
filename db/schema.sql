
-- Basic CRM schema
create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  name text,
  email text unique,
  phone text
);

create table if not exists trips (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  client_email text references clients(email) on delete set null,
  destination text,
  start_date date,
  end_date date,
  supplier text,
  status text
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  trip_id uuid references trips(id) on delete cascade,
  channel text, -- portal|sms|email
  direction text, -- in|out
  body text,
  meta jsonb
);
