create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  role text not null default 'student' check (role in ('student', 'admin')),
  password_hash text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table users add column if not exists role text not null default 'student';

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'users_role_check'
  ) then
    alter table users add constraint users_role_check check (role in ('student', 'admin'));
  end if;
end $$;

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists imported_students (
  student_id text primary key,
  name text not null,
  gender text,
  phone text,
  address text,
  email text not null unique,
  dob date,
  legacy_password text,
  eagle_coins integer not null default 0,
  assignments jsonb not null default '{}'::jsonb,
  course text,
  assigns_complete integer not null default 0,
  waiting_assigns jsonb not null default '[]'::jsonb,
  avatars jsonb not null default '[]'::jsonb,
  access boolean not null default false,
  active_avatar text,
  last_active timestamptz
);

create table if not exists imported_tasks (
  task_id text primary key,
  tasks jsonb not null default '[]'::jsonb,
  description text not null,
  completed boolean
);

create table if not exists imported_teams (
  team_id integer primary key,
  team_name text not null,
  created_at timestamptz,
  members jsonb not null default '[]'::jsonb,
  leader text,
  co_leader text
);

create index if not exists users_email_idx on users (email);
create index if not exists contact_messages_created_at_idx on contact_messages (created_at desc);
create index if not exists imported_students_email_idx on imported_students (email);
create index if not exists imported_students_eagle_coins_idx on imported_students (eagle_coins desc);
