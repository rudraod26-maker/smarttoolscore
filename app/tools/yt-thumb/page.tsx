import YtThumbDownloader from "./YtThumbDownloader";

export const metadata = {
  title: "YouTube Thumbnail Downloader | SmartToolsCore",
  description:
    "Download YouTube thumbnails in HD, SD, and other resolutions instantly.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          YouTube Thumbnail Downloader
        </h1>

        <p className="text-gray-600">
          Extract and download YouTube thumbnails in high quality.
        </p>
      </section>

      <YtThumbDownloader />

      <section className="space-y-4 text-gray-700">

        <h2 className="text-2xl font-semibold">
          What is a YouTube Thumbnail Downloader?
        </h2>

        <p>
          A YouTube thumbnail downloader allows you to extract
          preview images from any YouTube video. These images
          can be downloaded in multiple resolutions.
        </p>

        <h2 className="text-2xl font-semibold">
          How to Download a Thumbnail
        </h2>

        <ol className="list-decimal ml-6 space-y-2">
          <li>Paste the YouTube video link</li>
          <li>Click Get Thumbnail</li>
          <li>Download the resolution you want</li>
        </ol>

      </section>

    </div>
  );
}