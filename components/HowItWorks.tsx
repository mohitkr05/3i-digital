export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Book a 30–45 minute call",
      description:
        "Tell us where you are and where you want to go. We'll understand your challenges, answer your questions, and confirm if we're a good fit.",
      cta: "Book your free call",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Get a custom report",
      description:
        "You'll receive a clear breakdown of your digital setup, gaps, and next steps—tailored to your business and ready to implement.",
      cta: "Get my free report",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: "We manage everything for you",
      description:
        "Once onboarded, we manage your digital presence end-to-end. You stay focused on growth while we keep everything running smoothly.",
      cta: "Get started today",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 text-center">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Clear. Fast. Results-driven. Let&apos;s build momentum.
        </p>

        {/* Flow Container */}
        <div className="relative">
          {/* Desktop Flow Line */}
          <div
            className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200"
            style={{ width: "calc(100% - 120px)", marginLeft: "60px" }}
          ></div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-8 border-2 border-gray-200 shadow-sm relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600 text-center leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="text-center">
                    <a
                      href="#contact"
                      className="text-gray-900 font-medium hover:text-gray-600 transition-colors inline-flex items-center gap-1"
                    >
                      {step.cta} →
                    </a>
                  </div>
                </div>
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Simple, clear, and accountable from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
}
