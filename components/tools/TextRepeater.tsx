"use client";

import { useState } from "react";

export default function TextRepeater() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);

  const repeated = Array(count).fill(text).join(" ");

  return (
    <div style={{ marginTop: 20 }}>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      />

      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        style={{ marginTop: 10, padding: "10px", width: "100%" }}
      />

      <textarea
        rows={5}
        style={{ marginTop: 15, width: "100%", padding: "10px" }}
        value={repeated}
        readOnly
      />
    </div>
  );
}