export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About SmartToolsCore
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering writers, students, and creators with simple, powerful AI tools 
          to write better, faster, and smarter.
        </p>
      </section>

      {/* Who We Are */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            SmartToolsCore is a modern platform built to simplify writing using AI. 
            We focus on creating tools that are fast, reliable, and easy to use for everyone.
          </p>
          <p className="text-gray-600">
            Whether you're a student working on assignments, a blogger creating content, 
            or a professional improving communication — our tools are designed for you.
          </p>
        </div>

        <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm">
          <p className="text-gray-700 text-lg leading-relaxed">
            "Our mission is to make high-quality writing accessible to everyone 
            through the power of AI."
          </p>
        </div>

      </section>

      {/* What We Offer */}
      <section className="mb-20">

        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-10">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-2">
              AI-Powered Tools
            </h3>
            <p className="text-gray-600 text-sm">
              Fast and accurate tools like our AI paraphraser to improve your writing instantly.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-2">
              Helpful Blogs
            </h3>
            <p className="text-gray-600 text-sm">
              Learn writing tips, SEO strategies, and productivity hacks.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-2">
              Simple Experience
            </h3>
            <p className="text-gray-600 text-sm">
              Clean, fast, and user-friendly design with no complexity.
            </p>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="mb-20">

        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-10">
          Why Choose SmartToolsCore
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast & Easy</h3>
            <p className="text-gray-600 text-sm">
              No complicated setup. Just paste and get results instantly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Accurate AI</h3>
            <p className="text-gray-600 text-sm">
              High-quality rewriting while keeping original meaning intact.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">User Friendly</h3>
            <p className="text-gray-600 text-sm">
              Designed for everyone with a clean and modern interface.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 border border-blue-100 rounded-2xl p-10 shadow-sm">

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Start Using AI Tools Today
        </h2>

        <p className="text-gray-600 mb-6">
          Experience smarter writing with our AI-powered paraphrasing tool.
        </p>

        <a
          href="/tools/paraphraser"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow"
        >
          Try AI Paraphraser
        </a>

      </section>

    </main>
  );
}