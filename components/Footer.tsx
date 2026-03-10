import Link from "next/link";

export default function Footer() {
  return (
    
    <footer className="border-t mt-20 bg-gray-50">
      <hr className="border-gray-200"/>
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        {/* Links */}
        <div className="flex justify-center gap-8 text-gray-600 text-sm mb-6">
          <Link href="/about" className="hover:text-black">
            About
          </Link>

          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>

          <Link href="/privacy" className="hover:text-black">
            Privacy Policy
          </Link>

          <Link href="/terms" className="hover:text-black">
            Terms & Conditions
          </Link>

          <Link href="/disclaimer" className="hover:text-black">
            Disclaimer
          </Link>


        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} SmartToolsCore. All rights reserved.
        </p>

      </div>
    </footer>
  );
}