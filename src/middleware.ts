import { NextRequest, NextResponse } from "next/server";
import { LEGACY_REDIRECTS } from "@/lib/routes";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const legacyTarget = LEGACY_REDIRECTS[pathname];
  if (legacyTarget) {
    const url = new URL(legacyTarget, request.url);
    request.nextUrl.searchParams.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/wp-login",
    "/home",
    "/admin/:path*",
  ],
};
