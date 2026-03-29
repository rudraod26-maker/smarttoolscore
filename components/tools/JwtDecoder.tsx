"use client";

import { useState } from "react";

export default function JwtDecoder() {

  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");

  const decode = () => {

    try {

      const parts = token.split(".");

      if (parts.length !== 3) {
        setHeader("Invalid JWT");
        setPayload("");
        return;
      }

      const decodedHeader = JSON.parse(atob(parts[0]));
      const decodedPayload = JSON.parse(atob(parts[1]));

      setHeader(JSON.stringify(decodedHeader, null, 2));
      setPayload(JSON.stringify(decodedPayload, null, 2));

    } catch {

      setHeader("Invalid JWT");
      setPayload("");

    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <textarea
        rows={4}
        placeholder="Paste JWT token..."
        value={token}
        onChange={(e) => setToken(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <button
        onClick={decode}
        style={{ padding: "10px 20px" }}
      >
        Decode JWT
      </button>

      <h3 style={{ marginTop: 20 }}>Header</h3>

      <textarea
        rows={6}
        readOnly
        value={header}
        style={{ width: "100%", padding: "10px" }}
      />

      <h3 style={{ marginTop: 20 }}>Payload</h3>

      <textarea
        rows={6}
        readOnly
        value={payload}
        style={{ width: "100%", padding: "10px" }}
      />

    </div>
  );
}