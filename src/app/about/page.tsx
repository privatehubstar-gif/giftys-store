export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="font-serif text-4xl sm:text-5xl mb-6 text-center">Our Story</h1>
      <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed space-y-6">
        <p>
          Gifty&apos;s Store started in Lekki, Lagos with one mission — to help every woman carry elegance without breaking the bank.
        </p>
        <p>
          We source quality, trendy handbags and accessories that make you feel confident, classy and seen. Every piece is carefully selected for the modern Nigerian woman who wants luxury that fits her lifestyle and budget.
        </p>
        <div className="bg-[#F5F0E8] p-8 rounded-lg my-10">
          <h2 className="font-serif text-2xl text-[#0A0A0A] mb-3">Our Mission</h2>
          <p className="text-gray-700">To make premium, elegant handbags accessible to every woman who wants to feel confident and classy every day.</p>
        </div>
        <div className="bg-[#F5F0E8] p-8 rounded-lg">
          <h2 className="font-serif text-2xl text-[#0A0A0A] mb-3">Quality Promise</h2>
          <p className="text-gray-700">We carefully inspect every bag for quality of material, stitching, hardware and finish before it reaches you. If it doesn&apos;t meet our standard, it doesn&apos;t leave our store.</p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500 mb-2">Based in Lekki, Lagos</p>
        <a href="http://wa.me/2348140138396" className="inline-block bg-[#C9A227] text-[#0A0A0A] px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-[#D4AF37]">Chat with us on WhatsApp</a>
      </div>
    </div>
  );
}
