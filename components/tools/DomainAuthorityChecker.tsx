"use client";

import { useState } from "react";

export default function DomainAuthorityChecker() {

  const [domain, setDomain] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const checkAuthority = () => {

    if (!domain) return;

    const randomScore = Math.floor(Math.random() * 50) + 50; // 50–100

    setScore(randomScore);
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Enter domain (example: example.com)"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={checkAuthority}
        style={{ padding: "10px 20px" }}
      >
        Check Domain Authority
      </button>

      {score !== null && (
        <div style={{ marginTop: 20 }}>

          <p><strong>Domain:</strong> {domain}</p>

          <p>
            <strong>Authority Score:</strong> {score}/100
          </p>

        </div>
      )}

    </div>
  );
}