"use client";

import { useState } from "react";

export default function JsonToCsvConverter() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convert = () => {

    try {

      const json = JSON.parse(input);

      if (!Array.isArray(json)) {
        setOutput("JSON must be an array of objects");
        return;
      }

      const headers = Object.keys(json[0]);

      const csv = [
        headers.join(","),
        ...json.map((row: any) =>
          headers.map((field) => JSON.stringify(row[field] ?? "")).join(",")
        )
      ].join("\n");

      setOutput(csv);

    } catch {

      setOutput("Invalid JSON");

    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={6}
        placeholder="Paste JSON array here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <button
        onClick={convert}
        style={{ padding: "10px 20px" }}
      >
        Convert to CSV
      </button>

      <textarea
        rows={8}
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