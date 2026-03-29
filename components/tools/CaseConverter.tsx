"use client";

import { useState } from "react";

export default function CaseConverter() {
  const [text, setText] = useState("");

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toTitle = () =>
    setText(
      text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    );

  return (
    <div style={{ marginTop: 20 }}>
      <textarea
        rows={6}
        style={{ width: "100%", padding: "10px" }}
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ marginTop: 15 }}>
        <button onClick={toUpper}>UPPERCASE</button>
        <button onClick={toLower} style={{ marginLeft: 10 }}>lowercase</button>
        <button onClick={toTitle} style={{ marginLeft: 10 }}>Title Case</button>
      </div>
    </div>
  );
}