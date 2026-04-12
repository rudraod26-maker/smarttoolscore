"use client";

import { useState } from "react";

export default function Paraphraser() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("Natural");
  const [bullet, setBullet] = useState(false);
  const [length, setLength] = useState(300);
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
          length,
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

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Free AI Paraphrasing Tool
        </h1>
        <p className="text-gray-600">
          Rewrite content instantly with no limits and no login required.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        {/* MODES */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {modes.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${mode === m
                ? "bg-blue-600 text-white border-blue-600"
                : "text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <label className="text-xs text-gray-500">
              Output Length: {length} words
            </label>
            <input
              type="range"
              min="30"
              max="1000"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex gap-4 text-sm">
            <label>
              <input
                type="checkbox"
                checked={plagiarism}
                onChange={() => setPlagiarism(!plagiarism)}
              />{" "}
              Plagiarism
            </label>
            <label>
              <input
                type="checkbox"
                checked={humanize}
                onChange={() => setHumanize(!humanize)}
              />{" "}
              Humanize
            </label>
            <label>
              <input
                type="checkbox"
                checked={bullet}
                onChange={() => setBullet(!bullet)}
              />{" "}
              Bullets
            </label>
          </div>
        </div>

        {/* INPUT / OUTPUT */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUT */}
          <div className="flex flex-col">
            <div className="h-6 mb-2"></div>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your text..."
              className="border rounded-xl p-4 h-56 w-full resize-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* OUTPUT */}
          <div className="flex flex-col">
            <div className="h-6 mb-2 flex gap-2">
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
            </div>

            <div className="relative">
              <textarea
                value={output}
                readOnly
                placeholder="Output..."
                className="border rounded-xl p-4 h-56 w-full bg-gray-50"
              />

              {output && (
                <button
                  onClick={handleCopy}
                  className={`absolute top-3 right-3 z-10 text-xs px-3 py-1.5 rounded-lg border shadow-md transition-all duration-200 ${copied
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

        {/* BUTTON */}
        <div className="mt-6 text-center">
          <button
            onClick={handleParaphrase}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            {loading ? "Processing..." : "Paraphrase"}
          </button>
        </div>

      </div>
    </main>
  );
}