import { notFound } from "next/navigation";
import { articles } from "@/app/ai-tools/articles";
import { parseContent } from "@/lib/parseContent";

export default async function FinanceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ FIX: unwrap params
  const { slug } = await params;

  const article = articles.find(
    (a) => a.slug === slug && a.category === "Finance"
  );

  if (!article) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        {article.title}
      </h1>

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover rounded-xl mb-8"
      />

      <p className="text-gray-400 mb-10">
        {article.description}
      </p>

      <div className="space-y-10">
        {article.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {section.heading}
            </h2>

            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {parseContent(section.content)}
                </div>
          </div>
        ))}
      </div>

    </div>
  );
}