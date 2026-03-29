import IgCaptionGenerator from "./IgCaptionGenerator";

export const metadata = {
  title: "Instagram Caption Generator | SmartToolsCore",
  description:
    "Generate Instagram captions instantly for selfies, travel, motivation, and more.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Instagram Caption Generator
        </h1>

        <p className="text-gray-600">
          Generate engaging Instagram captions instantly.
        </p>
      </section>

      <IgCaptionGenerator />

      <section className="space-y-4 text-gray-700">

        <h2 className="text-2xl font-semibold">
          What is an Instagram Caption Generator?
        </h2>

        <p>
          An Instagram caption generator helps you quickly create
          engaging captions for your posts. Whether you are posting
          travel photos, selfies, or motivational content, this tool
          generates ready-to-use captions.
        </p>

      </section>

    </div>
  );
}