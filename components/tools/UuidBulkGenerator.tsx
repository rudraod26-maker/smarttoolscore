"use client";

import { useState } from "react";

export default function RandomNumberGenerator() {

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [number, setNumber] = useState<number | null>(null);

  const generate = () => {

    const rand =
      Math.floor(Math.random() * (max - min + 1)) + min;

    setNumber(rand);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Minimum"
        value={min}
        onChange={(e) => setMin(Number(e.target.value))}
        style={{ padding: "10px", marginRight: 10 }}
      />

      <input
        type="number"
        placeholder="Maximum"
        value={max}
        onChange={(e) => setMax(Number(e.target.value))}
        style={{ padding: "10px" }}
      />

      <br /><br />

      <button
        onClick={generate}
        style={{ padding: "10px 20px" }}
      >
        Generate Number
      </button>

      {number !== null && (
        <div style={{ marginTop: 20 }}>
          <h3>{number}</h3>
        </div>
      )}

    </div>
  );
}