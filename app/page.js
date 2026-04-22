"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { blogs } from "@/lib/blogs";

const sliderItems = [
  {
    title: "AI Paraphraser",
    description:
      "Rewrite sentences clearly, smoothly, and naturally with AI-powered paraphrasing.",
    cta: "Try AI Paraphraser",
    href: "/tools/paraphraser",
    badge: "Free Tool",
  },
  {
    title: "Grammar Checker",
    description:
      "Fix grammar, spelling, punctuation, and sentence flow in seconds.",
    cta: "Use Grammar Checker",
    href: "/tools/grammar-checker",
    badge: "Free Tool",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-6">
      {/* Top Slider */}
      <section className="relative mb-14 overflow-hidden rounded-3xl bg-linear-to-br from-blue-50 via-white to-indigo-50 border border-gray-100 shadow-sm">
        <div className="relative min-h-105 md:min-h-115">
          {sliderItems.map((item, index) => (
            <div
              key={item.title}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-6 pointer-events-none"
              }`}
            >
              <div className="h-full flex items-center">
                <div className="grid md:grid-cols-2 gap-8 items-center w-full p-8 md:p-14">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-1.5 text-sm font-medium mb-5">
                      {item.badge}
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                      {item.title}
                    </h1>

                    <p className="text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
                      {item.description}
                    </p>

                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium shadow-sm transition hover:bg-blue-700"
                    >
                      {item.cta}
                    </Link>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-full max-w-md rounded-3xl bg-white border border-gray-100 shadow-lg p-6 md:p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-200"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-200"></span>
                          <span className="w-3 h-3 rounded-full bg-green-200"></span>
                        </div>
                        <span className="text-xs text-gray-400">smarttoolscore.com</span>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-2xl bg-gray-50 p-4 border border-gray-100">
                          <p className="text-sm text-gray-500 mb-2">Input</p>
                          <p className="text-gray-700">
                            Improve this text with AI in a clean and simple way.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-blue-50 p-4 border border-blue-100">
                          <p className="text-sm text-blue-600 mb-2">Output</p>
                          <p className="text-gray-800">
                            Enhance your writing instantly using a simple and modern AI tool.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {sliderItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === index ? "w-8 bg-blue-600" : "w-2.5 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 text-blue-600 w-14 h-14 flex items-center justify-center rounded-2xl mb-5 text-2xl">
              ✨
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-900">AI Paraphrasing</h3>
            <p className="text-gray-600 leading-relaxed">
              Rewrite your content with better clarity, readability, and natural tone.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-green-100 text-green-600 w-14 h-14 flex items-center justify-center rounded-2xl mb-5 text-2xl">
              ✅
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-900">Grammar Checking</h3>
            <p className="text-gray-600 leading-relaxed">
              Correct grammar, spelling, punctuation, and sentence structure quickly.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-purple-100 text-purple-600 w-14 h-14 flex items-center justify-center rounded-2xl mb-5 text-2xl">
              📚
            </div>
            <h3 className="font-semibold text-xl mb-3 text-gray-900">Helpful Content</h3>
            <p className="text-gray-600 leading-relaxed">
              Explore useful blogs and guides to improve writing and productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="bg-linear-to-br from-white to-gray-50 rounded-3xl px-6 md:px-10 py-12 border border-gray-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Why Choose SmartToolsCore
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-blue-600 text-3xl mb-4">⚡</div>
              <h3 className="font-semibold text-xl text-gray-900">Fast & Simple</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Use the tools instantly with a clean interface and no login required.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-green-600 text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-xl text-gray-900">Useful AI Output</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Get polished results for rewriting and grammar improvement in seconds.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-purple-600 text-3xl mb-4">🌍</div>
              <h3 className="font-semibold text-xl text-gray-900">Made for Everyone</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Designed for students, professionals, creators, and everyday users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="rounded-3xl bg-gray-900 text-white px-6 md:px-10 py-14 text-center shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            SmartToolsCore is a modern platform built to make writing better and easier
            with simple AI-powered tools and useful content for students, professionals,
            and creators.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-6 py-3 font-medium"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="pt-16 mb-0">
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
              <div className="w-full sm:w-55 sm:self-stretch overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 sm:h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="flex-1 p-5 flex flex-col justify-center">
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

                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600">
                  {blog.title}
                </h3>

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