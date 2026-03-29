export default function DisclaimerPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Disclaimer
          </h1>

          {/* CONTENT */}
          <div className="space-y-8 text-gray-300 leading-relaxed">

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400">
                The information and tools provided on this website are for
                general informational purposes only. While we strive to ensure
                accuracy and reliability, we make no guarantees about the
                completeness, reliability, or accuracy of any results generated
                by our tools.
              </p>
            </section>

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400">
                The use of any information or tools on this website is strictly
                at your own risk. We are not responsible for any losses,
                damages, or issues that may arise from the use of our services.
              </p>
            </section>

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400">
                Our website may contain links to external websites. We do not
                control the nature, content, or availability of those sites and
                are not responsible for their content.
              </p>
            </section>

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400">
                By using this website, you agree to this disclaimer and its
                terms.
              </p>
            </section>

          </div>

        </div>

      </div>

    </div>
  );
}