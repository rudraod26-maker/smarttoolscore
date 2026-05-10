"use client";

import Link from "next/link";
import { useState } from "react";

const MODES = [
    "Short Summary",
    "Detailed Summary",
    "Bullet Points",
    "Academic",
    "Simple Language",
];

export default function AISummarizerPage() {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");
    const [mode, setMode] = useState("Short Summary");
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    async function handleSummarize() {
        if (!text.trim()) return;

        setLoading(true);

        try {
            const response = await fetch("/api/summarize", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text,
                    mode,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setSummary(data.summary);
        } catch (error) {
            console.error(error);

            setSummary(
                "Failed to summarize text. Please try again."
            );
        } finally {
            setLoading(false);
        }
    }

    async function handleCopy() {
        if (!summary) return;

        await navigator.clipboard.writeText(summary);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }

    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
            {/* HERO */}
            <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 via-white to-indigo-50 px-6 py-14 md:px-10 md:py-20 mb-12 shadow-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 mb-5">
                        Free AI Tool
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                        AI Summarizer
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        Summarize articles, notes, reports, essays, blogs, and long content instantly using AI-powered summarization.
                    </p>
                </div>
            </section>

            {/* TOOL */}
            <section className="grid lg:grid-cols-2 gap-6 mb-16">
                {/* INPUT */}
                <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8">
                    <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Input Text
                        </h2>

                        <select
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                            className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {MODES.map((item) => (
                                <option key={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Paste your article, paragraph, notes, or content here..."
                        className="w-full min-h-80 p-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
                    />

                    <div className="flex flex-wrap gap-3 mt-5">
                        <button
                            onClick={handleSummarize}
                            disabled={loading || !text.trim()}
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-sm hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {loading ? "Summarizing..." : "Summarize Text"}
                        </button>

                        <button
                            onClick={() => {
                                setText("");
                                setSummary("");
                            }}
                            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* OUTPUT */}
                <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-8">
                    <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                        <h2 className="text-xl font-semibold text-gray-900">
                            AI Summary
                        </h2>

                        <button
                            onClick={handleCopy}
                            disabled={!summary}
                            className={`px-5 py-2.5 rounded-xl transition ${copied
                                ? "bg-green-100 text-green-700 border border-green-200"
                                : "bg-gray-900 text-white hover:bg-black"
                                }`}
                        >
                            {copied ? "✔ Copied!" : "Copy Summary"}
                        </button>
                    </div>

                    <div className="min-h-80 p-4 rounded-2xl border border-gray-200 bg-gray-50 whitespace-pre-wrap leading-8 text-gray-700">
                        {summary ||
                            "Your summarized content will appear here after processing."}
                    </div>
                </div>
            </section>

            {/* SEO CONTENT */}
            {/* WHAT IS AI SUMMARIZER */}
            <section className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What Is an AI Summarizer?
                </h2>

                <div className="space-y-6 text-gray-600 leading-8">
                    <p>
                        An AI summarizer is an advanced writing tool designed to shorten long
                        content into a concise and easy-to-read summary while preserving the
                        original meaning. Instead of manually reading lengthy articles,
                        reports, essays, blogs, research papers, or notes, users can quickly
                        generate a summary in seconds using artificial intelligence.
                    </p>

                    <p>
                        Modern AI summarizers analyze sentence structure, keywords, context,
                        and important ideas to determine which parts of the text are most
                        relevant. The tool then creates a shorter version of the content
                        without removing the main message. This helps users save time,
                        improve productivity, and consume information faster.
                    </p>

                    <p>
                        AI summarization tools have become extremely popular among students,
                        professionals, researchers, bloggers, marketers, writers, and office
                        workers because of the increasing amount of digital information
                        people consume every day. Instead of reading thousands of words,
                        users can instantly extract the key highlights and understand the
                        content more efficiently.
                    </p>

                    <p>
                        Whether you are summarizing a blog article, study material, meeting
                        notes, project documentation, academic content, business reports, or
                        online research, an AI summarizer helps simplify the process and
                        improve readability.
                    </p>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    How This AI Summarizer Works
                </h2>

                <div className="space-y-6 text-gray-600 leading-8">
                    <p>
                        This AI summarizer works by analyzing your text and identifying the
                        most meaningful information within the content. The system processes
                        sentence relationships, keywords, structure, and context to create a
                        shorter and clearer summary.
                    </p>

                    <p>
                        First, users paste content into the input box. This can include
                        essays, articles, notes, blogs, reports, assignments, or long-form
                        text. After selecting the preferred summary mode, the AI processes
                        the content and generates a summarized version in seconds.
                    </p>

                    <p>
                        Different summary modes allow users to customize the output based on
                        their needs. A short summary creates concise overviews, while
                        detailed summaries preserve more information. Bullet point mode
                        extracts important highlights in a structured format, and academic
                        mode creates more formal summaries suitable for study and research.
                    </p>

                    <p>
                        The summarization process is designed to improve readability while
                        reducing unnecessary repetition and extra details. This helps users
                        quickly understand large amounts of information without spending too
                        much time reading the original content.
                    </p>

                    <p>
                        AI-powered summarization technology continues to evolve and is now
                        widely used in education, business communication, content creation,
                        productivity tools, online research, and digital workflows.
                    </p>
                </div>
            </section>

            {/* WHO IS IT FOR */}
            <section className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Who Can Use This AI Summarizer?
                </h2>

                <div className="space-y-6 text-gray-600 leading-8">
                    <p>
                        This AI summarizer is designed for anyone who wants to save time and
                        simplify reading. Students can summarize assignments, essays,
                        research papers, and study material more efficiently. Bloggers and
                        content creators can shorten long drafts and identify key highlights
                        before publishing articles.
                    </p>

                    <p>
                        Professionals can summarize reports, emails, presentations, and
                        meeting notes to improve productivity in daily workflows. Researchers
                        and academic users can extract important concepts from large amounts
                        of information quickly.
                    </p>

                    <p>
                        Business users often use summarization tools to simplify documents,
                        improve communication, and create concise overviews for teams and
                        clients. Marketing teams can summarize campaign ideas, content
                        strategies, and reports for easier collaboration.
                    </p>

                    <p>
                        Casual users can also benefit from AI summarization by simplifying
                        online articles, news reports, blog posts, and educational content.
                        The tool is useful for anyone who regularly reads long-form content
                        and wants to consume information faster.
                    </p>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Benefits of Using an AI Summarizer
                </h2>

                <div className="space-y-6 text-gray-600 leading-8">
                    <p>
                        One of the biggest benefits of using an AI summarizer is time
                        savings. Long articles and reports can take a significant amount of
                        time to read manually. AI summarization helps users quickly identify
                        the most important information without reading every sentence.
                    </p>

                    <p>
                        Another major advantage is improved productivity. Students,
                        professionals, and researchers can process more information in less
                        time. This allows users to focus on learning, decision-making,
                        writing, and communication rather than spending hours reviewing
                        lengthy text.
                    </p>

                    <p>
                        AI summarization also improves readability by simplifying complex
                        information into shorter and clearer content. This makes it easier
                        to understand difficult topics and organize information more
                        effectively.
                    </p>

                    <p>
                        The tool also helps users create structured notes, bullet points,
                        and concise explanations. Instead of manually extracting important
                        ideas, the AI handles the summarization automatically.
                    </p>

                    <p>
                        Because this tool works online, users can access it instantly
                        without downloading software or creating an account. The clean and
                        modern interface makes the experience simple for beginners and
                        advanced users alike.
                    </p>
                </div>
            </section>


            {/* FAQ */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-5">
                    {[
                        {
                            q: "1. What is an AI summarizer?",
                            a: "An AI summarizer is a tool that shortens long content while preserving the original meaning and key ideas.",
                        },
                        {
                            q: "2. Is this AI summarizer free to use?",
                            a: "Yes, this tool is available online and can be used without registration.",
                        },
                        {
                            q: "3. Can I summarize essays and assignments?",
                            a: "Yes, the tool can summarize essays, assignments, reports, blogs, and long-form content.",
                        },
                        {
                            q: "4. What summary modes are available?",
                            a: "Users can generate short summaries, detailed summaries, bullet points, academic summaries, and simplified summaries.",
                        },
                        {
                            q: "5. Does the summarizer preserve the meaning?",
                            a: "Yes, the AI is designed to preserve the key meaning while reducing unnecessary details.",
                        },
                        {
                            q: "6. Can students use this tool?",
                            a: "Yes, students commonly use AI summarizers for study notes, assignments, and research material.",
                        },
                        {
                            q: "7. Is login required?",
                            a: "No, users can access the tool instantly without creating an account.",
                        },
                        {
                            q: "8. Can I summarize blog articles?",
                            a: "Yes, blog posts and articles can be summarized quickly using the tool.",
                        },
                        {
                            q: "9. Does this tool support bullet point summaries?",
                            a: "Yes, users can generate bullet point summaries for easier reading and organization.",
                        },
                        {
                            q: "10. Can professionals use this AI summarizer?",
                            a: "Yes, professionals can summarize reports, meetings, emails, and documents to improve productivity.",
                        },
                    ].map((faq) => (
                        <div
                            key={faq.q}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {faq.q}
                            </h3>

                            <p className="text-gray-600 leading-7">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Features of This AI Summarizer
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm">
                        <div className="text-3xl mb-4">⚡</div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-3">
                            Instant Summaries
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Generate summaries quickly without manually reading long content.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm">
                        <div className="text-3xl mb-4">📚</div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-3">
                            Multiple Modes
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Choose short, detailed, academic, or bullet point summaries.
                        </p>
                    </div>

                </div>
            </section>

            {/* RELATED TOOLS */}
            <section className="rounded-3xl bg-gray-900 text-white p-8 md:p-10 text-center shadow-sm">
                <h2 className="text-3xl font-bold mb-4">
                    Explore More AI Writing Tools
                </h2>

                <p className="text-gray-300 max-w-2xl mx-auto leading-8 mb-8">
                    Improve your writing workflow with AI-powered paraphrasing and grammar correction tools.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/tools/paraphraser"
                        className="bg-white text-gray-900 px-6 py-3 rounded-xl font-medium"
                    >
                        AI Paraphraser
                    </Link>

                    <Link
                        href="/tools/grammar-checker"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium"
                    >
                        Grammar Checker
                    </Link>
                </div>
            </section>
        </main>
    );
}