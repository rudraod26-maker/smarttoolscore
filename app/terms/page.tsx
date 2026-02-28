export const metadata = {
  title: "Terms & Conditions | SmartToolScore",
  description: "Terms and conditions for using SmartToolScore.com",
};

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>

      <p>
        By accessing SmartToolScore (https://smarttoolscore.com),
        you agree to these terms and conditions.
      </p>

      <h2 className="text-xl font-semibold">Use of Website</h2>
      <p>
        The tools and content provided are for informational purposes only.
        We do not guarantee financial or professional outcomes.
      </p>

      <h2 className="text-xl font-semibold">No Financial Advice</h2>
      <p>
        Finance calculators and guides are educational tools.
        Users should consult qualified professionals before making
        financial decisions.
      </p>

      <h2 className="text-xl font-semibold">Limitation of Liability</h2>
      <p>
        SmartToolScore is not liable for any losses arising from the use
        of information or tools on this website.
      </p>

      <h2 className="text-xl font-semibold">Changes to Terms</h2>
      <p>
        We may update these terms at any time without prior notice.
      </p>
    </div>
  );
}