"use client";

import { useState } from "react";

export default function LoanCalculatorClient() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(5);

  const monthlyRate = rate / 100 / 12;
  const totalMonths = years * 12;

  const emi =
    monthlyRate === 0
      ? principal / totalMonths
      : (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">
        Loan EMI Calculator
      </h1>

      <p className="text-gray-600">
        Calculate your monthly EMI, total interest and total repayment amount instantly.
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
          label="Loan Tenure (Years)"
          value={years}
          onChange={setYears}
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