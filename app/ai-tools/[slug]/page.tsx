import { notFound } from "next/navigation";
import { articles } from "../articles";
import Script from "next/script";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* =========================
   Generate Metadata
========================= */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | SmartToolsCore",
    };
  }

  return {
    title: `${article.title} | SmartToolsCore`,
    description: article.description,
    alternates: {
      canonical: `https://smarttoolscore.com/ai-tools/${slug}`,
    },
  };
}

/* =========================
   Article Page
========================= */
export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  /* =========================
     Detect Finance Articles
  ========================= */
  const isFinanceArticle =
    slug.includes("loan") ||
    slug.includes("credit") ||
    slug.includes("interest") ||
    slug.includes("debt") ||
    slug.includes("emi");

  /* =========================
     FAQ Schema (Finance Only)
  ========================= */
  const faqSchema = isFinanceArticle
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can I reduce total loan interest?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can reduce loan interest by making prepayments, choosing shorter tenure, improving credit score, and refinancing when rates drop."
            }
          },
          {
            "@type": "Question",
            name: "What is a good credit score for loan approval?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most lenders prefer a credit score above 700 for better approval chances and lower interest rates."
            }
          },
          {
            "@type": "Question",
            name: "What is ideal debt-to-income ratio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A debt-to-income ratio below 40% is generally considered healthy for loan approval."
            }
          }
        ]
      }
    : null;

  /* =========================
     BlogPosting Schema
  ========================= */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Organization",
      name: "SmartToolsCore Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "SmartToolsCore",
      logo: {
        "@type": "ImageObject",
        url: "https://smarttoolscore.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://smarttoolscore.com/ai-tools/${slug}`,
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      {/* =========================
         Article Schema
      ========================= */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* =========================
         FAQ Schema (Finance Only)
      ========================= */}
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* =========================
         Article Title
      ========================= */}
      <h1 className="text-3xl font-bold mb-6">
        {article.title}
      </h1>

      {/* =========================
         Article Content
      ========================= */}
      <div className="space-y-8">
        {article.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-xl font-semibold mb-3">
              {section.heading}
            </h2>
            <div
              className="text-gray-700 leading-relaxed space-y-3"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </section>
        ))}
      </div>

      {/* =========================
         Author Box (Finance Only)
      ========================= */}
      {isFinanceArticle && <AuthorBox />}

    </main>
  );
}