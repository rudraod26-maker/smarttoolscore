"use client";

import { useState } from "react";

export default function PasswordGenerator() {

  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generate = () => {

    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    let pass = "";

    for (let i = 0; i < length; i++) {

      const index = Math.floor(Math.random() * chars.length);

      pass += chars[index];

    }

    setPassword(pass);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        placeholder="Password Length"
        style={{
          padding: "10px",
          marginBottom: 10
        }}
      />

      <br />

      <button
        onClick={generate}
        style={{ padding: "10px 20px" }}
      >
        Generate Password
      </button>

      {password && (
        <div style={{ marginTop: 20 }}>

          <h3>{password}</h3>

          <button
            onClick={() => navigator.clipboard.writeText(password)}
            style={{ padding: "10px 20px" }}
          >
            Copy Password
          </button>

        </div>
      )}

    </div>
  );
}