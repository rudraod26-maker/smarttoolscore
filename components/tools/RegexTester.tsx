"use client";

import { useState } from "react";

export default function RegexTester() {

  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState<string[]>([]);

  const testRegex = () => {

    try {

      const regex = new RegExp(pattern, "g");
      const result = text.match(regex) || [];

      setMatches(result);

    } catch {

      setMatches(["Invalid Regex"]);

    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Enter Regex pattern (example: \\d+)"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <textarea
        rows={5}
        placeholder="Enter test text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <button
        onClick={testRegex}
        style={{ padding: "10px 20px" }}
      >
        Test Regex
      </button>

      {matches.length > 0 && (
        <div style={{ marginTop: 20 }}>

          <h3>Matches</h3>

          <ul>
            {matches.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}