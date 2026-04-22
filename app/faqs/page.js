"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is SmartToolsCore?",
    a: "SmartToolsCore is a digital platform focused on providing simple, modern, and useful online experiences for visitors through informative content and intelligent web-based features.",
  },
  {
    q: "What does SmartToolsCore offer?",
    a: "SmartToolsCore offers website features, helpful content, and resources designed to make digital experiences easier, faster, and more user-friendly.",
  },
  {
    q: "Who can use SmartToolsCore?",
    a: "SmartToolsCore is designed for a wide range of users, including students, professionals, creators, researchers, and general website visitors.",
  },
  {
    q: "Do I need to create an account to use this website?",
    a: "No, account creation is not required to access and use the website.",
  },
  {
    q: "Is SmartToolsCore free to access?",
    a: "Yes, the website is currently accessible without any paid membership or subscription requirement.",
  },
  {
    q: "Does SmartToolsCore provide paid services?",
    a: "No, SmartToolsCore does not currently provide paid services.",
  },
  {
    q: "Will the website continue to grow in the future?",
    a: "Yes, SmartToolsCore is continuously improving and may expand its features, content, and website experience over time.",
  },
  {
    q: "Is SmartToolsCore easy to use?",
    a: "Yes, SmartToolsCore is built with a focus on simplicity, accessibility, and a clean user experience.",
  },
  {
    q: "Can I use SmartToolsCore on mobile devices?",
    a: "Yes, the website is designed to work across modern devices, including desktops, tablets, and mobile phones.",
  },
  {
    q: "Is my information safe on this website?",
    a: "SmartToolsCore takes reasonable steps to protect user information and maintain a safe website experience. Please review the Privacy Policy for more details.",
  },
  {
    q: "Does SmartToolsCore collect personal information?",
    a: "SmartToolsCore may collect limited information such as details voluntarily submitted by users, basic usage information, and cookies or similar technologies as described in the Privacy Policy.",
  },
  {
    q: "Does SmartToolsCore use cookies?",
    a: "Yes, the website may use cookies and similar technologies to improve functionality, understand visitor activity, and support website performance.",
  },
  {
    q: "Does SmartToolsCore display advertisements?",
    a: "Yes, SmartToolsCore may display advertisements from third-party advertising partners in order to support the website.",
  },
  {
    q: "Can third-party services be used on this website?",
    a: "Yes, SmartToolsCore may use trusted third-party services such as analytics, advertising, hosting, and performance tools to operate and improve the website.",
  },
  {
    q: "Is the information on SmartToolsCore always guaranteed to be accurate?",
    a: "We aim to keep website content useful and up to date, but we do not guarantee that all information will always be complete, accurate, or suitable for every purpose.",
  },
  {
    q: "Can I rely on the content on this website as professional advice?",
    a: "No, content on SmartToolsCore is provided for general informational purposes only and should not be treated as legal, financial, academic, medical, or other professional advice.",
  },
  {
    q: "Can SmartToolsCore update its content or policies?",
    a: "Yes, website content, policies, and legal pages may be updated from time to time to reflect changes in operations, services, or legal requirements.",
  },
  {
    q: "Where can I read the website policies?",
    a: "You can review the website's Privacy Policy, Terms & Conditions, and Disclaimer pages for detailed information about how the website operates.",
  },
  {
    q: "Can I share SmartToolsCore with others?",
    a: "Yes, you may share the website with others, provided it is done lawfully and without misrepresenting the website or its content.",
  },
  {
    q: "Who owns the content and branding on SmartToolsCore?",
    a: "The website content, branding, design elements, and related materials are owned by or licensed to SmartToolsCore unless otherwise stated.",
  },
  {
    q: "Can I copy or republish content from SmartToolsCore?",
    a: "You should not reproduce, republish, or distribute website content in a way that violates applicable rights or permissions.",
  },
  {
    q: "What should I do if I notice an issue on the website?",
    a: "If you notice an issue, error, or concern related to the website, you can contact the support team by email.",
  },
  {
    q: "How can I contact SmartToolsCore?",
    a: "For questions, feedback, or support, you can contact SmartToolsCore at support@smarttoolscore.com.",
  },
  {
    q: "Can I send feedback or suggestions?",
    a: "Yes, feedback and suggestions are welcome and can help improve the website experience over time.",
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
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about SmartToolsCore, website access,
          privacy, advertising, support, and general usage.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Last updated: April 12, 2026
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left gap-4"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {index + 1}. {faq.q}
              </h2>

              <span className="text-gray-700 text-xl shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Support */}
      <div className="mt-16 bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Need More Help?
        </h2>
        <p className="text-gray-600 mb-3">
          For questions, feedback, or support related to SmartToolsCore, contact:
        </p>
        <p className="font-medium text-gray-900">
          support@smarttoolscore.com
        </p>
      </div>
    </main>
  );
}