import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export { default } from "next-auth/middleware";
export async function middleware(request: NextRequest) {
  // Get the token from the request

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const url = request.nextUrl;

  // Define paths that require authentication
  const notProtectedPaths = ['/', '/sign-up', 'sign-in'];

  // Check if the request is for a protected path
  const isNotProtectedPath = notProtectedPaths.some((path) => request.nextUrl.pathname.startsWith(path));
  console.log(url.pathname)
  console.log(token)
  console.log(NextResponse)
  console.log('Request URL:', request.nextUrl.pathname);
  console.log('Token:', token);
  console.log('Is Not Protected Path:', isNotProtectedPath);
  if (url.pathname.startsWith('/home') && !token) {
    // If the user is not authenticated, redirect to the sign-in page
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
  if (isNotProtectedPath && token) {
    // If the user is authenticated, redirect to the home page
    return NextResponse.redirect(new URL('/home', request.url));
  }
  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/home', '/home/:path*'], // Define the paths to apply the middleware
};