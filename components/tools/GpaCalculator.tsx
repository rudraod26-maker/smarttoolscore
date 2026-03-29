"use client";

import { useState } from "react";

export default function GpaCalculator() {

  const [grades, setGrades] = useState<number[]>([]);
  const [input, setInput] = useState("");

  const addGrade = () => {

    const value = Number(input);

    if (!value) return;

    setGrades([...grades, value]);
    setInput("");

  };

  const calculate = () => {

    if (grades.length === 0) return 0;

    const total = grades.reduce((a, b) => a + b, 0);

    return (total / grades.length).toFixed(2);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Enter grade (0–10)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "10px", marginRight: 10 }}
      />

      <button onClick={addGrade} style={{ padding: "10px 20px" }}>
        Add Grade
      </button>

      <div style={{ marginTop: 20 }}>

        <p><strong>Grades:</strong> {grades.join(", ")}</p>

        {grades.length > 0 && (
          <h3>GPA: {calculate()}</h3>
        )}

      </div>

    </div>
  );
}