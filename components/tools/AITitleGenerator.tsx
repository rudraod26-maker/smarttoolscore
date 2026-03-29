"use client";

import { useState } from "react";

export default function AITitleGenerator() {

  const [keyword, setKeyword] = useState("");
  const [titles, setTitles] = useState<string[]>([]);

  const generateTitles = () => {

    if (!keyword) return;

    const base = keyword.trim();

    const generated = [
      `10 Powerful Tips for ${base}`,
      `How to Master ${base} in 2026`,
      `Beginner's Guide to ${base}`,
      `Top 7 Secrets About ${base}`,
      `Why Everyone is Talking About ${base}`,
      `${base}: The Ultimate Guide`,
      `How ${base} Can Change Your Life`,
      `Best Strategies for ${base}`,
      `${base} Explained Simply`,
      `The Future of ${base}`
    ];

    setTitles(generated);
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Enter topic or keyword (example: digital marketing)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={generateTitles}
        style={{ padding: "10px 20px" }}
      >
        Generate Titles
      </button>

      {titles.length > 0 && (
        <div style={{ marginTop: 20 }}>

          <h3>Generated Titles</h3>

          <ul>
            {titles.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}