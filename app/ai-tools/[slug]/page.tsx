import { articles } from "../articles";
import { notFound } from "next/navigation";
import { parseContent } from "@/lib/parseContent";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ FIX HERE

  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <div className="max-w-4xl mx-auto space-y-10">

      {/* TITLE */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          {article.title}
        </h1>
        <p className="text-gray-400 mt-3">
          {article.description}
        </p>
      </div>

      {/* IMAGE */}
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover rounded-xl"
      />

      {/* CONTENT */}
      <div className="space-y-8">
        {article.sections.map((section) => (
  <div key={section.heading} className="mb-10">
    <h2 className="text-xl font-semibold text-white mb-3">
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