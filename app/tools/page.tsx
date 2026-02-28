import Link from "next/link";

export const metadata = {
  title: "Free Online Tools (Fast & Easy) | SmartToolsAI",
  description:
    "Use free online tools including calculators, text utilities, productivity tools and more. Fast, simple and completely free.",
};

const tools = [
  {
    name: "Word Counter",
    description:
      "Count words, characters, sentences and paragraphs instantly.",
    slug: "word-counter",
  },
  {
    name: "EMI Calculator",
    description:
      "Calculate your loan EMI quickly and accurately.",
    slug: "emi-calculator",
  },
  {
    name: "Loan Calculator",
    description:
      "Estimate monthly payments and total interest for loans.",
    slug: "loan-calculator",
  },
  {
    name: "Password Generator",
    description:
      "Generate secure random passwords instantly.",
    slug: "password-generator",
  },
];

export default function ToolsPage() {
  return (
    <div className="space-y-12">

      {/* Page Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Free Online Tools
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Use our fast and simple online tools for calculations,
          text processing, productivity and more.
        </p>
      </section>

      {/* Tools Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {tool.name}
            </h2>
            <p className="text-gray-600 text-sm">
              {tool.description}
            </p>
          </Link>
        ))}
      </section>

      {/* SEO Content Section */}
      <section className="space-y-4 text-gray-700">
        <h2 className="text-2xl font-semibold">
          Why Use Free Online Tools?
        </h2>

        <p>
          Online tools help you save time by performing tasks instantly
          without installing any software. Whether you need to calculate
          loan payments, generate secure passwords or count words for
          writing projects, our tools are designed to be simple and efficient.
        </p>

        <p>
          All tools are free to use, mobile-friendly and optimized
          for fast performance.
        </p>
      </section>

    </div>
  );
}