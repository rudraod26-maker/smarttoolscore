export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Disclaimer
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          This Disclaimer outlines important information regarding the use of SmartToolsCore and the limitations of the content provided on this website.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Last updated: April 12, 2026
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10 text-gray-700 leading-relaxed">

        {/* Intro */}
        <section className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
          <p>
            The information provided on <strong>SmartToolsCore</strong> is for general informational and educational purposes only. While we strive to keep the content accurate and up to date, we make no guarantees of any kind regarding completeness, reliability, or accuracy.
          </p>
        </section>

        {/* General Use */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            General Information
          </h2>
          <p>
            All content on this website is provided in good faith for general use. Any action you take based on the information found on this website is strictly at your own risk.
          </p>
        </section>

        {/* AI Content */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Generated Content
          </h2>
          <p>
            Some content on this website may be generated or processed using automated systems. While efforts are made to ensure useful and relevant output, we do not guarantee that all content will always be accurate, complete, or suitable for every purpose. Users are encouraged to review and verify information before relying on it.
          </p>
        </section>

        {/* No Professional Advice */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            No Professional Advice
          </h2>
          <p>
            The content available on SmartToolsCore does not constitute professional advice of any kind, including but not limited to legal, financial, academic, or technical advice. You should seek appropriate professional guidance where necessary.
          </p>
        </section>

        {/* External Content */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            External Content
          </h2>
          <p>
            The website may reference or display content from external sources or third parties. We do not control or guarantee the accuracy, relevance, or reliability of such external content and are not responsible for any outcomes resulting from its use.
          </p>
        </section>

        {/* Advertising */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Advertising Disclaimer
          </h2>
          <p>
            SmartToolsCore may display advertisements through third-party advertising partners, including services such as Google AdSense. These advertisements are provided by external networks, and we do not endorse or take responsibility for the products, services, or claims made in such ads.
          </p>
        </section>

        {/* Limitation */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Limitation of Liability
          </h2>
          <p>
            Under no circumstances shall SmartToolsCore be held liable for any loss or damage, including indirect or consequential loss, arising from the use of this website or reliance on any information provided herein.
          </p>
        </section>

        {/* Consent */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Consent
          </h2>
          <p>
            By using this website, you agree to this Disclaimer and accept its terms.
          </p>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Updates
          </h2>
          <p>
            We may update this Disclaimer from time to time to reflect changes in our website, policies, or legal requirements. Any updates will be posted on this page.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="mb-2">
            If you have any questions about this Disclaimer or need support, you can contact us at:
          </p>
          <p className="font-medium text-gray-900">
            support@smarttoolscore.com
          </p>
        </section>

      </div>
    </main>
  );
}