"use client";

import { useState } from "react";

export default function SalaryAfterTaxCalculator() {

  const [salary, setSalary] = useState(0);
  const [tax, setTax] = useState<number | null>(null);
  const [net, setNet] = useState<number | null>(null);

  const calculate = () => {

    let totalTax = 0;

    if (salary <= 250000) {
      totalTax = 0;
    } 
    else if (salary <= 500000) {
      totalTax = (salary - 250000) * 0.05;
    } 
    else if (salary <= 1000000) {
      totalTax = 12500 + (salary - 500000) * 0.20;
    } 
    else {
      totalTax = 112500 + (salary - 1000000) * 0.30;
    }

    setTax(Math.round(totalTax));
    setNet(Math.round(salary - totalTax));
  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Annual Salary (₹)"
        onChange={(e) => setSalary(Number(e.target.value))}
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
        Calculate Salary After Tax
      </button>

      {tax !== null && (
        <div style={{ marginTop: 20 }}>

          <p><strong>Total Tax:</strong> ₹{tax}</p>

          <p><strong>Net Salary:</strong> ₹{net}</p>

        </div>
      )}

    </div>
  );
}