import type { Metadata } from "next";
import LoanCalculatorClient from "./LoanCalculatorClient";
import AdBlock from "@/components/AdBlock";

export const metadata: Metadata = {
  title: "Loan Calculator (EMI & Interest) | SmartToolsAI",
  description:
    "Free online loan calculator to estimate monthly EMI, total interest and total payment instantly. Simple and accurate.",
  keywords: [
    "loan calculator",
    "EMI calculator",
    "monthly loan payment calculator",
    "interest calculator",
  ],
};

export default function LoanCalculatorPage() {
  return (
    <div className="space-y-12">
      <LoanCalculatorClient />
      <AdBlock />
      {/* SEO Content Section */}
      <section className="space-y-4 text-gray-700">
        <h2 className="text-2xl font-semibold">
          How Does a Loan Calculator Work?
        </h2>

        <p>
          A loan calculator helps you estimate your monthly EMI (Equated
          Monthly Installment) based on loan amount, interest rate and tenure.
          It also shows the total interest payable and total repayment amount.
        </p>

        <h3 className="text-xl font-semibold">
          Why Use an Online Loan Calculator?
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Plan your monthly budget</li>
          <li>Compare different loan options</li>
          <li>Understand total interest cost</li>
          <li>Make smarter financial decisions</li>
        </ul>
      </section>
      <AdBlock />
    </div>
  );
}