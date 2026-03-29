import Link from "next/link";

export function parseContent(content: string) {
  const parts = content.split(/(\/tools\/[a-z-]+)/g);

  return parts.map((part, index) => {
    if (part.startsWith("/tools/")) {
      const name = part
        .replace("/tools/", "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      return (
        <Link
          key={index}
          href={part}
          className="text-blue-400 hover:underline"
        >
          {name}
        </Link>
      );
    }

    return <span key={index}>{part}</span>;
  });
}