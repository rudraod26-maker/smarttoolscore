"use client";

import { useState } from "react";

export default function KeywordDensityChecker() {

  const [text, setText] = useState("");
  const [density, setDensity] = useState<any[]>([]);

  const analyze = () => {

    if (!text) return;

    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter(Boolean);

    const totalWords = words.length;

    const frequency: Record<string, number> = {};

    words.forEach((word) => {
      frequency[word] = (frequency[word] || 0) + 1;
    });

    const result = Object.entries(frequency)
      .map(([word, count]) => ({
        word,
        count,
        density: ((count / totalWords) * 100).toFixed(2)
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    setDensity(result);
  };

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={7}
        style={{ width: "100%", padding: "10px" }}
        placeholder="Paste your article text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={analyze}
        style={{ marginTop: 10, padding: "10px 20px" }}
      >
        Analyze Keyword Density
      </button>

      {density.length > 0 && (
        <table
          style={{
            marginTop: 20,
            width: "100%",
            borderCollapse: "collapse"
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc" }}>Keyword</th>
              <th style={{ borderBottom: "1px solid #ccc" }}>Count</th>
              <th style={{ borderBottom: "1px solid #ccc" }}>Density %</th>
            </tr>
          </thead>

          <tbody>
            {density.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: "6px" }}>{item.word}</td>
                <td style={{ padding: "6px" }}>{item.count}</td>
                <td style={{ padding: "6px" }}>{item.density}%</td>
              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
}