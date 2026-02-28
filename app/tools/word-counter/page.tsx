import type { Metadata } from "next";
import WordCounterClient from "./WordCounterClient";
import AdBlock from "@/components/AdBlock";

export const metadata: Metadata = {
  title: "Word Counter Tool (Free & Online) | SmartToolsAI",
  description:
    "Free online word counter tool to count words, characters, sentences and paragraphs instantly. Fast and easy to use.",
  keywords: [
    "word counter",
    "online word counter",
    "character counter",
    "sentence counter",
    "paragraph counter",
  ],
};

export default function WordCounterPage() {
  return (
    <div className="space-y-12">
      <WordCounterClient />
      <AdBlock />
      {/* SEO Content Section */}
      <section className="space-y-4 text-gray-700">
        <h2 className="text-2xl font-semibold">
          What Is a Word Counter Tool?
        </h2>

        <p>
          A word counter is an online utility that helps you instantly
          calculate the number of words, characters, sentences and paragraphs
          in a text. It is widely used by students, writers, bloggers and
          professionals to meet content length requirements.
        </p>

        <h3 className="text-xl font-semibold">
          Who Should Use This Tool?
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Students writing essays and assignments</li>
          <li>Bloggers optimizing articles for SEO</li>
          <li>Content writers meeting word limits</li>
          <li>Professionals drafting reports</li>
        </ul>

        <h3 className="text-xl font-semibold">
          Why Use Our Online Word Counter?
        </h3>

        <p>
          Our tool is fast, accurate and works directly in your browser.
          No installation required. It updates counts in real time as you type.
        </p>
      </section>
      <AdBlock />
    </div>
  );
}