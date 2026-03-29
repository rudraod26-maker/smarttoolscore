"use client";

import { useState } from "react";

export default function EmiCalculator() {

  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);

  const [emi, setEmi] = useState<number | null>(null);

  const calculate = () => {

    const principal = amount;
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;

    if (!principal || !monthlyRate || !months) return;

    const emiValue =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(Math.round(emiValue));
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Loan Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Interest Rate (%)"
        onChange={(e) => setRate(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Loan Tenure (Years)"
        onChange={(e) => setYears(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate EMI
      </button>

      {emi !== null && (
        <div style={{ marginTop: 20 }}>
          <h3>Monthly EMI: ₹{emi}</h3>
        </div>
      )}

    </div>
  );
}