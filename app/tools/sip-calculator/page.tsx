import SipCalculator from "./SipCalculator";

export const metadata = {
  title: "SIP Calculator | SmartToolsCore",
  description:
    "Calculate SIP returns instantly. Estimate how much your monthly investments can grow over time.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          SIP Calculator
        </h1>

        <p className="text-gray-600">
          Estimate the future value of your monthly SIP investments.
        </p>
      </section>

      <SipCalculator />

      <section className="space-y-4 text-gray-700">

        <h2 className="text-2xl font-semibold">
          What is a SIP Calculator?
        </h2>

        <p>
          A SIP calculator helps investors estimate the future value of
          their monthly investments in mutual funds. It uses compound
          interest to project how investments grow over time.
        </p>

        <h2 className="text-2xl font-semibold">
          How to Use the SIP Calculator
        </h2>

        <ol className="list-decimal ml-6 space-y-2">
          <li>Enter your monthly investment amount</li>
          <li>Enter the expected annual return rate</li>
          <li>Select the investment duration</li>
          <li>Click calculate to see the future value</li>
        </ol>

      </section>

    </div>
  );
}