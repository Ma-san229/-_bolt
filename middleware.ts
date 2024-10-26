import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login",
  },
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/messages/:path*",
    "/albums/:path*",
    "/settings/:path*",
    "/subscription/:path*",
  ],
}