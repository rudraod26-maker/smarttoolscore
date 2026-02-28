import Link from "next/link";
import { articles } from "./articles";

export default function AIToolsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold">
        Best AI Tools in 2026
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/ai-tools/${article.slug}`}
            className="bg-white p-6 shadow rounded hover:shadow-lg transition"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
}