"use client";

import { useState } from "react";

export default function UrlEncoder() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {

    try {
      setOutput(encodeURIComponent(input));
    } catch {
      setOutput("Encoding error");
    }

  };

  const decode = () => {

    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setOutput("Invalid URL encoding");
    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={5}
        placeholder="Enter URL text..."
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
          onClick={encode}
          style={{ padding: "10px 20px", marginRight: 10 }}
        >
          Encode
        </button>

        <button
          onClick={decode}
          style={{ padding: "10px 20px" }}
        >
          Decode
        </button>

      </div>

      <textarea
        rows={6}
        readOnly
        value={output}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: 10
        }}
      />

    </div>
  );
}