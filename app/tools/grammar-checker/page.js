"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const LANGUAGES = [
  { label: "English (US)", value: "en-US" },
  { label: "English (UK)", value: "en-GB" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Italian", value: "it" },
  { label: "Portuguese", value: "pt" },
  { label: "Dutch", value: "nl" },
  { label: "Polish", value: "pl" },
  { label: "Russian", value: "ru" },
];

const faqs = [
  {
    q: "What does this grammar checker do?",
    a: "This grammar checker reviews your text for grammar, punctuation, spelling, capitalization, and sentence clarity issues. It highlights mistakes and provides useful suggestions so you can improve your writing quickly.",
  },
  {
    q: "Is this grammar checker free to use?",
    a: "Yes, this grammar checker is available to use for free and is designed to provide a simple and accessible writing experience.",
  },
  {
    q: "Does this tool support multiple languages?",
    a: "Yes, the grammar checker supports multiple languages listed in the language selector. This helps users review text more accurately based on the selected language.",
  },
  {
    q: "Can I use this tool for academic, business, and website writing?",
    a: "Yes, this tool can be used for many types of writing, including essays, emails, reports, articles, website content, and professional communication. It is useful anywhere clear and correct writing matters.",
  },
  {
    q: "How do I use this grammar checker?",
    a: "Paste your text into the input area, select the language, and click the check button. The tool will highlight issues, show suggestions, and generate a corrected version that you can review and copy.",
  },
  {
    q: "What are highlighted issues?",
    a: "Highlighted issues are words or phrases in your text that may contain grammar, spelling, punctuation, or wording problems. You can click them to view suggestions and apply corrections.",
  },
  {
    q: "Can I apply suggested replacements manually?",
    a: "Yes, when a highlighted issue is selected, replacement suggestions appear below it. You can click any suggestion to replace the text directly.",
  },
  {
    q: "Does the tool automatically rewrite my full content?",
    a: "This page focuses on grammar correction and improvement. It helps fix writing issues and refine sentence quality, while keeping your original message clear.",
  },
  {
    q: "Is my text stored after I use the grammar checker?",
    a: "This page is designed to provide a simple writing utility experience. For privacy-related details, users should review the website privacy policy.",
  },
  {
    q: "What should I do after checking grammar?",
    a: "After reviewing corrections, you can copy the improved text and use it in emails, blog posts, documents, web pages, academic writing, and other content where clarity and correctness matter.",
  },
];

