export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-400 mb-8">
            Last updated: March 2026
          </p>

          {/* INTRO */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            At SmartToolsCore, we respect your privacy and are committed to
            protecting your personal information.
          </p>

          {/* SECTIONS */}
          <div className="space-y-8 text-gray-300 leading-relaxed">

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-2">
                Information We Collect
              </h2>
              <p className="text-gray-400">
                We may collect non-personal information such as browser type,
                device information, and usage data to improve our services.
              </p>
            </section>

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-2">
                Cookies
              </h2>
              <p className="text-gray-400">
                Our website may use cookies to enhance user experience and
                analyze traffic.
              </p>
            </section>

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-2">
                Third-Party Services
              </h2>
              <p className="text-gray-400">
                We may use third-party services such as analytics or advertising
                providers that collect information according to their privacy
                policies.
              </p>
            </section>

            {/* SECTION */}
            <section className="bg-[#0f172a] border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-2">
                Contact
              </h2>
              <p className="text-gray-400">
                If you have any questions about this privacy policy, you can
                contact us via the contact page on this website.
              </p>
            </section>

          </div>

        </div>

      </div>

    </div>
  )};