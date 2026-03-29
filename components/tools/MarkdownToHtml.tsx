"use client";

import { useState } from "react";
import { marked } from "marked";

export default function MarkdownToHtml() {

  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  const convert = async () => {

    const output = await marked.parse(markdown);
setHtml(output as string);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={6}
        placeholder="Enter Markdown..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <button
        onClick={convert}
        style={{ padding: "10px 20px" }}
      >
        Convert to HTML
      </button>

      {html && (
        <div style={{ marginTop: 20 }}>

          <h3>HTML Output</h3>

          <textarea
            rows={6}
            readOnly
            value={html}
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