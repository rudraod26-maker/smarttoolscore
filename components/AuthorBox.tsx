import Image from "next/image";
import Script from "next/script";

interface AuthorBoxProps {
  showSchema?: boolean;
}

export default function AuthorBox({ showSchema = true }: AuthorBoxProps) {
  const author = {
    name: "SmartToolsCore Editorial Team",
    description:
      "Finance and AI research team focused on providing clear, practical, and well-structured educational content.",
    image: "/author.jpg", // Add your image inside /public folder
    url: "https://smarttoolscore.com",
  };

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.description,
    url: author.url,
  };

  return (
    <>
      {showSchema && (
        <Script
          id="author-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(authorSchema),
          }}
        />
      )}

      <div className="mt-12 p-6 border rounded-xl bg-gray-50 flex items-start gap-4">
        <Image
          src={author.image}
          alt="Author"
          width={80}
          height={80}
          className="rounded-full"
        />

        <div>
          <h3 className="font-semibold text-lg mb-1">
            About the Author
          </h3>
          <p className="font-medium">
            {author.name}
          </p>
          <p className="text-gray-600 text-sm mt-2">
            {author.description}
          </p>
        </div>
      </div>
    </>
  );
}