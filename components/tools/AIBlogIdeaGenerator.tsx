"use client";

import { useState } from "react";

export default function AIBlogIdeaGenerator() {

  const [keyword, setKeyword] = useState("");
  const [ideas, setIdeas] = useState<string[]>([]);

  const generateIdeas = () => {

    if (!keyword) return;

    const base = keyword.trim();

    const generatedIdeas = [
      `10 Things You Should Know About ${base}`,
      `Beginner's Guide to ${base}`,
      `How to Start with ${base}`,
      `Common Mistakes in ${base}`,
      `Top Tools for ${base}`,
      `How ${base} is Changing the Industry`,
      `${base} Tips for Beginners`,
      `Advanced Strategies for ${base}`,
      `Future Trends in ${base}`,
      `Best Practices for ${base}`
    ];

    setIdeas(generatedIdeas);
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Enter topic (example: SEO, blogging, AI)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={generateIdeas}
        style={{ padding: "10px 20px" }}
      >
        Generate Blog Ideas
      </button>

      {ideas.length > 0 && (
        <div style={{ marginTop: 20 }}>

          <h3>Generated Blog Ideas</h3>

          <ul>
            {ideas.map((idea, index) => (
              <li key={index}>{idea}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}