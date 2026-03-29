import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 py-8 text-center text-gray-400 text-sm">
      <div className="flex justify-center gap-6 mb-4 flex-wrap">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/disclaimer">Disclaimer</Link>
      </div>

      <p>© 2026 SmartToolsCore. All rights reserved.</p>
    </footer>
  );
}