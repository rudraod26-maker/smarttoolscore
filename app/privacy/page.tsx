export const metadata = {
  title: "Privacy Policy | SmartToolsCore",
  description: "Privacy policy for SmartToolsCore website.",
};

export default function PrivacyPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Privacy Policy</h1>

      <p className="mt-4 text-gray-600">
        At SmartToolsCore, we respect your privacy and are committed to
        protecting your personal information.
      </p>

      <h2 className="mt-6 font-semibold">Information We Collect</h2>

      <p className="mt-2 text-gray-600">
        We may collect non-personal information such as browser type,
        device information, and usage data to improve our services.
      </p>

      <h2 className="mt-6 font-semibold">Cookies</h2>

      <p className="mt-2 text-gray-600">
        Our website may use cookies to enhance user experience and
        analyze traffic.
      </p>

      <h2 className="mt-6 font-semibold">Third-Party Services</h2>

      <p className="mt-2 text-gray-600">
        We may use third-party services such as analytics or advertising
        providers that collect information according to their privacy policies.
      </p>

      <h2 className="mt-6 font-semibold">Contact</h2>

      <p className="mt-2 text-gray-600">
        If you have any questions about this privacy policy, you can contact us
        via the contact page on this website.
      </p>
    </div>
  );
}