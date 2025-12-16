export default function Testimonial() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-10 md:p-16 border border-gray-200 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-900 mb-8 leading-relaxed font-medium">
              "We have seen a significant improvement in our digital presence and the general flow of our systems. I believe this has contributed significantly to the growth of our business. Many thanks, 3I Digital."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                JD
              </div>
              <div>
                <p className="font-semibold text-gray-900">James Davidson</p>
                <p className="text-sm text-gray-600">Founder, TechStart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
