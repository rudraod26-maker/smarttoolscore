"use client";

import { useState } from "react";

export default function KeywordResearchTool() {

  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const generate = () => {

    if (!keyword) return;

    const base = keyword.trim();

    const suggestions = [
      `${base} tips`,
      `${base} guide`,
      `${base} tutorial`,
      `${base} for beginners`,
      `${base} strategy`,
      `${base} tools`,
      `best ${base}`,
      `how to learn ${base}`,
      `${base} examples`,
      `${base} ideas`
    ];

    setResults(suggestions);
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Enter keyword (example: SEO)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={generate}
        style={{ padding: "10px 20px" }}
      >
        Generate Keywords
      </button>

      {results.length > 0 && (
        <ul style={{ marginTop: 20 }}>
          {results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

    </div>
  );
}