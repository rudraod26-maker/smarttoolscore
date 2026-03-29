"use client";

import { useState } from "react";

export default function MortgageCalculator() {

  const [homePrice, setHomePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);

  const [monthly, setMonthly] = useState<number | null>(null);

  const calculate = () => {

    const loanAmount = homePrice - downPayment;
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;

    if (!loanAmount || !monthlyRate || !months) return;

    const payment =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setMonthly(Math.round(payment));
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Home Price (₹)"
        onChange={(e) => setHomePrice(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Down Payment (₹)"
        onChange={(e) => setDownPayment(Number(e.target.value))}
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
        placeholder="Loan Term (Years)"
        onChange={(e) => setYears(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate Mortgage
      </button>

      {monthly !== null && (
        <div style={{ marginTop: 20 }}>
          <h3>Monthly Payment: ₹{monthly}</h3>
        </div>
      )}

    </div>
  );
}