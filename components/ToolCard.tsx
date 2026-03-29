import Link from "next/link";

export default function ToolCard({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return (
    <Link href={`/tools/${slug}`}>
      <div className="group bg-[#111827] border border-gray-800 rounded-xl p-5 
      hover:border-blue-500 hover:scale-[1.04] transition duration-300 cursor-pointer">

        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
          {name}
        </h3>

        <p className="text-sm text-gray-400 mt-2">
          {description}
        </p>
      </div>
    </Link>
  );
}