export { auth as middleware } from "@/auth"

export const config = {
  matcher: ["/tools/:path*", "/dashboard/:path*"],
}

import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return <div>Protected dashboard</div>
}

