import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase";
import { getResend, getFromEmail, buildEmailHtml, formatWordPressSubject } from "@/lib/resend";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("email_logs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) throw error;

    return NextResponse.json({ emails: data });
  } catch (err) {
    console.error("Email logs fetch error:", err);
    return NextResponse.json({ error: "Failed to fetch email logs" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { to, subject, body } = await request.json();

    if (!to || !subject || !body) {
      return NextResponse.json(
        { error: "Recipient, subject, and body are required" },
        { status: 400 }
      );
    }

    const emailSubject = formatWordPressSubject(subject);
    const html = buildEmailHtml(emailSubject, body, { recipientEmail: to });
    const resend = getResend();

    const { data, error } = await resend.emails.send({
      from: getFromEmail(),
      to: [to],
      subject: emailSubject,
      html,
    });

    const supabase = getSupabaseAdmin();
    await supabase.from("email_logs").insert({
      to_email: to,
      subject: emailSubject,
      body_html: html,
      status: error ? "failed" : "sent",
      resend_id: data?.id || null,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Send email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
