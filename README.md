# SAINA Network OS — v0.3

A production-ready Next.js App Router foundation for a private professional identity and curated relationship platform.

## Included

- Public landing page
- Email/password and Google authentication UI
- Multi-step Professional Identity Builder
- Member dashboard
- Profile Depth and Dynamic Identity
- Journey, Resources, Match Requests and Shared File
- Responsive desktop/mobile UI
- Supabase client scaffold
- PostgreSQL schema and Row Level Security policies
- Local demo fallback when Supabase environment variables are absent

## Local run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Enable real accounts and saved profiles

1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`.
3. Copy `.env.example` to `.env.local`.
4. Add the Supabase Project URL and anon/publishable key.
5. In Supabase Authentication, enable Email and optionally Google.
6. Add your local and Vercel callback URLs to Supabase Auth URL configuration.
7. Deploy to Vercel and add the same environment variables in Project Settings → Environment Variables.

## Important current behavior

The app runs immediately without credentials using browser-local demo storage. Authentication switches to Supabase once environment variables are present. The project includes the database schema and security layer; the next implementation step is replacing profile localStorage writes with Supabase table upserts after the project keys are connected.

## Deploy

Push the project folder contents to GitHub, import the repository in Vercel, then deploy. No traditional web hosting is required.
