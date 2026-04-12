import "./globals.css";
import AuthButtons from "@/components/AuthButtons";

export const metadata = {
  title: "SmartToolsCore",
  description: "AI tools and blogs to improve your writing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="text-lg font-semibold tracking-tight text-gray-900 hover:scale-105 transition"
            >
              Smart<span className="text-blue-600">Tools</span>Core
            </a>

            {/* Menu */}
            <div className="flex items-center gap-3 bg-gray-100 p-0.5 rounded-xl border-dashed border-gray-700 shadow-lg">
              <a
                href="/tools/paraphraser"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white"
              >
                AI Paraphraser
              </a>

              <a
                href="/tools/grammar-checker"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white"
              >
                Grammar Checker
              </a>

              <a
                href="/blog"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white"
              >
                Blogs
              </a>

              {/* <AuthButtons /> */}
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-20">
          <div className="max-w-5xl mx-auto px-6 py-10">
            {/* Legal Box */}
            <div className="bg-gray-100 rounded-2xl p-6 shadow-lg">
              <div className="flex flex-wrap gap-3">
                <a
                  href="/about"
                  className="px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-white hover:text-blue-600 transition duration-200 shadow-sm hover:shadow"
                >
                  About
                </a>

                <a
                  href="/contact"
                  className="px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-white hover:text-blue-600 transition duration-200 shadow-sm hover:shadow"
                >
                  Contact
                </a>

                <a
                  href="/privacy-policy"
                  className="px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-white hover:text-blue-600 transition duration-200 shadow-sm hover:shadow"
                >
                  Privacy Policy
                </a>

                <a
                  href="/terms"
                  className="px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-white hover:text-blue-600 transition duration-200 shadow-sm hover:shadow"
                >
                  Terms
                </a>

                <a
                  href="/disclaimer"
                  className="px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-white hover:text-blue-600 transition duration-200 shadow-sm hover:shadow"
                >
                  Disclaimer
                </a>

                <a
                  href="/faqs"
                  className="px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-white hover:text-blue-600 transition duration-200 shadow-sm hover:shadow"
                >
                  FAQs
                </a>
              </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-xs text-gray-500 mt-6">
              © {new Date().getFullYear()} SmartToolsCore
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}