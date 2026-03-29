"use client";

import { useState } from "react";

export default function InflationCalculator() {

  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);

  const [futureValue, setFutureValue] = useState<number | null>(null);

  const calculate = () => {

    const r = rate / 100;

    if (!amount || !r || !years) return;

    const value = amount * Math.pow(1 + r, years);

    setFutureValue(Math.round(value));
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Current Amount (₹)"
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Inflation Rate (%)"
        onChange={(e) => setRate(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Years"
        onChange={(e) => setYears(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate
      </button>

      {futureValue !== null && (
        <div style={{ marginTop: 20 }}>
          <p>
            <strong>Future Value:</strong> ₹{futureValue}
          </p>
        </div>
      )}

    </div>
  );
}