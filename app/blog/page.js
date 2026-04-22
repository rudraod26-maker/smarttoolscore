"use client";

import { useState } from "react";
import Link from "next/link";
import { blogs } from "@/lib/blogs";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 10;

  // Sort by latest
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Filter
  const filteredBlogs = sortedBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || blog.category === category;

    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Latest Blogs
        </h1>
        <p className="text-gray-600">
          Learn writing tips, AI tools, and SEO strategies to grow faster.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset page
          }}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Filters */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {["All", "AI", "SEO", "Tools","Business","Tech"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setCurrentPage(1); // reset page
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${category === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className="space-y-6">
        {paginatedBlogs.map((blog, index) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group flex flex-col md:flex-row bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >

            {/* Image */}
            <div className="w-full md:w-[320px] md:self-stretch overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 sm:h-64 md:h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">

              {/* Category + Date */}
              <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  {blog.category}
                </span>

                {/* ✅ ONLY DATE (no time) */}
                <p className="text-sm text-gray-500">
                  {new Date(blog.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {blog.description}
              </p>

              {/* Badges */}
              <div className="flex items-center gap-3 flex-wrap">

                {/* NEW badge */}
                {Date.now() - new Date(blog.date).getTime() < 86400000 && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    NEW
                  </span>
                )}

                {/* Featured */}
                {blog.slug === sortedBlogs[0]?.slug && currentPage === 1 && (
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                    Featured
                  </span>
                )}

              </div>

              <span className="text-blue-600 text-sm mt-3 font-medium group-hover:underline">
                Read More →
              </span>

            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg text-sm ${currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredBlogs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No blogs found.
        </p>
      )}

    </main>
  );
}