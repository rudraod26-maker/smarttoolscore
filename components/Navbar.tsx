"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Tools", href: "/tools" },
    { name: "AI Guides", href: "/ai-tools" },
    { name: "Finance", href: "/finance" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          
          <span className="text-lg sm:text-xl font-semibold text-white group-hover:scale-110 duration-200">
            Smart<span className="text-blue-400">Tools</span>Core
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-[16px] font-medium">

          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition-all duration-300 group
                  ${active ? "text-white" : "text-gray-400 hover:text-white"}
                `}
              >
                {item.name}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 bg-[#0f172a] border-t border-gray-800">

          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-2 py-2 rounded-lg transition
                  ${active
                    ? "text-white bg-blue-500/10 border border-blue-500"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"}
                `}
              >
                {item.name}
              </Link>
            );
          })}

        </div>
      </div>

    </nav>
  );
}