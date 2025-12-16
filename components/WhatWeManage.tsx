export default function WhatWeManage() {
  const services = [
    {
      title: "Website & Platform Management",
      items: [
        "Security patches, updates & vulnerability monitoring",
        "24/7 uptime monitoring & incident alerts",
        "Performance, speed & Core Web Vitals optimisation",
        "Backups, recovery & rollback protection",
        "CMS, plugins & dependency management",
        "Minor fixes, content updates & QA checks",
        "Hosting, domains & SSL certificate management",
      ],
    },
    {
      title: "Social Media & Brand Presence",
      items: [
        "Social profile setup & optimisation",
        "Brand consistency across platforms",
        "Content planning & scheduling",
        "Ongoing posting & visibility management",
        "Community monitoring & response handling",
        "Comment, message & mention tracking",
        "Reputation & brand safety monitoring",
      ],
    },
    {
      title: "Visibility, SEO & Analytics",
      items: [
        "On-page SEO health & optimisation",
        "Technical SEO & indexing checks",
        "Search Console & error monitoring",
        "Broken links & redirect management",
        "Traffic, performance & conversion tracking",
        "Monthly insights & actionable reporting",
      ],
    },
    {
      title: "Tools, Systems & Operations",
      items: [
        "Marketing & scheduling tools management",
        "CRM, forms & lead flow setup",
        "Automation & workflow optimisation",
        "Access, permissions & tool governance",
        "Cost monitoring & tool optimisation",
      ],
    },
  ];

  return (
    <section className="bg-gray-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            We don&apos;t just manage tasks — we manage outcomes.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your digital presence is critical to growth. We take full ownership
            of the systems, platforms, and channels that power your business—so
            everything works together as you scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-900">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-gray-900 text-lg mt-0.5 flex-shrink-0">✓</span>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <div className="mt-20 pt-12 border-t border-gray-700">
          <p className="text-xl text-gray-300 font-medium text-center max-w-2xl mx-auto">
            No surprises. No gaps. No hand-holding required. Just reliable,
            end-to-end digital management that lets you focus on growth.
          </p>
        </div>
      </div>
    </section>
  );
}
