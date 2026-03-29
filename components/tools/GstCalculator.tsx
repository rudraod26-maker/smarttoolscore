"use client";

import { useState } from "react";

export default function GstCalculator() {

  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(18);

  const [gst, setGst] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  const calculate = () => {

    if (!amount) return;

    const gstAmount = (amount * rate) / 100;
    const totalAmount = amount + gstAmount;

    setGst(Math.round(gstAmount));
    setTotal(Math.round(totalAmount));
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Amount (₹)"
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <select
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      >

        <option value={5}>5%</option>
        <option value={12}>12%</option>
        <option value={18}>18%</option>
        <option value={28}>28%</option>

      </select>

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate GST
      </button>

      {gst !== null && (
        <div style={{ marginTop: 20 }}>

          <p><strong>GST Amount:</strong> ₹{gst}</p>

          <p><strong>Total Price:</strong> ₹{total}</p>

        </div>
      )}

    </div>
  );
}