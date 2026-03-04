"use client";

import { useState } from "react";
import Link from "next/link";

const tools = [
  { name: "Password Generator", link: "/tools/password-generator" },
  { name: "Word Counter", link: "/tools/word-counter" },
  { name: "Loan Calculator", link: "/tools/loan-calculator" },
];

export default function ToolSearch() {
  const [query, setQuery] = useState("");

  const filtered = tools.filter((tool) =>
    tool.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto mt-10">
      <input
        type="text"
        placeholder="Search tools..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border rounded-lg px-4 py-3"
      />

      {query && (
        <div className="border rounded-lg mt-2 bg-white">
          {filtered.map((tool) => (
            <Link
              key={tool.name}
              href={tool.link}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}