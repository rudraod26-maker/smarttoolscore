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
    </div>
  );
}