import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-600">

        <div className="flex gap-6 flex-wrap">

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

          <Link href="/privacy">Privacy Policy</Link>

          <Link href="/terms">Terms & Conditions</Link>

        </div>

        <p className="mt-4">
          © {new Date().getFullYear()} SmartToolsCore
        </p>

      </div>
    </footer>
  );
}