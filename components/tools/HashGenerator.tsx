"use client";

import { useState } from "react";

export default function HashGenerator() {

  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");

  const generate = async (type: string) => {

    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    if (type === "SHA-256") {

      const digest = await crypto.subtle.digest("SHA-256", data);

      const hashArray = Array.from(new Uint8Array(digest));
      const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

      setHash(hashHex);
    }

    if (type === "MD5") {

      setHash("MD5 requires external library");

    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={4}
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <div>

        <button
          onClick={() => generate("SHA-256")}
          style={{ padding: "10px 20px", marginRight: 10 }}
        >
          Generate SHA256
        </button>

        <button
          onClick={() => generate("MD5")}
          style={{ padding: "10px 20px" }}
        >
          Generate MD5
        </button>

      </div>

      <textarea
        rows={5}
        readOnly
        value={hash}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: 10
        }}
      />

    </div>
  );
}