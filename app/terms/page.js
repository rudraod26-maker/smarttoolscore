export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Terms & Conditions
        </h1>
        <p className="text-gray-600">
          Please read these terms carefully before using SmartToolsCore.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10 text-gray-700 leading-relaxed">

        {/* Intro */}
        <section className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
          <p>
            By accessing and using <strong>SmartToolsCore</strong>, you agree to comply 
            with these Terms & Conditions. If you do not agree, please do not use our website.
          </p>
        </section>

        {/* Use of Service */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Use of Our Services
          </h2>
          <p>
            Our tools are provided for general use, including content rewriting and writing assistance. 
            You agree to use our services responsibly and not for any illegal or harmful activities.
          </p>
        </section>

        {/* User Responsibility */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            User Responsibility
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You are responsible for the content you input and generate</li>
            <li>You must ensure your usage complies with applicable laws</li>
            <li>You should review AI-generated content before using it</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Intellectual Property
          </h2>
          <p>
            All content, design, and branding on SmartToolsCore are owned by us. 
            You may not copy, reproduce, or distribute our content without permission.
          </p>
        </section>

        {/* Tool Accuracy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Tool Accuracy
          </h2>
          <p>
            While we aim to provide accurate AI-generated results, we do not guarantee 
            complete accuracy. Users should verify output before use.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Limitation of Liability
          </h2>
          <p>
            SmartToolsCore is not liable for any losses or damages resulting from the use 
            of our tools or website.
          </p>
        </section>

        {/* Third Party Services */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Third-Party Services
          </h2>
          <p>
            We may use third-party services such as analytics and advertising platforms. 
            These services may have their own terms and policies.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Changes to Terms
          </h2>
          <p>
            We may update these Terms & Conditions at any time. Continued use of the website 
            means you accept any changes.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-blue-50 border border-blue-100 p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please contact us through our contact page.
          </p>
        </section>

      </div>

    </main>
  );
}