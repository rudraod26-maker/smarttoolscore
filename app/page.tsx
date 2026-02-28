import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">

      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Smart Financial & AI Tools
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          SmartToolScore provides free online calculators and practical
          AI-powered tools to help you make better financial and digital decisions.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/finance"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Explore Finance Guides
          </Link>

          <Link
            href="/tools/emi-calculator"
            className="border px-6 py-3 rounded-lg"
          >
            Try EMI Calculator
          </Link>
        </div>
      </section>

      {/* FEATURED TOOLS */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Popular Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/tools/emi-calculator" className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">EMI Calculator</h3>
            <p className="text-gray-600 text-sm">
              Calculate monthly loan payments instantly.
            </p>
          </Link>

          <Link href="/tools/loan-calculator" className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Loan Calculator</h3>
            <p className="text-gray-600 text-sm">
              Compare loan options and interest impact.
            </p>
          </Link>

          <Link href="/tools/word-counter" className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Word Counter</h3>
            <p className="text-gray-600 text-sm">
              Count words and characters instantly.
            </p>
          </Link>
        </div>
      </section>

      {/* FINANCE GUIDES */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Finance Learning Hub
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/ai-tools/how-emi-calculation-works" className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">
              How EMI Calculation Works
            </h3>
            <p className="text-gray-600 text-sm">
              Understand the EMI formula and interest structure.
            </p>
          </Link>

          <Link href="/ai-tools/home-loan-vs-personal-loan" className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">
              Home Loan vs Personal Loan
            </h3>
            <p className="text-gray-600 text-sm">
              Compare loan types before borrowing.
            </p>
          </Link>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            Why Trust SmartToolScore?
          </h2>

          <p className="text-gray-600">
            We focus on transparent calculations, practical tools,
            and educational finance guides. All tools are designed
            to provide clear and easy-to-understand results.
          </p>
        </div>
      </section>

    </div>
  );
}