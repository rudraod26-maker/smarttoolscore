import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools & Free Online Tools 2026 | SmartToolsAI",
  description:
    "Discover the best AI tools and free online utilities for productivity, business and students. Compare, review and use powerful tools.",
  keywords: [
    "AI tools",
    "free online tools",
    "best AI tools 2026",
    "AI writing tools",
    "productivity tools",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <header className="bg-white shadow-md p-4">
          <div className="max-w-6xl mx-auto flex justify-between">
            <h1 className="text-xl font-bold">SmartToolsAI</h1>
            <nav className="space-x-6 text-sm">
              <a href="/ai-tools">AI Tools</a>
              <a href="/tools">Free Tools</a>
              <a href="/blog">Blog</a>
              <a href="/finance">Finance</a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-6">{children}</main>

        <footer className="mt-24 border-t py-10 text-center text-sm text-gray-500">
  <div className="flex justify-center gap-6 mb-4">
    <a href="/about">About</a>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/terms">Terms</a>
    <a href="/contact">Contact</a>
  </div>

  <p>© 2026 SmartToolsAI. All rights reserved.</p>
</footer>
      </body>
    </html>
  );
}