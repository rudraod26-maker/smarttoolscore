"use client";

import { useState } from "react";

export default function TextDiffChecker() {

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [result, setResult] = useState("");

  const compare = () => {

    const words1 = text1.split(" ");
    const words2 = text2.split(" ");

    let diff = "";

    const max = Math.max(words1.length, words2.length);

    for (let i = 0; i < max; i++) {

      if (words1[i] !== words2[i]) {
        diff += `[${words1[i] || ""} → ${words2[i] || ""}] `;
      } else {
        diff += `${words1[i]} `;
      }

    }

    setResult(diff);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={5}
        placeholder="Text A"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <textarea
        rows={5}
        placeholder="Text B"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <button
        onClick={compare}
        style={{ padding: "10px 20px" }}
      >
        Compare Text
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>

          <h3>Difference</h3>

          <textarea
            rows={5}
            readOnly
            value={result}
            style={{
              width: "100%",
              padding: "10px"
            }}
          />

        </div>
      )}

    </div>
  );
}