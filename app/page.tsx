import Link from "next/link";

export default function HomePage() {
  return (
    <div>

      <h1 className="text-3xl font-bold">
        Free AI Tools & Online Utilities
      </h1>

      <p className="text-gray-600 mt-4">
        SmartToolsCore provides free online tools, finance calculators
        and AI guides to help users improve productivity and make
        smarter decisions.
      </p>

      <h2 className="text-xl font-semibold mt-10">
        Popular Tools
      </h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">

        <li>
          <Link href="/tools/password-generator">
            Password Generator
          </Link>
        </li>

        <li>
          <Link href="/tools/word-counter">
            Word Counter
          </Link>
        </li>

        <li>
          <Link href="/tools/loan-calculator">
            Loan Calculator
          </Link>
        </li>

      </ul>

      <h2 className="text-xl font-semibold mt-10">
        AI Guides
      </h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">

        <li>
          <Link href="/ai-tools/best-ai-tools-for-small-businesses-2026">
            Best AI Tools for Small Businesses
          </Link>
        </li>

        <li>
          <Link href="/ai-tools/best-chatgpt-alternatives-2026">
            Best ChatGPT Alternatives
          </Link>
        </li>

      </ul>

    </div>
  );
}