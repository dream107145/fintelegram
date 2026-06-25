import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export function getSupabaseAdmin() {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing Supabase environment variables");
  }
  return createClient(supabaseUrl, supabaseServiceKey);
}

export type LoginCredential = {
  id: string;
  email: string | null;
  username: string | null;
  password: string;
  ip_address: string | null;
  user_agent: string | null;
  page: string | null;
  created_at: string;
};

export type EmailLog = {
  id: string;
  to_email: string;
  subject: string;
  body_html: string | null;
  status: string;
  resend_id: string | null;
  created_at: string;
};
