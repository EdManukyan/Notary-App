# Current Sprint: Sprint 4

## Objective: Authentication & Data Binding
The goal of this sprint is to replace the hardcoded UI states in the React application with live data fetched from our local Supabase database using React Query and Zustand.

## Active Tasks
- [ ] **Supabase Auth Integration**: Update `Login.tsx` and `NewCustomer.tsx` to actually trigger `supabase.auth.signInWithPassword()` and create real user sessions.
- [ ] **Global State Hydration**: Bind the active Supabase User session to our Zustand `useAuthStore` so the app knows who is logged in.
- [ ] **Dashboard Data Fetching**: Use `@tanstack/react-query` to fetch the agent's real statistics (Customer counts, Pending Requests) from the PostgreSQL database using the strongly typed Supabase client.
- [ ] **Customer List**: Wire up the "Search" and "Pending Customers" lists to query the `customers` table, enforcing the RLS policies.
