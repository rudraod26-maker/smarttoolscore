"use client";

import { useState } from "react";

export default function PercentageCalculator() {

  const [percent, setPercent] = useState(0);
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {

    if (!percent || !number) return;

    const value = (percent / 100) * number;

    setResult(value);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Percentage (%)"
        onChange={(e) => setPercent(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Number"
        onChange={(e) => setNumber(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate
      </button>

      {result !== null && (
        <div style={{ marginTop: 20 }}>
          <h3>Result: {result}</h3>
        </div>
      )}

    </div>
  );
}