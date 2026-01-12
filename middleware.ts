import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "./src/lib/i18n";

function getPreferredLocale(req: NextRequest) {
  const header = req.headers.get("accept-language") || "";
  const first = header.split(",")[0]?.toLowerCase() || "";
  if (first.startsWith("en")) return "en";
  if (first.startsWith("fr")) return "fr";
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore static / api
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) return NextResponse.next();

  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (maybeLocale && isLocale(maybeLocale)) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};