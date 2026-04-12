"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is SmartToolsCore?",
    a: "SmartToolsCore is a platform that offers AI-powered tools and helpful blogs to improve writing, productivity, and content creation.",
  },
  {
    q: "Is the AI paraphraser free to use?",
    a: "Yes, our AI paraphrasing tool is completely free to use with no limits.",
  },
  {
    q: "How does the paraphrasing tool work?",
    a: "It uses advanced AI to rewrite your content while keeping the original meaning intact.",
  },
  {
    q: "Can I use the tool for academic writing?",
    a: "Yes, but you should always review and ensure the content meets your academic guidelines.",
  },
  {
    q: "Is my data safe?",
    a: "Yes, we do not store or misuse your content. Your privacy is important to us.",
  },
  {
    q: "Do I need to sign up?",
    a: "No, you can use our tools without creating an account.",
  },
  {
    q: "Will there be more tools in the future?",
    a: "Yes, we are continuously working on adding more AI tools to improve your experience.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach us through the contact page for any queries or feedback.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Everything you need to know about SmartToolsCore and our tools.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white hover:shadow-md transition"
          >

            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {index + 1}. {faq.q}
              </h2>

              <span className="text-blue-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.a}
              </p>
            )}

          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-blue-50 border border-blue-100 p-8 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Still Have Questions?
        </h2>
        <p className="text-gray-600 mb-4">
          Reach out to us anytime—we’re here to help.
        </p>

        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition shadow"
        >
          Contact Us
        </a>
      </div>

    </main>
  );
}