import AdBlock from "@/components/AdBlock";
import Link from "next/link";
import { articles } from "./ai-tools/articles";

export default function HomePage() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="space-y-28">

      {/* HERO */}
      <section className="relative py-24 text-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Smart AI Tools <br />
          <span className="text-blue-600">
            & Free Online Utilities
          </span>
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Boost productivity, automate tasks and grow smarter in 2026
          with curated AI tools and powerful free utilities.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/ai-tools"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Explore AI Tools
          </Link>

          <Link
            href="/tools"
            className="bg-white border px-8 py-4 rounded-lg shadow hover:shadow-lg transition"
          >
            Browse Free Tools
          </Link>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 flex justify-center gap-12 text-gray-600 text-sm">
          <div>
            <p className="font-bold text-xl text-gray-900">10+</p>
            <p>AI Guides</p>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-900">3+</p>
            <p>Free Tools</p>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-900">100% Free</p>
            <p>No Signup</p>
          </div>
        </div>
      </section>
      <AdBlock />
      {/* POPULAR TOOLS */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center">
          Popular Free Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Loan Calculator",
              desc: "Calculate EMI, interest and total repayment instantly.",
              href: "/tools/loan-calculator",
            },
            {
              title: "EMI Calculator",
              desc: "Estimate monthly installments quickly and accurately.",
              href: "/tools/emi-calculator",
            },
            {
              title: "Word Counter",
              desc: "Count words, characters and sentences in real-time.",
              href: "/tools/word-counter",
            },
          ].map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-3">
                {tool.title}
              </h3>
              <p className="text-gray-600">
                {tool.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* AI ARTICLES */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center">
          Trending AI Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/ai-tools/${article.slug}`}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Discover Smarter Tools Today
        </h2>

        <p className="mb-8 text-blue-100 max-w-xl mx-auto">
          Stay ahead with AI insights, calculators and practical tools
          designed for productivity and growth.
        </p>

        <Link
          href="/ai-tools"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Start Exploring
        </Link>
      </section>

    </div>
  );
}