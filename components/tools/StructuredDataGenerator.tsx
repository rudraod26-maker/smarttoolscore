"use client";

import { useState } from "react";

export default function StructuredDataGenerator() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const schema = `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${title}",
  "description": "${description}",
  "author": {
    "@type": "Person",
    "name": "${author}"
  },
  "mainEntityOfPage": "${url}"
}
`;

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <textarea
        placeholder="Article Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Page URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <textarea
        rows={10}
        readOnly
        value={schema}
        style={{ width: "100%", padding: "10px", marginTop: 10 }}
      />

    </div>
  );
}