"use client";

import { useState } from "react";

export default function HashtagGenerator() {
  const [keyword, setKeyword] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);

  const generateHashtags = () => {
    if (!keyword) return;

    const base = keyword.trim().replace(/\s+/g, "");

    const tags = [
      `#${base}`,
      `#${base}tips`,
      `#${base}ideas`,
      `#${base}content`,
      `#${base}creator`,
      `#${base}marketing`,
      `#${base}growth`,
      `#${base}strategy`,
      `#${base}trending`,
      `#${base}viral`,
      `#${base}community`,
      `#${base}daily`,
      `#${base}inspiration`,
      `#${base}online`,
      `#${base}success`
    ];

    setHashtags(tags);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(hashtags.join(" "));
    alert("Hashtags copied!");
  };

  return (
    <div style={{ marginTop: 30 }}>
      <input
        type="text"
        placeholder="Enter keyword (example: travel)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button onClick={generateHashtags} style={{ padding: "10px 20px" }}>
        Generate Hashtags
      </button>

      {hashtags.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h3>Generated Hashtags</h3>

          <div style={{ lineHeight: "2" }}>
            {hashtags.map((tag, index) => (
              <span key={index} style={{ marginRight: 10 }}>
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={copyAll}
            style={{ marginTop: 15, padding: "8px 16px" }}
          >
            Copy All
          </button>
        </div>
      )}
    </div>
  );
}