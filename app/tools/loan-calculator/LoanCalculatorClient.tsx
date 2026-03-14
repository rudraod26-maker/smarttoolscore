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

      <section style={{ marginTop: "50px", lineHeight: "1.7" }}>
  <h2>About This Loan EMI Calculator</h2>

  <p>
    The SmartToolsCore Loan Calculator helps users estimate monthly loan
    payments quickly and accurately. Whether you are planning to take a
    personal loan, home loan or business loan, understanding your monthly
    repayment amount is essential for financial planning.
  </p>

  <p>
    This EMI calculator allows you to enter the loan amount, interest rate
    and repayment period to calculate the expected monthly installment.
    It provides a quick overview of how much you will pay every month and
    how interest impacts the total repayment amount.
  </p>

  <h2>What Is EMI?</h2>

  <p>
    EMI stands for Equated Monthly Installment. It is the fixed payment that
    borrowers make to lenders every month until the loan is fully repaid.
    Each EMI payment includes both principal repayment and interest charges.
  </p>

  <p>
    The EMI amount depends on three major factors: loan amount, interest rate
    and loan tenure. A longer loan tenure typically results in smaller monthly
    payments but increases the total interest paid over time.
  </p>

  <h2>Benefits of Using an EMI Calculator</h2>

  <ul>
    <li>Plan your finances before taking a loan.</li>
    <li>Compare different loan options easily.</li>
    <li>Understand how interest rates affect repayments.</li>
    <li>Estimate your monthly financial commitment.</li>
  </ul>

  <h2>How to Use This Loan Calculator</h2>

  <ul>
    <li>Enter the loan amount you want to borrow.</li>
    <li>Input the annual interest rate.</li>
    <li>Select the loan tenure in months or years.</li>
    <li>The calculator will instantly show your monthly EMI.</li>
  </ul>

  <p>
    Using an EMI calculator before applying for a loan helps borrowers make
    smarter financial decisions and avoid taking loans that exceed their
    repayment capacity.
  </p>
</section>


    </div>
  );
}