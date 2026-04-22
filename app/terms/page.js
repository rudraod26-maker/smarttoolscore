export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Terms &amp; Conditions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Please read these Terms &amp; Conditions carefully before using
          SmartToolsCore. By accessing or using this website, you agree to these terms.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10 text-gray-700 leading-relaxed">
        {/* Intro */}
        <section className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
          <p>
            These Terms &amp; Conditions govern your access to and use of{" "}
            <strong>SmartToolsCore</strong>. If you do not agree with any part of
            these terms, please discontinue use of the website.
          </p>
        </section>

        {/* Website Use */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Use of the Website
          </h2>
          <p>
            You agree to use SmartToolsCore only for lawful purposes and in a
            way that does not violate applicable laws, regulations, or the rights
            of others. You must not misuse the website, attempt unauthorized access,
            interfere with its operation, or use it in a way that may harm the
            website, its users, or its reputation.
          </p>
        </section>

        {/* User Responsibilities */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            User Responsibilities
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You are responsible for how you use the website and its content</li>
            <li>You agree not to use the website for unlawful, harmful, abusive, or misleading purposes</li>
            <li>You are responsible for reviewing and evaluating any information or output before relying on it</li>
            <li>You must ensure that any material you submit or use does not infringe the rights of others</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Intellectual Property
          </h2>
          <p>
            All website content, including branding, design, layout, text,
            graphics, logos, and other materials on SmartToolsCore, is owned by
            or licensed to us unless otherwise stated. You may not reproduce,
            distribute, modify, republish, or commercially exploit any part of
            the website without prior written permission.
          </p>
        </section>

        {/* Informational Use */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Informational Purpose
          </h2>
          <p>
            Content and information available on SmartToolsCore are provided for
            general informational and website use purposes only. While we aim to
            keep content accurate and useful, we do not guarantee that all
            information will always be complete, accurate, or up to date.
          </p>
        </section>

        {/* No Warranty */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            No Warranties
          </h2>
          <p>
            SmartToolsCore is provided on an &quot;as is&quot; and &quot;as available&quot;
            basis without warranties of any kind, whether express or implied.
            We do not guarantee uninterrupted availability, error-free operation,
            or that the website will always be free from bugs, delays, or harmful
            components.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, SmartToolsCore shall not be
            liable for any direct, indirect, incidental, consequential, special,
            or punitive damages arising out of or related to your use of, or
            inability to use, the website or any information made available through it.
          </p>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Third-Party Services
          </h2>
          <p>
            We may use or rely on third-party services such as analytics,
            advertising providers, hosting services, and other infrastructure or
            website support services. These third parties may be governed by their
            own terms, privacy practices, and policies.
          </p>
        </section>

        {/* Advertising */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Advertising
          </h2>
          <p>
            SmartToolsCore may display advertisements provided by third-party
            advertising partners, including services such as Google AdSense.
            These advertising partners may use cookies or similar technologies
            to deliver and measure advertisements in accordance with their own
            policies and applicable laws.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Termination of Access
          </h2>
          <p>
            We reserve the right to restrict, suspend, or terminate access to the
            website at our discretion, without notice, if we believe a user has
            violated these Terms &amp; Conditions or engaged in misuse of the website.
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Changes to These Terms
          </h2>
          <p>
            We may update these Terms &amp; Conditions from time to time to reflect
            changes in our website, operations, legal obligations, or policies.
            Continued use of SmartToolsCore after updates are posted constitutes
            acceptance of the revised terms.
          </p>
        </section>

        {/* Governing Principle */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            General Provisions
          </h2>
          <p>
            If any provision of these Terms &amp; Conditions is found to be invalid
            or unenforceable, the remaining provisions will continue in full force
            and effect. These terms constitute the general agreement between you
            and SmartToolsCore regarding use of the website.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="mb-2">
            If you have any questions about these Terms &amp; Conditions or need
            support, please contact us at:
          </p>
          <p className="font-medium text-gray-900">support@smarttoolscore.com</p>
        </section>
      </div>
    </main>
  );
}