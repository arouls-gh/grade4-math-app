import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {

const session = req.cookies.get("student_session")

// allow access if logged in
if (session) {
  return NextResponse.next()
}

// otherwise redirect to login page
return NextResponse.redirect(new URL("/", req.url))

}

export const config = {
matcher: ["/workbook/:path*"]
}