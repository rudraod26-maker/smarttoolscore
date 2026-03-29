"use client";

import { useState } from "react";
import Link from "next/link";

const toolCategories = [
  {
    title: "Text Tools",
    tools: [
      "Word Counter","Character Counter","Sentence Counter","Paragraph Counter",
      "Case Converter","Remove Extra Spaces","Text Repeater","Reverse Text",
      "Duplicate Remover","Sort Text","Remove Line Breaks","Add Line Numbers",
      "Text Compare","Random Text Generator"
    ],
  },
  {
    title: "SEO Tools",
    tools: [
      "Meta Tag Generator","Keyword Density Checker","Robots.txt Generator",
      "XML Sitemap Generator","SEO Friendly URL Generator","Google Snippet Preview",
      "Backlink Checker","Domain Authority Checker","Website Speed Checker",
      "Keyword Position Checker","Meta Description Generator","Open Graph Generator"
    ],
  },
  {
    title: "Developer Tools",
    tools: [
      "JSON Formatter","JSON Validator","Base64 Encoder","Base64 Decoder",
      "HTML Minifier","CSS Minifier","JS Minifier","Code Beautifier",
      "URL Encoder","URL Decoder","UUID Generator","IP Lookup Tool"
    ],
  },
  {
    title: "Image Tools",
    tools: [
      "Image Compressor","Image Resizer","Image Converter","Image Cropper",
      "PNG to JPG","JPG to PNG","WebP Converter","Image Rotator"
    ],
  },
  {
    title: "Finance Tools",
    tools: [
      "EMI Calculator","Loan Calculator","SIP Calculator","Compound Interest Calculator",
      "Retirement Calculator","Currency Converter","GST Calculator","Tax Calculator",
      "Savings Goal Calculator","Investment Return Calculator"
    ],
  },
  {
    title: "Security Tools",
    tools: [
      "Password Generator","Password Strength Checker","Hash Generator",
      "MD5 Generator","SHA Generator","UUID Generator Secure"
    ],
  },
  {
    title: "Productivity Tools",
    tools: [
      "QR Code Generator","Barcode Generator","To-Do List Generator",
      "Random Number Generator","Random Name Picker","Countdown Timer",
      "Age Calculator","Time Zone Converter","Unit Converter"
    ],
  },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function ToolsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen px-4 py-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-10 justify-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            All Tools
          </h1>
          <p className="text-gray-400">
            Explore 70+ tools across categories.
          </p>
        </div>

        {/* SEARCH BAR (same as homepage style) */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              bg-[#111827]
              border border-gray-800
              rounded-xl
              px-4 py-3
              text-white
              placeholder-gray-500
              outline-none
              focus:border-blue-500/50
              focus:shadow-[0_0_10px_rgba(59,130,246,0.2)]
              transition
            "
          />
        </div>

        {/* ================= SEO CONTENT ================= */}
        <section className="max-w-3xl mx-auto text-center space-y-6">

          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Free Online Tools for Everyday Tasks
          </h2>

          <p className="text-gray-400 leading-relaxed">
            SmartToolsCore provides a collection of powerful, free online tools designed
            to simplify your daily tasks. Whether you are a developer, student, or
            professional, our tools help you save time and work more efficiently.
          </p>

          <p className="text-gray-400 leading-relaxed">
            From text utilities like word counters and case converters to developer tools
            such as JSON formatters and encoders, everything is built with speed,
            simplicity, and privacy in mind. All tools run directly in your browser,
            ensuring your data stays secure.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Explore over 70+ tools across multiple categories and boost your productivity
            without installing any software.
          </p>

        </section>

        {/* CATEGORIES */}
        <div className="space-y-14 pt-24">

          {toolCategories.map((category) => {
            const filteredTools = category.tools.filter((tool) =>
              tool.toLowerCase().includes(search.toLowerCase())
            );

            if (filteredTools.length === 0) return null;

            return (
              <div key={category.title}>

                {/* CATEGORY TITLE */}
                <h2 className="text-xl font-semibold text-white mb-6">
                  {category.title}
                </h2>

                {/* GRID */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                  {filteredTools.map((tool) => (
                    <Link key={tool} href={`/tools/${slugify(tool)}`}>

                      <div className="group bg-[#111827] border border-gray-800 rounded-xl p-5 
      hover:border-blue-500 hover:scale-[1.04] transition duration-300 cursor-pointer">
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
                          {tool}
                        </h3>
                        <p className="text-sm text-gray-400 mt-2">
                          Open tool →
                        </p>
                      </div>

                    </Link>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

        {/* ================= FAQ ================= */}
        <section className="max-w-4xl mx-auto space-y-6 pt-24">

          <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {[
              {
                q: "Are these tools free to use?",
                a: "Yes, all tools on SmartToolsCore are completely free to use without any sign-up or hidden charges.",
              },
              {
                q: "Is my data safe while using these tools?",
                a: "Absolutely. All tools run directly in your browser, which means your data is never uploaded or stored on any server.",
              },
              {
                q: "Do I need to create an account?",
                a: "No account or login is required. You can use all tools instantly without any registration.",
              },
              {
                q: "Can I use these tools on mobile devices?",
                a: "Yes, SmartToolsCore is fully responsive and works smoothly on mobile, tablet, and desktop devices.",
              },
              {
                q: "What types of tools are available?",
                a: "We offer a wide range of tools including text utilities, developer tools, calculators, and more across multiple categories.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-gray-800 rounded-xl p-5"
              >
                <h3 className="text-white font-medium">{item.q}</h3>
                <p className="text-gray-400 mt-2 text-sm">{item.a}</p>
              </div>
            ))}

          </div>
        </section>

        {/* ================= INTERNAL LINKS ================= */}
        <section className="text-center space-y-4 pt-24">

          <h3 className="text-xl font-semibold text-white">
            Explore More Guides
          </h3>

          <p className="text-gray-400">
            Learn more with our in-depth guides and tutorials.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              href="/ai-tools"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
            >
              🧠 AI Guides
            </Link>

            <Link
              href="/finance"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
            >
              💰 Finance Guides
            </Link>

          </div>

        </section>

      </div>

    </div>
  );
}