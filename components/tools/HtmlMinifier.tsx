"use client";

import { useState } from "react";

export default function HtmlMinifier() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const minify = () => {

    try {

      let minified = input
        .replace(/<!--[\s\S]*?-->/g, "") // remove comments
        .replace(/\n/g, "") // remove new lines
        .replace(/\s{2,}/g, " ") // remove extra spaces
        .trim();

      setOutput(minified);

    } catch {

      setOutput("Error processing HTML");

    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={6}
        placeholder="Paste HTML code..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <button
        onClick={minify}
        style={{ padding: "10px 20px" }}
      >
        Minify HTML
      </button>

      <textarea
        rows={6}
        readOnly
        value={output}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: 10
        }}
      />

    </div>
  );
}