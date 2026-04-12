import { blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";

/* ---------- ADD IDS TO ALL H2 ---------- */
function addIdsToHeadings(html) {
  const cleanHtml = html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

  return cleanHtml.replace(/<h2(?![^>]*id=)(.*?)>(.*?)<\/h2>/g, (match, attrs, text) => {
    const id = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");

    return `<h2 id="${id}">${text}</h2>`;
  });
}

/* ---------- EXTRACT HEADINGS ---------- */
function extractHeadings(html) {
  const regex = /<h2.*?id="(.*?)".*?>(.*?)<\/h2>/g;

  const headings = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    headings.push({
      id: match[1],
      text: match[2].replace(/<.*?>/g, ""),
    });
  }

  return headings;
}

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const blog = blogs.find(
    (b) => b.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  if (!blog) return notFound();

  // ✅ STEP 1: Clean + add IDs
  const cleanContent = addIdsToHeadings(blog.content);

  // ✅ STEP 2: Extract from CLEAN content (important)
  const headings = extractHeadings(cleanContent);

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[1fr_280px] gap-12">

        {/* MAIN */}
        <div>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-85 object-cover rounded-2xl mb-10 shadow"
          />

          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {blog.title}
          </h1>

          <p className="text-gray-500 mb-12">
            {new Date(blog.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })} • {blog.author}
          </p>

          {blog.slug === "google-ai-agent-trends-2026" && (
            <div className="my-10 p-6 bg-white border rounded-xl shadow-sm">

              <p className="text-sm text-gray-500 mb-2">
                Source: <span className="font-medium">Google Cloud</span>
              </p>

              <h3 className="text-lg font-semibold mb-2">
                AI Agent Trends 2026 Report
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                Explore the official report covering Agentic AI, workflows, and business transformation.
              </p>

              <div className="flex gap-3 flex-wrap">

                <a
                  href="https://cloud.google.com/resources/content/ai-agent-trends-2026"
                  target="_blank"
                  className="px-4 py-2 bg-black text-white rounded-lg text-sm"
                >
                  View Official Report
                </a>

                <a
                  href="/reports/google-ai-trends-2026.pdf"
                  download
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                >
                  Download PDF
                </a>

              </div>
            </div>
          )}

          <article
            className="
              prose max-w-none

              prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6

              prose-h2:text-2xl prose-h2:font-bold
              prose-h2:mt-16 prose-h2:mb-4
              prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2

              prose-h3:text-xl prose-h3:font-semibold
              prose-h3:mt-10 prose-h3:mb-3

              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-5

              prose-ul:my-6 prose-li:my-1
              prose-li:marker:text-gray-400

              prose-a:text-blue-600 hover:prose-a:text-blue-800

              prose-hr:my-12

              text-[17px]
            "
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />

        </div>

        {/* TOC */}
        <TableOfContents headings={headings} />

      </div>
    </main>
  );
}