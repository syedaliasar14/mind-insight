import { auth } from '@/app/auth';
import { NextResponse } from 'next/server';
export { auth as middleware } from "@/app/auth"

/* export default auth(async (req) => {
  // Perform any custom logic with the request
  const url = req.nextUrl.clone();
  
  if (url.pathname.startsWith('/protected')) {
    const session = await auth(req);
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; */
