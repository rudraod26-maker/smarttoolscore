"use client";

import { useState } from "react";

export default function DiscountCalculator() {

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const [finalPrice, setFinalPrice] = useState<number | null>(null);
  const [saved, setSaved] = useState<number | null>(null);

  const calculate = () => {

    if (!price || !discount) return;

    const discountAmount = (price * discount) / 100;
    const result = price - discountAmount;

    setSaved(discountAmount);
    setFinalPrice(result);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Original Price"
        onChange={(e) => setPrice(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Discount (%)"
        onChange={(e) => setDiscount(Number(e.target.value))}
        style={{ width: "100%", padding: "10px", marginBottom: 10 }}
      />

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate Discount
      </button>

      {finalPrice !== null && (
        <div style={{ marginTop: 20 }}>

          <p><strong>You Save:</strong> {saved}</p>

          <p><strong>Final Price:</strong> {finalPrice}</p>

        </div>
      )}

    </div>
  );
}