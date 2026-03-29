"use client";

import Link from "next/link";
import { articles } from "./articles";

export default function AIToolsPage() {
  return (
    <div className="space-y-12">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          Best AI Tools in 2026
        </h1>
        <p className="text-gray-400 mt-2">
          Explore curated AI guides and resources.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles
  .filter((article) => article.category === "AI")
  .map((article) => (
          <Link
            key={article.slug}
            href={`/ai-tools/${article.slug}`}
            className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden 
            hover:scale-[1.02] transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-44 object-cover"
            />

            <div className="p-5">
              <h3 className="text-white font-semibold">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {article.description}
              </p>

              <span className="text-blue-400 text-sm mt-3 inline-block">
                Read full guide →
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}