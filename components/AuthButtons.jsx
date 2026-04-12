import { auth, signIn, signOut } from "@/auth";

export default async function AuthButtons() {
  const session = await auth();

  if (!session?.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 active:scale-[0.98]"
        >
          {/* Google Icon */}
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.72 1.22 9.23 3.6l6.88-6.88C35.73 2.36 30.28 0 24 0 14.63 0 6.38 5.36 2.44 13.18l8.01 6.22C12.56 13.1 17.84 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24c0-1.57-.14-3.08-.4-4.55H24v9.09h12.7c-.55 2.95-2.2 5.45-4.7 7.14l7.28 5.66C43.9 36.9 46.5 30.94 46.5 24z"
            />
            <path
              fill="#FBBC05"
              d="M10.45 28.4A14.5 14.5 0 019.5 24c0-1.53.26-3 .73-4.4l-8.01-6.22A23.93 23.93 0 000 24c0 3.84.92 7.47 2.55 10.6l7.9-6.2z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.92-2.14 15.9-5.8l-7.28-5.66c-2.02 1.36-4.6 2.16-8.62 2.16-6.16 0-11.44-3.6-13.55-8.9l-7.9 6.2C6.38 42.64 14.63 48 24 48z"
            />
          </svg>

          <span className="text-sm font-medium text-gray-700">
            Continue with Google
          </span>
        </button>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-gray-200">
      <span className="text-sm text-gray-700 font-medium">
        {session.user.name}
      </span>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="text-sm text-red-500 hover:text-red-600 font-medium">
          Logout
        </button>
      </form>
    </div>
  );
}