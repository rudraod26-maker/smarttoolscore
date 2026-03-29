"use client";

import { useState } from "react";

export default function AgeCalculator() {

  const [dob, setDob] = useState("");
  const [age, setAge] = useState<string | null>(null);

  const calculate = () => {

    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += 30;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(`${years} Years, ${months} Months, ${days} Days`);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={{ padding: "10px", marginBottom: 10 }}
      />

      <br />

      <button
        onClick={calculate}
        style={{ padding: "10px 20px" }}
      >
        Calculate Age
      </button>

      {age && (
        <div style={{ marginTop: 20 }}>
          <h3>Your Age: {age}</h3>
        </div>
      )}

    </div>
  );
}