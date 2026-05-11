import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

// Replace these with your actual Supabase project credentials when ready
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseAnonKey = 'your-anon-key';

// Initialize the strongly typed Supabase client
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
