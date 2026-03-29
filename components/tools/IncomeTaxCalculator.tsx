"use client";

import { useState } from "react";

export default function IncomeTaxCalculator() {

  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState<number | null>(null);

  const calculate = () => {

    let totalTax = 0;

    if (income <= 250000) {
      totalTax = 0;
    } 
    else if (income <= 500000) {
      totalTax = (income - 250000) * 0.05;
    } 
    else if (income <= 1000000) {
      totalTax = 12500 + (income - 500000) * 0.20;
    } 
    else {
      totalTax = 112500 + (income - 1000000) * 0.30;
    }

    setTax(Math.round(totalTax));
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Annual Income (₹)"
        onChange={(e) => setIncome(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate Tax
      </button>

      {tax !== null && (
        <div style={{ marginTop: 20 }}>

          <p><strong>Estimated Tax:</strong> ₹{tax}</p>

          <p><strong>Net Income:</strong> ₹{income - tax}</p>

        </div>
      )}

    </div>
  );
}