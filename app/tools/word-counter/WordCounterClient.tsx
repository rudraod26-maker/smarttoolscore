"use client";

import { useState } from "react";

export default function WordCounterClient() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const wordsArray =
    text.trim().length === 0 ? [] : text.trim().split(/\s+/);

  const words = wordsArray.length;
  const characters = text.length;

  const sentences =
    text.trim().length === 0
      ? 0
      : text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;

  const paragraphs =
    text.trim().length === 0
      ? 0
      : text.split(/\n+/).filter((p) => p.trim().length > 0).length;

  const readingTime = Math.ceil(words / 200); // avg reading speed
  const speakingTime = Math.ceil(words / 130); // avg speaking speed

  const longestWord = wordsArray.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );

  const averageWordLength =
    words === 0
      ? 0
      : Math.round(
          wordsArray.reduce((sum, word) => sum + word.length, 0) / words
        );

  const getKeywordDensity = () => {
  const freq: Record<string, number> = {};

  for (const word of wordsArray) {
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (cleaned.length > 3) {
      freq[cleaned] = (freq[cleaned] ?? 0) + 1;
    }
  }

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
};

  const keywords = getKeywordDensity();

  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  const resetText = () => {
    setText("");
  };

  return (
    <div className="border rounded-xl p-6 bg-transparent shadow-sm">

      {/* TEXT AREA */}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full border rounded-lg p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={8}
      />

      {/* BASIC STATS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

        <StatBox label="Words" value={words} />
        <StatBox label="Characters" value={characters} />
        <StatBox label="Sentences" value={sentences} />
        <StatBox label="Paragraphs" value={paragraphs} />

      </div>

      {/* ADVANCED STATS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

        <StatBox label="Reading Time (min)" value={readingTime} />
        <StatBox label="Speaking Time (min)" value={speakingTime} />
        <StatBox label="Longest Word" value={longestWord || "-"} />
        <StatBox label="Avg Word Length" value={averageWordLength} />

      </div>

      {/* KEYWORD DENSITY */}

      <div className="border rounded-lg p-4 bg-gray-50 mb-6">
        <h3 className="font-semibold mb-2">Top Keywords</h3>

        {keywords.length === 0 ? (
          <p className="text-gray-500 text-sm">No keywords detected.</p>
        ) : (
          <ul className="text-sm text-gray-600">
            {keywords.map(([word, count]) => (
              <li key={word}>
                {word} — {count}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* BUTTONS */}

      <div className="flex flex-wrap gap-3">

        <button
          onClick={copyText}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {copied ? "Copied!" : "Copy Text"}
        </button>

        <button
          onClick={resetText}
          className="px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Reset
        </button>

      </div>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: any }) {
  return (
    <div className="border rounded-lg p-4 text-center bg-gray-50">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-semibold break-words">{value}</div>
    </div>
  );
}