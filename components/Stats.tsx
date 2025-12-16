export default function Stats() {
  const stats = [
    {
      value: "98%",
      label: "customer satisfaction rate",
    },
    {
      value: "35%+",
      label: "boost in engagement after management",
    },
    {
      value: "50+",
      label: "founders trusting us with their digital presence",
    },
    {
      value: "24/7",
      label: "monitoring and support for your peace of mind",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-12 text-center font-medium">
          3I Digital in numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
