import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const token = request.cookies.get('accessToken')?.value;

    if(!token) {
        if(request.nextUrl.pathname.includes('/login')){
            return NextResponse.next()
        }
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(token && request.nextUrl.pathname == '/login'){
        return NextResponse.redirect(new URL('/cursos', request.url))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login/:path*', '/cursos'],
}