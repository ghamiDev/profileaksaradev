import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Deteksi negara dari IP via Vercel Geo headers
  // Di Vercel: request.geo?.country tersedia di runtime, atau via header x-vercel-ip-country
  // Di local development, fallback ke header x-forwarded-for atau empty string
  let country = "";

  // Coba dari request.geo (runtime Vercel)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const geo = (request as any).geo;
  if (geo?.country) {
    country = geo.country;
  }

  // Fallback ke header
  if (!country) {
    country = request.headers.get("x-vercel-ip-country") || "";
  }

  // Simpan kode negara ke cookie untuk dibaca oleh client component
  response.cookies.set("aksara-country", country, {
    maxAge: 60 * 60 * 24 * 7, // 7 hari
    path: "/",
    httpOnly: false, // biar bisa dibaca oleh JavaScript client
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: "/:path*",
};
