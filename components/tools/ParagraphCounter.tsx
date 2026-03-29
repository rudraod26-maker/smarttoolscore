"use client";

import { useState } from "react";

export default function ParagraphCounter() {
  const [text, setText] = useState("");

  const paragraphs = text.split(/\n+/).filter(Boolean).length;

  return (
    <div style={{ marginTop: 20 }}>
      <textarea
        rows={6}
        style={{ width: "100%", padding: "10px" }}
        placeholder="Paste text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p style={{ marginTop: 10 }}>
        <strong>Paragraphs:</strong> {paragraphs}
      </p>
    </div>
  );
}