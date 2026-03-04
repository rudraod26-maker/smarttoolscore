import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SmartToolsCore Logo"
            width={220}
            height={100}
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-black">
            Home
          </Link>

          <Link href="/tools" className="hover:text-black">
            Tools
          </Link>

          <Link href="/ai-tools" className="hover:text-black">
            AI Guides
          </Link>

          <Link href="/finance" className="hover:text-black">
            Finance
          </Link>
        </div>

      </div>
    </nav>
  );
}