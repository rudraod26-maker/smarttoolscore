"use client";

import { useState } from "react";

export default function UnitConverter() {

  const [value, setValue] = useState(0);
  const [from, setFrom] = useState("meters");
  const [to, setTo] = useState("kilometers");
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {

    let meters = value;

    if (from === "kilometers") meters = value * 1000;
    if (from === "centimeters") meters = value / 100;

    let output = meters;

    if (to === "kilometers") output = meters / 1000;
    if (to === "centimeters") output = meters * 100;

    setResult(output);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Enter value"
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ padding: "10px", marginBottom: 10 }}
      />

      <br />

      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        style={{ padding: "10px", marginRight: 10 }}
      >
        <option value="meters">Meters</option>
        <option value="kilometers">Kilometers</option>
        <option value="centimeters">Centimeters</option>
      </select>

      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        style={{ padding: "10px" }}
      >
        <option value="meters">Meters</option>
        <option value="kilometers">Kilometers</option>
        <option value="centimeters">Centimeters</option>
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
          <h3>Result: {result}</h3>
        </div>
      )}

    </div>
  );
}