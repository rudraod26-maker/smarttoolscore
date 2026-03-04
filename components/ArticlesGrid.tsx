import Link from "next/link";

export default function ArticlesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          AI Guides
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/ai-tools/best-ai-tools-for-small-businesses-2026"
            className="border rounded-lg p-6 hover:shadow-md"
          >
            Best AI Tools for Small Businesses
          </Link>

          <Link
            href="/ai-tools/best-chatgpt-alternatives-2026"
            className="border rounded-lg p-6 hover:shadow-md"
          >
            Best ChatGPT Alternatives
          </Link>

        </div>

      </div>
    </section>
  );
}