"use client";
import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;

  return (
    <div style={{ marginTop: "20px" }}>
      <textarea
        rows={6}
        style={{ width: "100%", padding: "10px" }}
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>
        <p><strong>Words:</strong> {words}</p>
        <p><strong>Characters:</strong> {characters}</p>
      </div>
    </div>
  );
}