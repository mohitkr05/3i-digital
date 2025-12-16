import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          Book a short call to see if we're a good fit. No pressure, no hard sell.
        </p>

        <Link
          href="https://calendly.com/mohit-3idigital/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 text-white px-12 py-5 text-lg font-medium rounded-md hover:bg-gray-800 transition-colors shadow-sm"
        >
          Book your consultation
        </Link>

        <p className="text-sm text-gray-500 mt-6">
          30-45 minutes • Free consultation
        </p>
      </div>
    </section>
  );
}
