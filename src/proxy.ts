import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_ROUTES = [
  "/home",
  "/login",
  "/register",
  "/animes",
  "/forum",
  "/",
];

export function proxy(request: NextRequest) {
  const { nextUrl, cookies } = request;

  const token = cookies.get("ani-social-token")?.value;
  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    nextUrl.pathname.startsWith(route),
  );
  const isAuthRoute =
    nextUrl.pathname.startsWith("/login") ||
    nextUrl.pathname.startsWith("/register");

  if (!token && !isPublicRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
