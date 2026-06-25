import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/pms-login" || pathname === "/pms-login/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname === "/pms-register" || pathname === "/pms-register/") {
    return NextResponse.redirect(new URL("/register", request.url));
  }
  if (pathname === "/wp-login.php") {
    const url = new URL("/wp-login", request.url);
    request.nextUrl.searchParams.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
    return NextResponse.redirect(url);
  }
  if (pathname === "/wp-admin" || pathname === "/wp-admin/") {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/pms-login", "/pms-register", "/wp-login.php", "/wp-admin"],
};