export default function GrammarCheckerPage() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [correctedText, setCorrectedText] = useState("");
  const [matches, setMatches] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function handleCheck(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setCorrectedText("");
    setMatches([]);
    setSelectedIndex(null);

    try {
      const allowedLanguageValues = LANGUAGES.map((item) => item.value);

      if (!allowedLanguageValues.includes(language)) {
        setError("Selected language is not supported.");
        return;
      }

      const response = await fetch("/api/grammar-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, language }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setCorrectedText(data.corrected || "");
      setMatches(data.matches || []);
    } catch (err) {
      setError(err.message || "Failed to check grammar.");
    } finally {
      setLoading(false);
    }
  }

  function handleReplace(matchIndex, replacementValue) {
    const match = matches[matchIndex];
    if (!match) return;

    const newText =
      text.slice(0, match.offset) +
      replacementValue +
      text.slice(match.offset + match.length);

    setText(newText);
    setSelectedIndex(null);
    setCorrectedText("");
    setMatches([]);
  }

  function handleClear() {
    setText("");
    setCorrectedText("");
    setMatches([]);
    setSelectedIndex(null);
    setError("");
    setCopied(false);
  }

  async function handleCopy() {
    if (!correctedText) return;

    try {
      await navigator.clipboard.writeText(correctedText);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setError("Copy failed.");
    }
  }

  const highlightedContent = useMemo(() => {
    if (!text) {
      return (
        <span className="text-gray-400">
          Your text with highlights will appear here.
        </span>
      );
    }

    if (!matches.length) {
      return <span>{text}</span>;
    }

    const sortedMatches = [...matches].sort((a, b) => a.offset - b.offset);
    const parts = [];
    let lastIndex = 0;

    sortedMatches.forEach((match, index) => {
      const start = match.offset;
      const end = match.offset + match.length;

      if (start > lastIndex) {
        parts.push(
          <span key={`text-${index}-${lastIndex}`}>
            {text.slice(lastIndex, start)}
          </span>
        );
      }

      parts.push(
        <button
          key={`match-${index}`}
          type="button"
          onClick={() => setSelectedIndex(index)}
          className={`inline rounded px-1 underline decoration-2 underline-offset-2 transition ${
            selectedIndex === index
              ? "bg-red-200 text-red-800 decoration-red-700"
              : "bg-red-100 text-red-700 decoration-red-500 hover:bg-red-200"
          }`}
          title={match.message}
        >
          {text.slice(start, end)}
        </button>
      );

      lastIndex = end;
    });

    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-end-${lastIndex}`}>{text.slice(lastIndex)}</span>
      );
    }

    return parts;
  }, [text, matches, selectedIndex]);

  const selectedMatch =
    selectedIndex !== null && matches[selectedIndex]
      ? matches[selectedIndex]
      : null;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-green-100 bg-linear-to-br from-green-50 via-white to-emerald-50 px-6 py-14 md:px-10 md:py-20 mb-10 shadow-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-green-200 bg-white px-4 py-1.5 text-sm font-medium text-green-700 mb-5">
            Simple, modern, and easy to use
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            Free Grammar Checker
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Fix grammar, punctuation, spelling, and capitalization with a clean
            and modern grammar checker designed to improve clarity, accuracy,
            and overall writing quality across multiple languages.
          </p>
        </div>
      </section>

      {/* Tool Area */}
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Your Text
          </h2>

          <form onSubmit={handleCheck}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full p-3 rounded-2xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              >
                {LANGUAGES.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>

              <p className="text-xs text-gray-500 mt-2">
                Choose the language that best matches your text for better accuracy.
              </p>
            </div>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your text here..."
              className="w-full min-h-65 p-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500 text-gray-700 resize-none"
            />

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                type="submit"
                disabled={loading || !text.trim()}
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-sm hover:bg-green-700 transition disabled:opacity-50"
              >
                {loading ? "Checking..." : "Check Grammar"}
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Highlighted Issues
          </h2>

          <div className="min-h-65 p-4 rounded-2xl border border-gray-200 bg-gray-50 text-gray-700 whitespace-pre-wrap leading-8">
            {error ? <span className="text-red-600">{error}</span> : highlightedContent}
          </div>

          {selectedMatch && (
            <div className="mt-4 p-4 rounded-2xl border border-red-200 bg-red-50">
              <p className="text-sm font-medium text-red-800 mb-2">
                {selectedMatch.message}
              </p>

              {selectedMatch.shortMessage ? (
                <p className="text-sm text-red-700 mb-3">
                  {selectedMatch.shortMessage}
                </p>
              ) : null}

              <div className="flex flex-wrap gap-2">
                {selectedMatch.replacements?.length ? (
                  selectedMatch.replacements.slice(0, 5).map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleReplace(selectedIndex, item.value)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-red-200 text-sm text-gray-700 hover:bg-red-100 transition"
                    >
                      {item.value}
                    </button>
                  ))
                ) : (
                  <span className="text-sm text-gray-600">
                    No replacement suggestion available.
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="grid lg:grid-cols-[2fr_1fr] gap-6 mt-6">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <h2 className="text-xl font-semibold text-gray-900">
              Corrected Text
            </h2>

            <button
              type="button"
              onClick={handleCopy}
              disabled={!correctedText}
              className={`px-5 py-2.5 rounded-xl transition disabled:opacity-50 ${
                copied
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-gray-900 text-white hover:bg-black"
              }`}
            >
              {copied ? "✔ Copied!" : "Copy Text"}
            </button>
          </div>

          <div className="min-h-55 p-4 rounded-2xl border border-gray-200 bg-gray-50 text-gray-700 whitespace-pre-wrap leading-8">
            {error ? (
              <span className="text-red-600">{error}</span>
            ) : correctedText ? (
              correctedText
            ) : (
              "Your corrected text will appear here."
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Suggestions
          </h2>

          <div className="space-y-3 max-h-80 overflow-auto pr-1">
            {matches.length ? (
              matches.map((match, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left p-3 rounded-2xl border transition ${
                    selectedIndex === index
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <p className="text-sm font-medium text-gray-800">
                    {match.message}
                  </p>

                  {match.replacements?.[0]?.value ? (
                    <p className="text-sm text-green-600 mt-1">
                      Suggestion: {match.replacements[0].value}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500 mt-1">
                      No quick replacement
                    </p>
                  )}
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                Suggestions will appear here after checking your text.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Similar Tool */}
      <section className="mt-8 rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 to-white p-8 md:p-10 shadow-sm">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Similar Tool You Can Also Try
          </h2>
          <p className="text-gray-600 leading-8 mb-6">
            After improving grammar and punctuation, you may also want to
            rewrite content for better tone, fluency, and readability. Our AI
            paraphrasing tool can help you refine wording, make sentences more
            natural, and create polished content for blogs, assignments,
            business writing, and everyday communication.
          </p>

          <Link
            href="/tools/paraphraser"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            Try AI Paraphraser
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <section className="mt-20 space-y-16">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How This Grammar Checker Works
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            This grammar checker works by analyzing your text for common and
            advanced writing issues, including grammar mistakes, punctuation
            problems, spelling errors, capitalization inconsistencies, and weak
            sentence construction. Instead of only flagging isolated words, the
            tool checks the broader context of each sentence to provide more
            useful and meaningful suggestions. That makes the output more
            practical for real writing tasks, whether you are editing a short
            email or a longer article.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            Once you enter your text and choose a language, the checker sends
            your content for analysis and returns two key outputs. First, it
            highlights issues directly in the original text, making it easier to
            see where the problems are located. Second, it generates a corrected
            version that helps you compare the improved text with the original.
            This two-part workflow is especially useful because some users prefer
            to apply corrections manually, while others prefer to copy the
            improved version after reviewing it.
          </p>

          <p className="text-gray-600 leading-8">
            The highlighted issue view is helpful because it shows exactly what
            may need attention. When you click a highlighted word or phrase, the
            tool presents suggestion options that can be applied instantly. This
            makes the editing experience faster and more interactive. Rather
            than forcing you to search through your text line by line, the
            grammar checker organizes the process into a cleaner and more modern
            review flow.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How to Use This Grammar Checker
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            Using this grammar checker is straightforward. Start by pasting or
            typing your content into the input box. Choose the language that
            best matches your text from the language dropdown. Selecting the
            correct language helps improve detection quality because grammar and
            punctuation patterns vary from one language to another.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            After that, click the <strong>Check Grammar</strong> button. The
            tool will process your content and return highlighted issues,
            suggested replacements, and a corrected version of your text. If you
            see highlighted phrases in the issue view, click them to inspect the
            problem more closely. When suggestions are available, you can choose
            a replacement with one click. This allows you to review edits
            gradually and maintain full control over your final writing.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            If you prefer a faster workflow, review the corrected text box after
            checking is complete. Once you are happy with the results, use the
            copy button to copy the improved text. The copied feedback confirms
            that your action worked, making the interaction feel smoother and
            more reliable.
          </p>

          <p className="text-gray-600 leading-8">
            This tool can be used for many writing tasks, including emails,
            essays, articles, product descriptions, landing pages, reports,
            resumes, website copy, and business communication. It is especially
            useful when you need to clean up writing quickly without opening a
            complex editing program.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Main Features of This Grammar Checker
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            One of the most useful features of this grammar checker is its
            support for multiple languages. Many users write in more than one
            language or review content for international audiences, so language
            selection helps improve relevance and accuracy. The tool also keeps
            the interface clear and simple, which makes it easier to focus on
            writing rather than navigating a cluttered layout.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            Another strong feature is the highlighted issue panel. Instead of
            only providing a corrected paragraph, the tool shows where problems
            exist in the original text. This is helpful for users who want to
            learn from mistakes rather than simply replace text without
            understanding what changed. The suggestions panel gives quick
            replacement options, which makes error correction more efficient.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            The corrected text section is also valuable because it provides a
            cleaner version that can be copied immediately. Combined with the
            copied confirmation state, this creates a smoother editing and
            publishing experience. The clear button is another practical feature,
            allowing users to reset the workspace and start fresh without manual
            cleanup.
          </p>

          <p className="text-gray-600 leading-8">
            Overall, the grammar checker combines useful writing assistance,
            fast interaction, and a modern layout. It is designed to reduce
            friction, help users improve text quality, and make correction
            workflows faster and easier.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Benefits of Using a Grammar Checker
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            Good writing matters in almost every setting. Clear grammar and
            correct punctuation can affect how professional, credible, and
            understandable your message feels. Even a strong idea can lose
            impact when it is hidden behind confusing sentence structure or
            frequent errors. A grammar checker helps reduce these issues and
            improves the overall readability of your content.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            One major benefit is time savings. Manually reviewing writing line
            by line can take a long time, especially for longer documents or
            content that must be published quickly. This tool speeds up the
            process by identifying errors and giving suggestions instantly. That
            makes it especially useful for writers, students, marketers,
            professionals, agencies, and teams that need efficient editing
            support.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            Another benefit is confidence. When your content is cleaner and more
            polished, you can publish, submit, or send it with more confidence.
            This matters in academic writing, business communication, client
            work, blog publishing, and public-facing website content. Better
            grammar also helps improve user trust and readability, which is
            valuable for websites, landing pages, and informational articles.
          </p>

          <p className="text-gray-600 leading-8">
            Grammar checking also supports learning. When users interact with
            highlighted issues and suggestions, they can begin noticing common
            writing mistakes and improve future drafts more effectively. That
            makes the tool not only useful for correction but also helpful for
            writing improvement over time.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Grammar Accuracy Matters for Websites, Blogs, and Professional Writing
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            Grammar accuracy matters because writing is often the first way
            people judge quality online. On websites, landing pages, and blog
            posts, small mistakes can reduce trust and make content appear less
            polished. For businesses and creators, this can affect engagement,
            credibility, and user perception. For students and professionals, it
            can affect grades, communication quality, and overall presentation.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            Search engines also reward content that is useful and easy to read.
            While grammar alone does not determine rankings, content quality and
            clarity play a major role in the overall user experience. Cleaner
            writing tends to be easier to understand, easier to scan, and more
            likely to keep visitors engaged. That makes grammar improvement
            valuable not only for readers but also for site quality.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            In professional settings, grammar is closely tied to trust. Emails,
            proposals, reports, and presentations all benefit from clean and
            accurate writing. Even strong ideas can feel weaker when they are
            surrounded by punctuation errors or awkward phrasing. A grammar
            checker helps remove those distractions and keeps the focus on your
            message.
          </p>

          <p className="text-gray-600 leading-8">
            For content creators, editors, and website owners, grammar checking
            is also part of quality control. Before publishing pages or sending
            important communication, reviewing text through a grammar checker can
            reduce mistakes, improve tone, and create a more polished final
            result.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Who Can Use This Tool
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            This grammar checker is suitable for a wide range of users. Students
            can use it to review essays, assignments, personal statements, and
            academic writing. Professionals can use it to improve emails,
            reports, presentations, documentation, and business messaging.
            Bloggers and creators can use it to refine posts, articles, product
            descriptions, and website content before publishing.
          </p>

          <p className="text-gray-600 leading-8 mb-4">
            Freelancers and agencies can also benefit from faster editing
            workflows when handling client content. Website owners can use the
            tool to improve readability across privacy pages, terms pages,
            blog posts, help content, and landing pages. Anyone who wants to
            communicate more clearly can benefit from a reliable grammar
            correction tool.
          </p>

          <p className="text-gray-600 leading-8">
            Because the layout is simple and the workflow is clear, the tool is
            accessible to both experienced writers and users who just want a
            quick way to improve grammar without complexity.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {index + 1}. {faq.q}
                </h3>
                <p className="text-gray-600 leading-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}