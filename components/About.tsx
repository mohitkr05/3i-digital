export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
          About 3I Digital
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Australian owned. Founder focused. No corporate nonsense.
        </p>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
          <p>
            We started 3I Digital because we kept seeing the same problem: smart
            founders wasting hours managing tools instead of building their
            businesses.
          </p>

          <p>
            Most agencies promise explosive growth and massive scale. That's not
            us. We promise something more valuable:{" "}
            <span className="font-medium text-gray-900">peace of mind</span>.
          </p>

          <p>
            Your website stays secure and online. Your social media stays
            active. Your digital presence is handled by someone who actually
            cares. And you get one accountable person to talk to when you need
            something done.
          </p>

          <p>
            No 10-person account teams. No corporate jargon. No inflated
            promises about going viral or 10x growth. Just consistent, reliable
            work from a small team in Melbourne that treats your business like
            it matters.
          </p>

          <div className="bg-gray-50 border-l-4 border-gray-200 p-6 my-8">
            <p className="text-gray-900 font-medium text-lg mb-2">
              Our promise is simple:
            </p>
            <p className="text-gray-600">
              You'll always know what's happening, you'll never chase us for
              updates, and your digital presence will quietly work in the
              background while you focus on what you do best.
            </p>
          </div>

          <p className="text-base text-gray-500">
            Based in Melbourne. Working with growing businesses and startups
            across Australia.
          </p>
        </div>
      </div>
    </section>
  );
}
