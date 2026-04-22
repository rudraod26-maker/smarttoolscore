"use client";

import Link from "next/link";
import { useState } from "react";

export default function Paraphraser() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("Natural");
  const [bullet, setBullet] = useState(false);
  const [plagiarism, setPlagiarism] = useState(false);
  const [humanize, setHumanize] = useState(false);
  const [copied, setCopied] = useState(false);

  const modes = [
    "Natural",
    "Standard",
    "Fluency",
    "Formal",
    "Academic",
    "Simple",
    "Expand",
    "Shorten",
    "Custom",
  ];

  const faqs = [
    {
      q: "What is an AI paraphrasing tool?",
      a: "An AI paraphrasing tool rewrites your text in a new way while keeping the original meaning clear and accurate.",
    },
    {
      q: "How does this paraphrasing tool work?",
      a: "It analyzes your input, understands the context, and rewrites the text with improved clarity, flow, and readability.",
    },
    {
      q: "Can I use this tool for blogs, assignments, and professional writing?",
      a: "Yes, this tool can help rewrite many types of content, including blog posts, articles, website content, emails, and study material.",
    },
    {
      q: "What do the different paraphrasing modes do?",
      a: "Different modes help shape the style of the rewritten content, such as making it more formal, simple, fluent, academic, shorter, or more expanded.",
    },
    {
      q: "What does the humanize option do?",
      a: "The humanize option aims to make the rewritten content sound more natural, smooth, and conversational.",
    },
    {
      q: "What does the bullet option do?",
      a: "The bullet option helps restructure content into bullet points when a list-style output is more useful and easier to read.",
    },
    {
      q: "What does the plagiarism-safe option mean?",
      a: "This option focuses on generating more original reworded text by changing sentence structure and wording while preserving meaning.",
    },
    {
      q: "Do I need to sign up to use this tool?",
      a: "No, you can use the paraphrasing tool without creating an account.",
    },
    {
      q: "Is this paraphrasing tool free to use?",
      a: "Yes, the tool is currently available to use for free.",
    },
    {
      q: "Can I also improve grammar on this website?",
      a: "Yes, you can also use the Grammar Checker to improve grammar, spelling, punctuation, and sentence clarity.",
    },
  ];

  const handleParaphrase = async () => {
    if (!input) return;

    setLoading(true);

    try {
      const res = await fetch("/api/paraphrase", {
        method: "POST",
        body: JSON.stringify({
          text: input,
          mode,
          bullet,
          plagiarism,
          humanize,
        }),
      });

      const data = await res.json();
      setOutput(data.result);
    } catch {
      setOutput("Error generating text");
    }

    setLoading(false);
  };

  const handleCopy = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      alert("Copy failed");
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-12">
        <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-5">
          Smart, simple, and easy to use
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          AI Paraphrasing Tool
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Rewrite sentences, paragraphs, blog posts, articles, emails, and more
          with a modern AI paraphrasing tool designed to improve clarity,
          readability, and flow while preserving the original meaning.
        </p>
      </section>

      {/* Tool Box */}
      <section className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm mb-20">
        {/* Modes */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {modes.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                mode === m
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-600 border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6 text-sm">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={plagiarism}
              onChange={() => setPlagiarism(!plagiarism)}
            />
            Plagiarism Safe
          </label>

          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={humanize}
              onChange={() => setHumanize(!humanize)}
            />
            Humanize
          </label>

          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={bullet}
              onChange={() => setBullet(!bullet)}
            />
            Bullets
          </label>
        </div>

        {/* Input / Output */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <div className="h-6 mb-2"></div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your text here..."
              className="border rounded-2xl p-4 h-64 w-full resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <div className="h-6 mb-2 flex gap-2 flex-wrap">
              {plagiarism && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  ✔ Plagiarism Safe
                </span>
              )}
              {humanize && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  ✨ Humanized
                </span>
              )}
              {bullet && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  • Bullet Format
                </span>
              )}
            </div>

            <div className="relative">
              <textarea
                value={output}
                readOnly
                placeholder="Your rewritten content will appear here..."
                className="border rounded-2xl p-4 h-64 w-full bg-gray-50 resize-none"
              />

              {output && (
                <button
                  onClick={handleCopy}
                  className={`absolute top-3 right-3 z-10 text-xs px-3 py-1.5 rounded-lg border shadow-sm transition ${
                    copied
                      ? "bg-green-100 text-green-700 border-green-300"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {copied ? "✔ Copied!" : "📋 Copy"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="mt-6 text-center">
          <button
            onClick={handleParaphrase}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-sm hover:bg-blue-700 transition"
          >
            {loading ? "Processing..." : "Paraphrase"}
          </button>
        </div>
      </section>

      {/* SEO Sections */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          How This Paraphrasing Tool Works
        </h2>
        <p className="text-gray-600 leading-8 mb-4">
          This AI paraphrasing tool is built to understand the meaning of your
          text and rewrite it in a clearer, smoother, and more polished way.
          Instead of only replacing a few words with synonyms, it looks at the
          full sentence structure, writing style, and context. This allows it to
          generate rewritten content that feels more natural and readable.
        </p>
        <p className="text-gray-600 leading-8 mb-4">
          When you paste text into the editor, the system analyzes the wording,
          sentence flow, and overall meaning. It then rewrites the content based
          on the mode and options you select. For example, you can choose a more
          formal style, a simpler tone, or a more fluent version. You can also
          enable humanized output, bullet formatting, or plagiarism-safe
          rewriting depending on what kind of result you want.
        </p>
        <p className="text-gray-600 leading-8">
          This makes the tool useful for students, writers, bloggers,
          professionals, marketers, and anyone who wants to improve writing
          quality without spending too much time rewriting manually.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          How to Use This Tool
        </h2>
        <p className="text-gray-600 leading-8 mb-4">
          Using the tool is simple. Paste your original text into the input box,
          choose the writing mode that best matches your goal, and enable any
          extra options you want. If you want a more natural output, use the
          humanize setting. If you want list formatting, enable bullets. If you
          want stronger rewriting for originality, turn on plagiarism-safe mode.
        </p>
        <p className="text-gray-600 leading-8 mb-4">
          Once your settings are ready, click the paraphrase button. The tool
          will process your content and generate a rewritten version in the
          output box. You can then review the result, copy it instantly, and use
          it wherever you need. This workflow is helpful for rewriting website
          content, emails, essays, articles, product descriptions, and more.
        </p>
        <p className="text-gray-600 leading-8">
          For best results, start with clear input text. Well-structured source
          content usually produces better output. After generating the result,
          quickly review it to make sure it matches your tone, purpose, and
          audience.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Features of Our AI Paraphrasing Tool
        </h2>
        <p className="text-gray-600 leading-8 mb-4">
          This paraphrasing tool includes multiple writing modes so you can shape
          the output based on your needs. Natural mode focuses on smooth and
          balanced rewriting. Formal mode helps create more professional text.
          Academic mode is useful for more structured writing. Simple mode makes
          content easier to understand. Expand and Shorten modes help control how
          detailed or concise the rewritten version should feel.
        </p>
        <p className="text-gray-600 leading-8 mb-4">
          The plagiarism-safe option helps generate more distinct phrasing. The
          humanize option makes the result feel more natural and less robotic.
          The bullet option is useful when you want content presented in a more
          scannable list format. Together, these features make the tool flexible
          enough for different content types and writing goals.
        </p>
        <p className="text-gray-600 leading-8">
          The interface is also designed to be clean and modern, making it easy
          to use without distractions. You can switch modes quickly, adjust
          options instantly, and copy the result with one click.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Benefits of Using an AI Paraphrasing Tool
        </h2>
        <p className="text-gray-600 leading-8 mb-4">
          A good paraphrasing tool helps save time, improve readability, and
          remove repetitive wording. It can also help users express the same idea
          in a better way without manually rewriting every sentence from scratch.
          This is especially useful when working on long documents, blogs,
          reports, website pages, assignments, or business writing.
        </p>
        <p className="text-gray-600 leading-8 mb-4">
          Another benefit is consistency. If your original content feels uneven
          or unclear, paraphrasing can smooth out the flow and make the message
          stronger. This helps create more professional content for readers,
          customers, teachers, or clients. Clear language often leads to better
          engagement and better understanding.
        </p>
        <p className="text-gray-600 leading-8">
          Whether you want to improve weak sentences, rewrite old content, or
          create a more polished version of your draft, this tool can support
          your writing process in a fast and convenient way.
        </p>
      </section>

      <section className="mb-20 rounded-3xl border border-gray-200 bg-linear-to-br from-blue-50 to-white p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Also Try Our Grammar Checker
        </h2>
        <p className="text-gray-600 leading-8 mb-5 max-w-3xl">
          If you want to improve grammar, spelling, punctuation, and sentence
          clarity after rewriting your content, use our Grammar Checker for an
          even more polished result.
        </p>

        <Link
          href="/tools/grammar-checker"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
        >
          Try Grammar Checker
        </Link>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {index + 1}. {faq.q}
              </h3>
              <p className="text-gray-600 leading-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}