import { NextRequest, NextResponse } from "next/server";

const ALLOWED_HOSTS = new Set([
  "fintelegram.com",
  "b1713133.smushcdn.com",
  "www.fintelegram.com",
]);

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("url");
  if (!raw) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(raw);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (!ALLOWED_HOSTS.has(target.hostname)) {
    return NextResponse.json({ error: "Host not allowed" }, { status: 403 });
  }

  const fetchUrl =
    target.hostname === "fintelegram.com" || target.hostname === "www.fintelegram.com"
      ? `https://r.jina.ai/${target.toString()}`
      : target.toString();

  const upstream = await fetch(fetchUrl, {
    next: { revalidate: 3600 },
  });

  if (!upstream.ok) {
    return NextResponse.json({ error: "Upstream failed" }, { status: upstream.status });
  }

  const contentType = upstream.headers.get("content-type") ?? "image/jpeg";
  const buffer = await upstream.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
