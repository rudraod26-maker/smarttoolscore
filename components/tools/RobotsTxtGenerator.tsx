"use client";

import { useState } from "react";

export default function RobotsTxtGenerator() {

  const [userAgent, setUserAgent] = useState("*");
  const [allow, setAllow] = useState("/");
  const [disallow, setDisallow] = useState("");
  const [sitemap, setSitemap] = useState("");

  const robots = `User-agent: ${userAgent}
Allow: ${allow}
${disallow ? `Disallow: ${disallow}` : ""}
${sitemap ? `Sitemap: ${sitemap}` : ""}`;

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="User Agent (example: *)"
        value={userAgent}
        onChange={(e) => setUserAgent(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Allow Path (example: /)"
        value={allow}
        onChange={(e) => setAllow(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Disallow Path (example: /admin)"
        value={disallow}
        onChange={(e) => setDisallow(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Sitemap URL"
        value={sitemap}
        onChange={(e) => setSitemap(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <textarea
        rows={8}
        readOnly
        value={robots}
        style={{ width: "100%", padding: "10px", marginTop: 10 }}
      />

    </div>
  );
}