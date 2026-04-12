import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <main className="max-w-5xl mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center py-20 bg-linear-to-b from-blue-50 to-white rounded-2xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Smart AI Tools to Boost Your Writing
        </h1>

        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Use powerful AI tools and expert blogs to write better, faster, and smarter.
        </p>

        {session?.user ? (
          <p className="text-sm text-green-600 mb-6">
            Welcome, {session.user.name}
          </p>
        ) : (
          <p className="text-sm text-gray-500 mb-6">
            You are not logged in.
          </p>
        )}

        <Link
          href="/tools/paraphraser"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Try AI Paraphraser
        </Link>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md transition border border-gray-100">
            <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-xl">
              ⚡
            </div>
            <h3 className="font-semibold text-lg mb-2">AI Tools</h3>
            <p className="text-gray-600">
              Simple and powerful tools like paraphraser and grammar checker to improve your writing instantly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md transition border border-gray-100">
            <div className="bg-green-100 text-green-600 w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-xl">
              📚
            </div>
            <h3 className="font-semibold text-lg mb-2">Helpful Blogs</h3>
            <p className="text-gray-600">
              Learn writing tips, SEO strategies, and AI usage guides.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md transition border border-gray-100">
            <div className="bg-purple-100 text-purple-600 w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-xl">
              💎
            </div>
            <h3 className="font-semibold text-lg mb-2">Free + Premium</h3>
            <p className="text-gray-600">
              Start free and upgrade for advanced features anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white rounded-2xl px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Why Choose SmartToolsCore
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md transition border border-gray-100">
            <div className="text-blue-600 text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg">Fast & Easy</h3>
            <p className="text-gray-600 mt-2">
              No complicated setup. Just paste and go.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md transition border border-gray-100">
            <div className="text-green-600 text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg">Accurate AI</h3>
            <p className="text-gray-600 mt-2">
              High-quality paraphrasing results.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md transition border border-gray-100">
            <div className="text-purple-600 text-3xl mb-3">👌</div>
            <h3 className="font-semibold text-lg">User Friendly</h3>
            <p className="text-gray-600 mt-2">
              Clean design built for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Who We Are
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          SmartToolsCore is a platform dedicated to providing AI-powered tools and
          valuable content to help students, professionals, and creators improve
          their writing and productivity.
        </p>
      </section>

      {/* Latest Blogs */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Latest Blogs
        </h2>

        <div className="space-y-6">
          {latestBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group flex flex-col sm:flex-row bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="w-full sm:w-55 sm:self-stretch overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 sm:h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col justify-center">
                {/* Category + Date */}
                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {blog.category || "Blog"}
                  </span>

                  <p className="text-sm text-gray-500">
                    {new Date(blog.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {blog.description}
                </p>

                <span className="text-blue-600 text-sm mt-3 font-medium group-hover:underline">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}