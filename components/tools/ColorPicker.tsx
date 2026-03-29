"use client";

import { useState } from "react";

export default function ColorPicker() {

  const [color, setColor] = useState("#000000");

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{
          width: "100px",
          height: "50px",
          border: "none"
        }}
      />

      <div style={{ marginTop: 20 }}>

        <h3>HEX: {color}</h3>

        <button
          onClick={() => navigator.clipboard.writeText(color)}
          style={{ padding: "10px 20px" }}
        >
          Copy HEX
        </button>

      </div>

    </div>
  );
}