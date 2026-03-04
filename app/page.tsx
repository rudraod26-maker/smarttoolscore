import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">

      {/* HERO SECTION */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">
          Free AI Tools & Online Utilities
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          SmartToolsCore provides free online tools, finance calculators and
          AI guides to help users improve productivity, automate tasks and
          make smarter decisions online.
        </p>
      </section>


      {/* POPULAR TOOLS */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Popular Tools</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            href="/tools/password-generator"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">Password Generator</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Generate secure random passwords instantly.
            </p>
          </Link>

          <Link
            href="/tools/word-counter"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">Word Counter</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Count words, characters and sentences quickly.
            </p>
          </Link>

          <Link
            href="/tools/loan-calculator"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">Loan Calculator</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Calculate EMI and loan payments easily.
            </p>
          </Link>

        </div>
      </section>


      {/* AI GUIDES */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">AI Guides</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/ai-tools/best-ai-tools-for-small-businesses-2026"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            Best AI Tools for Small Businesses
          </Link>

          <Link
            href="/ai-tools/best-chatgpt-alternatives-2026"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            Best ChatGPT Alternatives in 2026
          </Link>

          <Link
            href="/ai-tools/best-ai-tools-for-students-2026"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            Best AI Tools for Students
          </Link>

          <Link
            href="/ai-tools/best-ai-writing-tools-2026"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            Best AI Writing Tools
          </Link>

        </div>
      </section>


      {/* FINANCE GUIDES */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Finance Guides</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/ai-tools/how-emi-calculation-works-2026"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            How EMI Calculation Works
          </Link>

          <Link
            href="/ai-tools/home-loan-vs-personal-loan"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            Home Loan vs Personal Loan
          </Link>

          <Link
            href="/ai-tools/how-interest-rates-affect-loan-repayment"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            How Interest Rates Affect Loan Repayment
          </Link>

          <Link
            href="/ai-tools/credit-card-interest-explained-simply"
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            Credit Card Interest Explained
          </Link>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="mt-16">
  <h2 className="text-2xl font-semibold mb-4">
    About SmartToolsCore
  </h2>

  <div className="text-gray-600 leading-relaxed space-y-4">

    <p>
      SmartToolsCore is a collection of useful online utilities,
      AI productivity tools and financial guides designed to help
      users solve everyday digital problems quickly. Our goal is
      to provide simple and reliable tools that improve efficiency,
      automate repetitive tasks and help people make smarter
      decisions online.
    </p>

    <p>
      From password generators and writing tools to financial
      calculators and AI guides, SmartToolsCore focuses on practical
      solutions that save time and improve productivity for students,
      professionals and businesses.
    </p>

  </div>
</section>

      <section className="mt-10">
  <h3 className="font-semibold mb-3">Explore More</h3>

  <div className="flex gap-6 text-sm text-gray-600">

    <a href="/tools" className="hover:text-black">
      Free Tools
    </a>

    <a href="/ai-tools" className="hover:text-black">
      AI Guides
    </a>

    <a href="/finance" className="hover:text-black">
      Finance Articles
    </a>

  </div>
</section>

    </div>
  );
}