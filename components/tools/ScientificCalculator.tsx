"use client";

import { useState } from "react";

export default function CurrencyConverter() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState<number | null>(null);

  const rates: any = {
    USD: 1,
    INR: 83,
    EUR: 0.92
  };

  const convert = () => {

    if (!amount) return;

    const usdValue = amount / rates[from];
    const converted = usdValue * rates[to];

    setResult(converted);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{ padding: "10px", marginBottom: 10 }}
      />

      <br />

      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        style={{ padding: "10px", marginRight: 10 }}
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
      </select>

      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        style={{ padding: "10px" }}
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
      </select>

      <br /><br />

      <button
        onClick={convert}
        style={{ padding: "10px 20px" }}
      >
        Convert
      </button>

      {result !== null && (
        <div style={{ marginTop: 20 }}>
          <h3>Converted Amount: {result.toFixed(2)} {to}</h3>
        </div>
      )}

    </div>
  );
}