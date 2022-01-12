import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
if (!supabaseUrl) {
  throw new Error(`NEXT_PUBLIC_SUPABASE_URL not found!`);
}

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseAnonKey) {
  throw new Error(`NEXT_PUBLIC_SUPABASE_ANON_KEY not found!`);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
