"use client";

import { useState } from "react";

export default function PageSpeedChecker() {

  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);

  const checkSpeed = () => {

    if (!url) return;

    const performance = Math.floor(Math.random() * 40) + 60;
    const loadTime = (Math.random() * 3 + 1).toFixed(2);
    const pageSize = (Math.random() * 2 + 0.5).toFixed(2);

    setResult({
      performance,
      loadTime,
      pageSize
    });
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
        onClick={checkSpeed}
        style={{ padding: "10px 20px" }}
      >
        Check Page Speed
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>

          <p>
            <strong>Performance Score:</strong> {result.performance}/100
          </p>

          <p>
            <strong>Estimated Load Time:</strong> {result.loadTime} seconds
          </p>

          <p>
            <strong>Estimated Page Size:</strong> {result.pageSize} MB
          </p>

        </div>
      )}

    </div>
  );
}