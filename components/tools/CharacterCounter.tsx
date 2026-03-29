"use client";

import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;

  return (
    <div style={{ marginTop: 30 }}>
      <textarea
        rows={6}
        style={{ width: "100%", padding: "10px" }}
        placeholder="Type or paste your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ marginTop: 20 }}>
        <p><strong>Total Characters:</strong> {characters}</p>
        <p><strong>Characters (No Spaces):</strong> {charactersNoSpaces}</p>
      </div>
    </div>
  );
}