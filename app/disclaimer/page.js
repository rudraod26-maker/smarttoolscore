export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Disclaimer
        </h1>
        <p className="text-gray-600">
          Important information about the use of SmartToolsCore and its services.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10 text-gray-700 leading-relaxed">

        {/* Intro */}
        <section className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
          <p>
            The information and tools provided on <strong>SmartToolsCore </strong> 
             are for general informational and educational purposes only.
          </p>
        </section>

        {/* AI Disclaimer */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            AI-Generated Content
          </h2>
          <p>
            Our platform uses artificial intelligence to generate and rewrite content. 
            While we strive for accuracy, we do not guarantee that the output will always 
            be correct, complete, or reliable.
          </p>
        </section>

        {/* No Professional Advice */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            No Professional Advice
          </h2>
          <p>
            The content generated through our tools should not be considered professional, 
            legal, academic, or expert advice. Users should verify and review content before use.
          </p>
        </section>

        {/* External Links */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            External Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We do not control or take 
            responsibility for the content, policies, or practices of these external sites.
          </p>
        </section>

        {/* Ads */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Advertising Disclaimer
          </h2>
          <p>
            We may display advertisements through third-party networks such as Google AdSense. 
            These ads are provided by external partners, and we are not responsible for the 
            products or services advertised.
          </p>
        </section>

        {/* Liability */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Limitation of Liability
          </h2>
          <p>
            SmartToolsCore is not liable for any losses, damages, or issues arising from the 
            use of our website, tools, or generated content.
          </p>
        </section>

        {/* Consent */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Consent
          </h2>
          <p>
            By using our website, you hereby consent to this disclaimer and agree to its terms.
          </p>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Updates
          </h2>
          <p>
            We may update this disclaimer at any time. Changes will be reflected on this page.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-blue-50 border border-blue-100 p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p>
            If you have any questions about this disclaimer, please contact us through our contact page.
          </p>
        </section>

      </div>

    </main>
  );
}