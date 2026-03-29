"use client";

import { useState } from "react";

export default function Base64Encoder() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {

    try {
      const encoded = btoa(input);
      setOutput(encoded);
    } catch {
      setOutput("Encoding error");
    }

  };

  const decode = () => {

    try {
      const decoded = atob(input);
      setOutput(decoded);
    } catch {
      setOutput("Invalid Base64");
    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={5}
        placeholder="Enter text or Base64..."
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