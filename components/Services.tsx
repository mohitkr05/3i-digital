export default function Services() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-gray-900">
          What&apos;s Included (and What&apos;s Not)
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Included
            </h3>
            <ul className="space-y-4 text-lg text-gray-900 leading-relaxed">
              <li>✓ Website uptime and updates</li>
              <li>✓ Social presence management</li>
              <li>✓ Content scheduling</li>
              <li>✓ Monthly review and summary</li>
              <li>✓ Single point of contact</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Not included
            </h3>
            <ul className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <li>– Paid advertising</li>
              <li>– SEO growth guarantees</li>
              <li>– Daily posting</li>
              <li>– Lead generation promises</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
