"use client";

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

export default function GrammarCheckerPage() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("auto");
  const [correctedText, setCorrectedText] = useState("");
  const [matches, setMatches] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
  }

  async function handleCopy() {
    if (!correctedText) return;
    await navigator.clipboard.writeText(correctedText);
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
          className={`inline rounded px-1 underline decoration-2 underline-offset-2 ${selectedIndex === index
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
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center py-14 bg-linear-to-b from-green-50 to-white rounded-2xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Free Grammar Checker
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Fix grammar, punctuation, spelling, and capitalization in multiple languages.
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
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
                className="w-full p-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              >
                {LANGUAGES.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-2">
                Only fully supported languages are shown for better accuracy.
              </p>
            </div>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your text here..."
              className="w-full min-h-65 p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
            />

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                type="submit"
                disabled={loading || !text.trim()}
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition disabled:opacity-50"
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

        <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Highlighted Issues
          </h2>

          <div className="min-h-65 p-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 whitespace-pre-wrap leading-8">
            {error ? <span className="text-red-600">{error}</span> : highlightedContent}
          </div>

          {selectedMatch && (
            <div className="mt-4 p-4 rounded-xl border border-red-200 bg-red-50">
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
                      className="px-3 py-1.5 rounded-lg bg-white border border-red-200 text-sm text-gray-700 hover:bg-red-100"
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
        <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Corrected Text
            </h2>

            <button
              type="button"
              onClick={handleCopy}
              disabled={!correctedText}
              className="bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-black transition disabled:opacity-50"
            >
              Copy Text
            </button>
          </div>

          <div className="min-h-55 p-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 whitespace-pre-wrap">
            {error ? (
              <span className="text-red-600">{error}</span>
            ) : correctedText ? (
              correctedText
            ) : (
              "Your corrected text will appear here."
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
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
                  className={`w-full text-left p-3 rounded-xl border transition ${selectedIndex === index
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 hover:bg-gray-50"
                    }`}
                >
                  <p className="text-sm font-medium text-gray-800">
                    {match.message}
                  </p>

                  {match.replacements?.[0]?.value ? (
                    <p className="text-sm text-blue-600 mt-1">
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
    </main>
  );
}