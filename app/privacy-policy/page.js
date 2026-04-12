export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10 text-gray-700 leading-relaxed">

        {/* Intro */}
        <section className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
          <p>
            At <strong>SmartToolsCore</strong>, we are committed to protecting your privacy. 
            This Privacy Policy outlines how we handle your information when you use our website and tools.
          </p>
        </section>

        {/* Info We Collect */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Basic information you provide through forms (name, email)</li>
            <li>Usage data such as pages visited and interactions</li>
            <li>Cookies to improve user experience</li>
          </ul>
        </section>

        {/* How We Use */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To improve our tools and services</li>
            <li>To respond to user inquiries</li>
            <li>To analyze website performance</li>
          </ul>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Cookies
          </h2>
          <p>
            We use cookies to enhance your browsing experience. Cookies help us understand user behavior 
            and improve our services.
          </p>
        </section>

        {/* Ads */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Advertising & Third-Party Services
          </h2>
          <p>
            We may use third-party services like Google AdSense to display ads. These services may use cookies 
            to show relevant advertisements based on your interests.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Data Security
          </h2>
          <p>
            We take appropriate measures to protect your information. However, no method of transmission over 
            the internet is completely secure.
          </p>
        </section>

        {/* User Rights */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Your Rights
          </h2>
          <p>
            You have the right to request access, correction, or deletion of your personal data.
          </p>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Changes to This Policy
          </h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-blue-50 border border-blue-100 p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact us through our contact page.
          </p>
        </section>

      </div>

    </main>
  );
}