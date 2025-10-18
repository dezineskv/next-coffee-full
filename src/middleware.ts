import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth')?.value;
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    // Note: signature verification happens in server routes (Edge runtime limits)
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
