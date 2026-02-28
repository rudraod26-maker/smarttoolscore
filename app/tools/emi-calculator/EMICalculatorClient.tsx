"use client";

import { useState } from "react";

export default function EMICalculatorClient() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(8);
  const [months, setMonths] = useState(60);

  const monthlyRate = rate / 100 / 12;

  const emi =
    monthlyRate === 0
      ? principal / months
      : (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">
        EMI Calculator
      </h1>

      <p className="text-gray-600">
        Calculate your monthly EMI instantly using loan amount,
        interest rate and tenure.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <InputField
          label="Loan Amount"
          value={principal}
          onChange={setPrincipal}
        />

        <InputField
          label="Interest Rate (%)"
          value={rate}
          onChange={setRate}
        />

        <InputField
          label="Tenure (Months)"
          value={months}
          onChange={setMonths}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <ResultCard label="Monthly EMI" value={emi} />
        <ResultCard label="Total Interest" value={totalInterest} />
        <ResultCard label="Total Payment" value={totalPayment} />
      </div>
    </section>
  );
}

function InputField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-medium">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="p-3 border rounded-lg"
      />
    </div>
  );
}

function ResultCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-lg font-semibold mb-2">{label}</h2>
      <p className="text-xl font-bold">
        ₹ {value.toFixed(2)}
      </p>
    </div>
  );
}