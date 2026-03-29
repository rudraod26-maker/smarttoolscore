"use client";

import { useState } from "react";

export default function RetirementCalculator() {

  const [monthly, setMonthly] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);

  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {

    const r = rate / 12 / 100;
    const n = years * 12;

    if (!monthly || !r || !n) return;

    const futureValue =
      monthly *
      ((Math.pow(1 + r, n) - 1) / r) *
      (1 + r);

    setResult(Math.round(futureValue));
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Monthly Investment (₹)"
        onChange={(e) => setMonthly(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <input
        type="number"
        placeholder="Expected Return Rate (%)"
        onChange={(e) => setRate(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <input
        type="number"
        placeholder="Years Until Retirement"
        onChange={(e) => setYears(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate Retirement Savings
      </button>

      {result !== null && (
        <div style={{ marginTop: 20 }}>
          <p>
            <strong>Estimated Retirement Fund:</strong> ₹{result}
          </p>
        </div>
      )}

    </div>
  );
}