"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import AuthButtons from "@/components/AuthButtons";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) => {
    const isActive =
      pathname === path || (path !== "/" && pathname.startsWith(path + "/"));

    return `px-4 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? "bg-white text-blue-600 shadow-sm"
        : "text-gray-700 hover:text-blue-600 hover:bg-white"
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900 hover:scale-105 transition"
        >
          Smart<span className="text-blue-600">Tools</span>Core
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-3 bg-gray-100 p-0.5 rounded-xl border-dashed border-gray-700 shadow-lg">
          <Link href="/tools/paraphraser" className={linkClass("/tools/paraphraser")}>
            AI Paraphraser
          </Link>

          <Link href="/tools/grammar-checker" className={linkClass("/tools/grammar-checker")}>
            Grammar Checker
          </Link>

          <Link href="/blog" className={linkClass("/blog")}>
            Blogs
          </Link>

          {/* <AuthButtons /> */}
        </div>
      </div>
    </nav>
  );
}