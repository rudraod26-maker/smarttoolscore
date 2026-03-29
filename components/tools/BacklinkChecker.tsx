"use client";

import { useState } from "react";

export default function BacklinkChecker() {

  const [domain, setDomain] = useState("");
  const [links, setLinks] = useState<string[]>([]);

  const check = () => {

    if (!domain) return;

    const base = domain.replace("https://", "").replace("http://", "");

    const sampleLinks = [
      `https://blog.example.com/link-to-${base}`,
      `https://news.example.com/mention-${base}`,
      `https://directory.example.com/${base}`,
      `https://forum.example.com/topic-${base}`,
      `https://medium.com/@user/${base}`,
      `https://dev.to/article-${base}`,
      `https://community.example.com/${base}`,
      `https://seo.example.com/${base}`,
      `https://review.example.com/${base}`,
      `https://tools.example.com/${base}`
    ];

    setLinks(sampleLinks);
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
        onClick={check}
        style={{ padding: "10px 20px" }}
      >
        Check Backlinks
      </button>

      {links.length > 0 && (
        <ul style={{ marginTop: 20 }}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}