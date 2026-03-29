import Link from "next/link";
import { articles } from "../ai-tools/articles";

export default function FinancePage() {
  const financeArticles = articles.filter(
  (a) => a.category === "Finance"
);


  return (
    <div className="min-h-screen px-4 py-16">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Finance Tools & Guides
          </h1>
          <p className="text-gray-400">
            Calculate, plan and learn everything about money in one place.
          </p>
        </div>

        

        {/* ARTICLES SECTION */}
        <div>
          

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {financeArticles.map((article) => (
    <Link key={article.slug} href={`/finance/${article.slug}`}>
      <div
        className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden 
            hover:scale-[1.02] transition"
      >
        {/* IMAGE */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-44 object-cover"
        />

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-white font-semibold mb-2">
            {article.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {article.description}
          </p>

          <span className="text-green-400 text-sm font-medium">
            Read full guide →
          </span>
        </div>
      </div>
    </Link>
  ))}
</div>
        </div>

      </div>

    </div>
  );
}