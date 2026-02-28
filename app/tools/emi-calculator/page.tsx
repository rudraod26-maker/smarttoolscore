import AdBlock from "@/components/AdBlock";
import type { Metadata } from "next";
import EMICalculatorClient from "./EMICalculatorClient";

export const metadata: Metadata = {
  title: "EMI Calculator (Monthly Loan EMI) | SmartToolsAI",
  description:
    "Free EMI calculator to calculate your monthly installment, total interest and total repayment amount instantly.",
  keywords: [
    "emi calculator",
    "monthly emi calculator",
    "loan emi calculator",
    "emi interest calculator",
  ],
};

export default function EMICalculatorPage() {
  return (
    <div className="space-y-12">
      <EMICalculatorClient />
      <AdBlock />
      {/* SEO Content Section */}
      <section className="space-y-4 text-gray-700">
        <h2 className="text-2xl font-semibold">
          What is EMI?
        </h2>
        
        <p>
          EMI (Equated Monthly Installment) is the fixed amount you pay
          every month towards your loan repayment. It includes both
          principal and interest components.
        </p>

        <h3 className="text-xl font-semibold">
          Why Use an EMI Calculator?
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Understand your monthly financial commitment</li>
          <li>Compare loan offers</li>
          <li>Plan repayment strategy</li>
          <li>Avoid financial surprises</li>
        </ul>
      </section>
      <AdBlock/>
    </div>
  );
}