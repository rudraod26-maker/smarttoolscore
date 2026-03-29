"use client";

import { useState } from "react";

export default function MetaTagGenerator() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [author, setAuthor] = useState("");

  const metaTags = `
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="${author}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
`;

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Page Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <textarea
        placeholder="Meta Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Keywords (comma separated)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <textarea
        rows={6}
        readOnly
        value={metaTags}
        style={{ width: "100%", padding: "10px", marginTop: 10 }}
      />

    </div>
  );
}