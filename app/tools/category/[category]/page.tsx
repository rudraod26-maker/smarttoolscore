import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";
import { notFound } from "next/navigation";

function formatCategory(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function toSlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryName = formatCategory(params.category);

  const filtered = tools.filter(
    (t) => toSlug(t.category) === params.category
  );

  if (!filtered.length) return notFound();

  return (
    <div>

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{categoryName}</h1>
        <p className="text-gray-600 mt-2">
          Explore tools in {categoryName.toLowerCase()}.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((tool) => (
          <ToolCard
            key={tool.slug}
            name={tool.name}
            description={tool.description}
            slug={tool.slug}
          />
        ))}
      </div>

    </div>
  );
}