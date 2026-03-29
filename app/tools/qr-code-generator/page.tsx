import QrGenerator from "./QrGenerator";

export const metadata = {
  title: "QR Code Generator | SmartToolsCore",
  description:
    "Generate QR codes for URLs, text, WiFi and more. Customize colors, size, logo and download instantly.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          QR Code Generator
        </h1>

        <p className="text-gray-600">
          Create QR codes instantly with custom colors,
          logo support and download options.
        </p>
      </section>

      <QrGenerator />

      <section className="space-y-4 text-gray-700">

        <h2 className="text-2xl font-semibold">
          What is a QR Code Generator?
        </h2>

        <p>
          A QR code generator converts text, URLs or other
          data into a scannable QR code that smartphones
          can instantly read.
        </p>

        <h2 className="text-2xl font-semibold">
          How to Use This Tool
        </h2>

        <ol className="list-decimal ml-6 space-y-2">
          <li>Enter text or URL</li>
          <li>Customize colors and size</li>
          <li>Add a logo if needed</li>
          <li>Download your QR code</li>
        </ol>

      </section>

    </div>
  );
}