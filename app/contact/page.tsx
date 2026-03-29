export default function ContactPage() {
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
            Contact Us
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-400 mb-8">
            We usually respond within 48 hours
          </p>

          {/* CONTENT */}
          <div className="space-y-8 text-gray-300 leading-relaxed">

            <section>
              <p>
                For inquiries, suggestions, or support, feel free to reach out
                using the contact information below.
              </p>
            </section>

            {/* EMAIL BOX */}
            <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-5">
              <p className="text-sm text-gray-500 mb-1">
                Email Address
              </p>
              <p className="text-blue-400 font-medium text-lg">
                smarttoolscore@gmail.com
              </p>
            </div>

            <section>
              <p>
                We value your feedback and continuously work to improve
                SmartToolsCore. Whether you have suggestions, feature requests,
                or found a bug — we’d love to hear from you.
              </p>
            </section>

          </div>

        </div>

      </div>

    </div>
  );
}