export default function AboutPage() {
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
            About SmartToolsCore
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-400 mb-8">
            Helping you make smarter digital and financial decisions
          </p>

          {/* CONTENT */}
          <div className="space-y-8 text-gray-300 leading-relaxed">

            <section>
              <p>
                SmartToolsCore was created to provide practical online tools and
                educational guides that help users make smarter decisions.
              </p>
            </section>

            <section>
              <p>
                Our platform focuses on AI tools, finance calculators, and
                productivity utilities designed to simplify complex processes
                and save time.
              </p>
            </section>

            {/* MISSION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                🚀 Our Mission
              </h2>
              <p className="text-gray-400">
                We aim to make smart technology and financial understanding
                accessible to everyone through free, easy-to-use tools.
              </p>
            </section>

            {/* VISION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                🎯 Our Vision
              </h2>
              <p className="text-gray-400">
                To become a trusted platform where users can evaluate,
                calculate, and improve their digital and financial decisions.
              </p>
            </section>

          </div>

        </div>

      </div>

    </div>
  );
}