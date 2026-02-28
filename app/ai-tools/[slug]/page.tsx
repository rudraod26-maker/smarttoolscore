import AdBlock from "@/components/AdBlock";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "../articles";
import AuthorBox from "@/components/AuthorBox";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  const siteUrl = "https://smarttoolscore.com"; // change after deployment

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Organization",
      name: "SmartToolsAI",
    },
    publisher: {
      "@type": "Organization",
      name: "SmartToolsAI",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage: `${siteUrl}/ai-tools/${article.slug}`,
  };

  const faqSchema = article.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const relatedArticles = articles
    .filter((a) => a.slug !== params.slug)
    .slice(0, 3);

  return (
    <article className="max-w-3xl mx-auto">

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* Title */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {article.title}
        </h1>
        <p className="text-lg text-gray-600">
          {article.intro}
        </p>
      </header>

      <div className="h-px bg-gray-200 mb-10"></div>
      <AdBlock />

      {/* Content */}
      <div className="space-y-12">
        {article.sections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-4">
              {section.heading}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: section.content }}
            />    
          </section>
        ))}
      </div>

      <AuthorBox />

      {/* FAQ Section */}
      {article.faqs && (
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            {article.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <AdBlock />
      {/* Related Articles */}
      <div className="mt-20">
        <h3 className="text-2xl font-semibold mb-6">
          Related Articles
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedArticles.map((related) => (
            <Link
              key={related.slug}
              href={`/ai-tools/${related.slug}`}
              className="bg-white p-6 shadow rounded hover:shadow-lg transition"
            >
              <h4 className="font-semibold mb-2">
                {related.title}
              </h4>
              <p className="text-sm text-gray-600">
                {related.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 p-6 bg-blue-50 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">
          Explore More AI Tools
        </h3>
        <Link
          href="/ai-tools"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          View All AI Tools
        </Link>
      </div>

    </article>
  );
}