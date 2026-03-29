"use client";

import { useState } from "react";

export default function UuidGenerator() {

  const [uuid, setUuid] = useState("");

  const generate = () => {

    const id = crypto.randomUUID();
    setUuid(id);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <button
        onClick={generate}
        style={{ padding: "10px 20px" }}
      >
        Generate UUID
      </button>

      <textarea
        rows={3}
        readOnly
        value={uuid}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: 10
        }}
      />

    </div>
  );
}