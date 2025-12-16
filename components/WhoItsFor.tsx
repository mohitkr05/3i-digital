export default function WhoItsFor() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900">
          Who This Is For
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          This works best when expectations are aligned.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Good fit if you:
            </h3>
            <ul className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <li>Are a founder or small team</li>
              <li>Want things handled quietly</li>
              <li>Don't want to manage tools</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-500">
              Not a good fit if you:
            </h3>
            <ul className="space-y-4 text-lg text-gray-500 leading-relaxed">
              <li>Want daily posting</li>
              <li>Expect growth guarantees</li>
              <li>Enjoy managing tools yourself</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
