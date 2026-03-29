"use client";

import { useState } from "react";

export default function WebsiteSEOAnalyzer() {

  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);

  const analyze = async () => {

    if (!url) return;

    try {

      const response = await fetch(`https://api.allorigins.win/raw?url=${url}`);
      const html = await response.text();

      const titleMatch = html.match(/<title>(.*?)<\/title>/i);
      const descMatch = html.match(/<meta name="description" content="(.*?)"/i);

      const links = html.match(/<a\s+(?:[^>]*?\s+)?href=/gi) || [];
      const words = html.replace(/<[^>]*>/g, "").split(/\s+/).length;

      setResult({
        title: titleMatch ? titleMatch[1] : "Not Found",
        description: descMatch ? descMatch[1] : "Not Found",
        wordCount: words,
        linkCount: links.length
      });

    } catch (error) {

      setResult({
        title: "Unable to fetch page",
        description: "",
        wordCount: 0,
        linkCount: 0
      });

    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Enter website URL (example: https://example.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={analyze}
        style={{ padding: "10px 20px" }}
      >
        Analyze Website
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>

          <p><strong>Title:</strong> {result.title}</p>

          <p><strong>Description:</strong> {result.description}</p>

          <p><strong>Total Words:</strong> {result.wordCount}</p>

          <p><strong>Total Links:</strong> {result.linkCount}</p>

        </div>
      )}

    </div>
  );
}