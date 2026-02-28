import Link from "next/link";
import { articles } from "../ai-tools/articles";

export const metadata = {
  title: "Finance Guides & Loan Calculators | SmartToolsAI",
  description:
    "Explore finance guides, EMI calculation tutorials, loan comparisons and interest rate explanations.",
};

export default function FinancePage() {
  // Filter finance-related articles
  const financeArticles = articles.filter((article) =>
    article.slug.includes("loan") ||
    article.slug.includes("emi") ||
    article.slug.includes("interest") ||
    article.slug.includes("credit")
  );

  return (
    <div className="max-w-5xl mx-auto space-y-16">

      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Finance Guides & Loan Tools
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn how loans, EMI, interest rates and credit cards work.
          Use our free calculators to plan smarter financial decisions.
        </p>
      </section>

      {/* Finance Tools Highlight */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Popular Finance Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/tools/emi-calculator"
            className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-lg mb-2">
              EMI Calculator
            </h3>
            <p className="text-gray-600">
              Calculate monthly installment instantly with accurate formula.
            </p>
          </Link>

          <Link
            href="/tools/loan-calculator"
            className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-lg mb-2">
              Loan Calculator
            </h3>
            <p className="text-gray-600">
              Compare loan options and analyze repayment impact.
            </p>
          </Link>
        </div>
      </section>

      {/* Finance Articles */}
      <section>
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Finance Learning Hub
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {financeArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/ai-tools/${article.slug}`}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}