"use client";

import { useState } from "react";

export default function SitemapGenerator() {

  const [urls, setUrls] = useState("");
  const [sitemap, setSitemap] = useState("");

  const generate = () => {

    const list = urls
      .split("\n")
      .map((url) => url.trim())
      .filter(Boolean);

    const xml =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${list
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("")}
</urlset>`;

    setSitemap(xml);
  };

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={6}
        style={{ width: "100%", padding: "10px" }}
        placeholder="Enter one URL per line..."
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />

      <button
        onClick={generate}
        style={{ marginTop: 10, padding: "10px 20px" }}
      >
        Generate Sitemap
      </button>

      {sitemap && (
        <textarea
          rows={10}
          readOnly
          value={sitemap}
          style={{
            width: "100%",
            marginTop: 15,
            padding: "10px"
          }}
        />
      )}

    </div>
  );
}