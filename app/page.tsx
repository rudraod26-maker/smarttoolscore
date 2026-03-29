"use client";

import { tools } from "@/lib/tools";
import { articles } from "./ai-tools/articles";
import ToolCard from "@/components/ToolCard";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const popularTools = tools.filter((t) => t.isPopular);

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(query.toLowerCase())
  );

  // ✅ latest articles
  const latestAI = articles
    .filter((a) => a.category === "AI")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const latestFinance = articles
    .filter((a) => a.category === "Finance")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-24">

      {/* ================= SEARCH ================= */}
      <section className="text-center space-y-6">

        <h1 className="text-4xl sm:text-5xl font-bold text-white pt-12">
          Smart Tools for Everyday Use
        </h1>

        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-[#111827] border border-gray-700 
            focus:border-blue-500 outline-none text-white"
          />

          {query && (
            <div className="absolute w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl z-10">
              {filteredTools.slice(0, 6).map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= POPULAR TOOLS ================= */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">
          🔥 Popular Tools
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularTools.map((tool) => (
            <ToolCard
              key={tool.slug}
              name={tool.name}
              description={tool.description}
              slug={tool.slug}
            />
          ))}
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="space-y-8 text-center">

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Why Choose SmartToolsCore?
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Built for speed, simplicity, and reliability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { icon: "⚡", title: "Fast", desc: "Instant tools" },
            { icon: "🔒", title: "Secure", desc: "No data stored" },
            { icon: "📱", title: "Responsive", desc: "All devices" },
            { icon: "🚀", title: "No Login", desc: "Use instantly" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6
              shadow-[0_0_25px_rgba(59,130,246,0.08)]"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= AI ARTICLE ================= */}
      {latestAI.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            🧠 Latest AI Guides
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full">
            {latestAI.map((article) => (
              <Link key={article.slug} href={`/ai-tools/${article.slug}`}>
                <div className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden 
            hover:scale-[1.02] transition">

                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-white text-lg font-semibold">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {article.description}
                    </p>

                    <span className="text-blue-400 text-sm mt-3 inline-block">
                      Read full guide →
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ================= FINANCE ARTICLE ================= */}
      {latestFinance.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            💰 Latest Finance Guides
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full">
            {latestFinance.map((article) => (
              <Link key={article.slug} href={`/finance/${article.slug}`}>
                <div className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden 
            hover:scale-[1.02] transition">

                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-white text-lg font-semibold">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {article.description}
                    </p>

                    <span className="text-green-400 text-sm font-medium mt-3 inline-block">
                      Read full guide →
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}