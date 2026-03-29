"use client";

import { useState } from "react";

export default function ReadingTimeCalculator() {

  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const readingSpeed = 200; // average words per minute

  const minutes = Math.ceil(words / readingSpeed);

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={6}
        style={{ width: "100%", padding: "10px" }}
        placeholder="Paste your article text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ marginTop: 15 }}>

        <p><strong>Word Count:</strong> {words}</p>

        <p>
          <strong>Estimated Reading Time:</strong> {minutes} minute
          {minutes !== 1 && "s"}
        </p>

      </div>

    </div>
  );
}