import { auth, signIn, signOut } from "@/auth"

async function AuthButtons() {
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

export default function Page() {
  return <AuthButtons />
}