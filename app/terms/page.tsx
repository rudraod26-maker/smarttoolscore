export default function TermsPage() {
  return (
    <div className="min-h-screen px-4 py-16">

      <div className="max-w-4xl mx-auto">

        {/* CARD */}
        <div
          className="
          bg-[#111827] 
          border border-gray-800 
          rounded-2xl 
          p-8 sm:p-10
          shadow-[0_0_40px_rgba(59,130,246,0.08)]
        "
        >

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Terms & Conditions
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-400 mb-8">
            Last updated: March 2026
          </p>

          {/* INTRO */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            By accessing SmartToolsCore (https://smarttoolscore.com), you agree
            to these terms and conditions.
          </p>

          {/* CONTENT */}
          <div className="space-y-8 text-gray-300 leading-relaxed">

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-2">
                Use of Website
              </h2>
              <p className="text-gray-400">
                The tools and content provided are for informational purposes
                only. We do not guarantee financial or professional outcomes.
              </p>
            </section>

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-2">
                No Financial Advice
              </h2>
              <p className="text-gray-400">
                Finance calculators and guides are educational tools. Users
                should consult qualified professionals before making financial
                decisions.
              </p>
            </section>

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-2">
                Limitation of Liability
              </h2>
              <p className="text-gray-400">
                SmartToolsCore is not liable for any losses arising from the use
                of information or tools on this website.
              </p>
            </section>

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-2">
                Changes to Terms
              </h2>
              <p className="text-gray-400">
                We may update these terms at any time without prior notice.
              </p>
            </section>

          </div>

        </div>

      </div>

    </div>
  );
}