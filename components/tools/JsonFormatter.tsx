"use client";
import { useState } from "react";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJSON = () => {
    try {
      setOutput(JSON.stringify(JSON.parse(input), null, 2));
    } catch {
      setOutput("Invalid JSON");
    }
  };

  return (
    <div className="space-y-10">

      {/* TITLE */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          JSON Formatter
        </h1>
        <p className="text-gray-400 mt-2">
          Format and beautify JSON instantly.
        </p>
      </div>

      {/* TOOL */}
      <div className="bg-[#111827] border border-gray-800 rounded-xl p-6">

        <textarea
          className="w-full h-40 p-4 bg-[#020617] border border-gray-700 rounded-lg text-white mb-4"
          placeholder="Paste JSON here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={formatJSON}
          className="bg-blue-600 px-5 py-2 rounded-lg text-white"
        >
          Format
        </button>

        <textarea
          className="w-full h-40 p-4 bg-[#020617] border border-gray-700 rounded-lg text-white mt-4"
          value={output}
          readOnly
        />
      </div>

      {/* SEO CONTENT — NO BACKGROUND */}
      <div className="space-y-6 text-gray-300">

        <h2 className="text-2xl text-white font-semibold">
          What is a JSON Formatter?
        </h2>

        <p>
          A JSON Formatter helps you convert raw JSON into readable format.
        </p>

        <p>
          It is useful for debugging APIs and working with structured data.
        </p>

      </div>

    </div>
  );
}