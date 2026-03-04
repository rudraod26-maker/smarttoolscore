import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="font-bold text-lg">
          SmartToolsCore
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/ai-tools">AI Guides</Link>
          <Link href="/finance">Finance</Link>
        </nav>

      </div>
    </header>
  );
}