"use client";

import { useState } from "react";

export default function WordCounterClient() {
  const [text, setText] = useState("");

  const words =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const characters = text.length;

  const sentences =
    text.split(/[.!?]+/).filter(Boolean).length;

  const paragraphs =
    text.split(/\n+/).filter(Boolean).length;

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">
        Free Online Word Counter Tool
      </h1>

      <p className="text-gray-600">
        Count words, characters, sentences and paragraphs instantly.
        Perfect for writers, students and professionals.
      </p>

      <textarea
        className="w-full h-48 p-4 border rounded-lg"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <StatCard label="Words" value={words} />
        <StatCard label="Characters" value={characters} />
        <StatCard label="Sentences" value={sentences} />
        <StatCard label="Paragraphs" value={paragraphs} />
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold">{value}</h2>
      <p className="text-gray-600 text-sm">{label}</p>

      <section style={{ marginTop: "50px", lineHeight: "1.7" }}>
  <h2>About This Word Counter Tool</h2>

  <p>
    The SmartToolsCore Word Counter is a simple online utility that helps users
    quickly calculate the number of words, characters, sentences and paragraphs
    in any piece of text. Writers, students, bloggers and professionals often
    need to track word limits when preparing essays, articles or reports.
  </p>

  <p>
    This tool provides instant results as you type or paste text into the editor.
    It eliminates the need to manually count words and helps ensure that your
    content meets specific word limits required for assignments, blog posts,
    social media captions or SEO articles.
  </p>

  <h2>Why Word Counting Matters</h2>

  <p>
    Word limits are important in many fields. Academic assignments often have
    strict word requirements, while SEO articles typically perform best within
    certain length ranges. Bloggers and content creators also track word counts
    to optimize readability and search engine ranking.
  </p>

  <p>
    A reliable word counter helps writers maintain consistency, avoid exceeding
    limits, and structure their content more effectively.
  </p>

  <h2>How to Use the Word Counter</h2>

  <ul>
    <li>Paste or type your text into the editor.</li>
    <li>The tool will automatically count words and characters.</li>
    <li>View statistics such as sentences and paragraphs.</li>
    <li>Edit your text until it reaches the desired length.</li>
  </ul>

  <h2>Who Can Use This Tool</h2>

  <p>
    The SmartToolsCore Word Counter is useful for students writing essays,
    bloggers creating articles, marketers preparing social media posts, and
    professionals drafting reports or documentation.
  </p>

  <p>
    Because the tool runs entirely in your browser, your text remains private
    and is never stored or shared.
  </p>
</section>

    </div>
  );
}