"use client";

import { useState } from "react";

export default function CompoundInterestCalculator() {

  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);

  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {

    const r = rate / 100;

    if (!principal || !r || !years) return;

    const amount = principal * Math.pow(1 + r, years);

    setResult(Math.round(amount));
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Principal Amount (₹)"
        onChange={(e) => setPrincipal(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Annual Interest Rate (%)"
        onChange={(e) => setRate(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Time (Years)"
        onChange={(e) => setYears(Number(e.target.value))}
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
          <h3>Future Value: ₹{result}</h3>
        </div>
      )}

    </div>
  );
}