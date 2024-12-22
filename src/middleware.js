import { NextResponse } from 'next/server'

export function middleware(request) {
  const visitorId = request.cookies.get('visitorId')?.value || 
    crypto.randomUUID()

  const response = NextResponse.next()

  if (!request.cookies.has('visitorId')) {
    response.cookies.set('visitorId', visitorId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30 // 30 days
    })
  }

  response.headers.set('x-visitor-id', visitorId)

  return response
}

export const config = {
  matcher: '/:path*'
}