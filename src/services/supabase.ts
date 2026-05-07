import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project credentials when ready
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
