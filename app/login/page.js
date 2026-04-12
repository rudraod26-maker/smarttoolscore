import { auth, signIn, signOut } from "@/auth"

export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto px-6 py-20">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Login</h1>
        <p className="text-gray-600 mb-6">Continue with Google to access your account.</p>

        <form
          action={async () => {
            "use server"
            await signIn("google", { redirectTo: "/" })
          }}
        >
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Continue with Google
          </button>
        </form>
      </div>
    </main>
  )
}


export default async function AuthButtons() {
  const session = await auth()

  if (!session?.user) {
    return (
      <form
        action={async () => {
          "use server"
          await signIn("google", { redirectTo: "/" })
        }}
      >
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
          Login with Google
        </button>
      </form>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-700">
        {session.user.name}
      </span>

      <form
        action={async () => {
          "use server"
          await signOut({ redirectTo: "/" })
        }}
      >
        <button className="bg-gray-900 text-white px-4 py-2 rounded-xl">
          Logout
        </button>
      </form>
    </div>
  )
}