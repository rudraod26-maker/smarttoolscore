"use client";

import { useState } from "react";

export default function TipCalculator() {

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);

  const [tipAmount, setTipAmount] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [perPerson, setPerPerson] = useState<number | null>(null);

  const calculate = () => {

    if (!bill) return;

    const tipValue = (bill * tip) / 100;
    const totalValue = bill + tipValue;
    const perPersonValue = totalValue / people;

    setTipAmount(tipValue);
    setTotal(totalValue);
    setPerPerson(perPersonValue);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Bill Amount"
        onChange={(e) => setBill(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Tip (%)"
        value={tip}
        onChange={(e) => setTip(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Number of People"
        value={people}
        onChange={(e) => setPeople(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate Tip
      </button>

      {total !== null && (
        <div style={{ marginTop: 20 }}>

          <p><strong>Tip Amount:</strong> {tipAmount?.toFixed(2)}</p>

          <p><strong>Total Bill:</strong> {total.toFixed(2)}</p>

          <p><strong>Per Person:</strong> {perPerson?.toFixed(2)}</p>

        </div>
      )}

    </div>
  );
}