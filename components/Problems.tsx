export default function Problems() {
  const problems = [
    {
      title: "Struggling to meet tight deadlines with a lean team?",
      description:
        "Hiring in-house slows you down. We provide skilled team members who can start immediately—so you hit deadlines without the hiring overhead.",
    },
    {
      title: "Need to scale your digital presence without the chaos?",
      description:
        "Growth requires consistency. We set up the right systems and optimize your digital operations to keep everything running smoothly as you scale.",
    },
    {
      title: "Got big ideas but need to launch fast?",
      description:
        "Focus on your product and vision. We take care of the tools, setup, and execution—helping you launch quickly without compromising quality.",
    },
  ];

  return (
    <section id="problems" className="py-24 md:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Building a business is tough.
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 font-medium">
            Choosing the right partner shouldn't be.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                {problem.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition to solution */}
        <div className="mt-20 pt-12 border-t border-gray-700">
          <p className="text-xl text-gray-300 font-medium text-center max-w-3xl mx-auto">
            We handle all of this quietly in the background, so you can focus on what you do best.
          </p>
        </div>
      </div>
    </section>
  );
}
