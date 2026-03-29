import TextCaseConverter from "./TextCaseConverter";

export const metadata = {
  title: "Text Case Converter | SmartToolsCore",
  description:
    "Convert text to uppercase, lowercase, title case, or sentence case instantly using our free text case converter.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Text Case Converter
        </h1>

        <p className="text-gray-600">
          Convert text to uppercase, lowercase, title case and more instantly.
        </p>
      </section>

      <TextCaseConverter />

      <section className="space-y-4 text-gray-700">

        <h2 className="text-2xl font-semibold">
          What is a Text Case Converter?
        </h2>

        <p>
          A text case converter allows you to quickly change the
          capitalization of text. It is useful for formatting titles,
          correcting writing mistakes, and preparing content for
          websites or documents.
        </p>

        <h2 className="text-2xl font-semibold">
          How to Use the Tool
        </h2>

        <ol className="list-decimal ml-6 space-y-2">
          <li>Paste or type your text</li>
          <li>Select the case conversion option</li>
          <li>Copy the converted result</li>
        </ol>

      </section>

    </div>
  );
}