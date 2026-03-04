import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-28">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h1 className="text-5xl font-bold leading-tight">
          Free AI Tools & Smart Web Utilities
        </h1>

        <p className="mt-6 text-lg opacity-90">
          SmartToolsCore offers powerful free tools including
          password generators, finance calculators, AI guides,
          and productivity utilities.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/tools"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium"
          >
            Explore Tools
          </Link>

          <Link
            href="/ai-tools"
            className="border border-white px-6 py-3 rounded-lg"
          >
            AI Guides
          </Link>
        </div>

      </div>
    </section>
  );
}