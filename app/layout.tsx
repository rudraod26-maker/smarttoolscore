import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartToolsCore",
  description:
    "SmartToolsCore provides free online tools, AI guides, and finance resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        <Navbar />

        <main className="max-w-7xl mx-auto px-6 py-16">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}