"use client";

import { useState } from "react";

export default function DateDifferenceCalculator() {

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {

    if (!date1 || !date2) return;

    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const diff = Math.abs(d2.getTime() - d1.getTime());

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    setResult(days);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <h3>Start Date</h3>

      <input
        type="date"
        value={date1}
        onChange={(e) => setDate1(e.target.value)}
        style={{ padding: "10px", marginBottom: 10 }}
      />

      <h3>End Date</h3>

      <input
        type="date"
        value={date2}
        onChange={(e) => setDate2(e.target.value)}
        style={{ padding: "10px", marginBottom: 10 }}
      />

      <br />

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate Difference
      </button>

      {result !== null && (
        <div style={{ marginTop: 20 }}>
          <h3>{result} Days</h3>
        </div>
      )}

    </div>
  );
}