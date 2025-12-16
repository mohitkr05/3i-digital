import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative min-h-[90vh] flex items-center pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="max-w-4xl ml-auto">
          <p className="text-sm uppercase tracking-wider text-gray-900 mb-6 font-semibold bg-white/90 inline-block px-4 py-2 rounded">
            Managed Digital Presence
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
            Launch faster. <br /> Scale smarter
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
            We handle your digital presence so you can build your business
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="#contact"
              className="inline-block bg-gray-900 text-white px-10 py-4 text-base font-medium rounded-full hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              Let&apos;s talk
            </Link>
            <Link
              href="#problems"
              className="inline-block bg-white text-gray-900 px-10 py-4 text-base font-medium rounded-full border-2 border-gray-900 hover:bg-gray-50 transition-all duration-300"
            >
              View our services
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            Trusted by small teams who want things handled quietly
          </p>
        </div>
      </div>
    </header>
  );
}
