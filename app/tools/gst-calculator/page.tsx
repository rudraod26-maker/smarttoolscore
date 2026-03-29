import GstCalculator from "./GstCalculator";

export const metadata = {
  title: "GST Calculator India | SmartToolsCore",
  description:
    "Calculate GST instantly. Add or remove GST from any amount using our free GST calculator.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          GST Calculator
        </h1>

        <p className="text-gray-600">
          Add or remove GST from any amount instantly.
        </p>
      </section>

      <GstCalculator />

      <section className="space-y-4 text-gray-700">

        <h2 className="text-2xl font-semibold">
          What is GST?
        </h2>

        <p>
          GST (Goods and Services Tax) is a unified tax applied on goods
          and services in India. Businesses must calculate GST on
          transactions to determine final invoice values.
        </p>

        <h2 className="text-2xl font-semibold">
          How to Use the GST Calculator
        </h2>

        <ol className="list-decimal ml-6 space-y-2">
          <li>Enter the amount</li>
          <li>Select GST rate</li>
          <li>Choose add or remove GST</li>
          <li>View the calculated tax instantly</li>
        </ol>

      </section>

    </div>
  );
}