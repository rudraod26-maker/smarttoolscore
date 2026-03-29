import ImageCompressor from "./ImageCompressor";

export const metadata = {
  title: "Image Compressor | SmartToolsCore",
  description:
    "Compress images online for free. Reduce image file size without losing quality.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Image Compressor
        </h1>

        <p className="text-gray-600">
          Compress JPG, PNG and WebP images instantly without losing quality.
        </p>
      </section>

      <ImageCompressor />

      <section className="space-y-4 text-gray-700">

        <h2 className="text-2xl font-semibold">
          What is an Image Compressor?
        </h2>

        <p>
          An image compressor reduces the file size of images while
          maintaining acceptable quality. This helps websites load faster
          and saves storage space.
        </p>

        <h2 className="text-2xl font-semibold">
          How to Use the Image Compressor
        </h2>

        <ol className="list-decimal ml-6 space-y-2">
          <li>Upload an image</li>
          <li>Choose compression level</li>
          <li>Download the optimized image</li>
        </ol>

      </section>

    </div>
  );
}