import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-xl font-semibold text-gray-900 mb-3">
              3I Digital
            </p>
            <p className="text-gray-600 text-sm">
              Based in Melbourne. Working with teams across Australia.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">Contact</p>
            <p className="text-gray-600 text-sm mb-2">
              mohit[at]3idigital.com.au
            </p>
            {/* <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              LinkedIn →
            </Link> */}
          </div>
          <div>
            {/* <p className="text-sm font-medium text-gray-900 mb-3">Legal</p> */}
            <div className="flex flex-col gap-2">
              {/* <Link
                href="#privacy"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Privacy Policy
              </Link> */}
              {/* <Link
                href="#terms"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Terms
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
