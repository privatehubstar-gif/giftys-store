import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import { siteImages } from "@/data/images";
import { LOCATION, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our story",
  description: "Gifty's Store started in Lekki, Lagos to help every woman carry elegance without breaking the bank.",
};

const values = [
  { title: "Quality you can see", text: "We check every bag for material, stitching, hardware and finish before it reaches you. If it doesn't meet our standard, it doesn't leave our store." },
  { title: "Style within reach", text: "Elegant, current designs at prices that make sense, so looking classy doesn't have to stretch your budget." },
  { title: "Personal service", text: "Talk to us directly on WhatsApp. We help you choose, confirm availability and arrange delivery." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="eyebrow mb-4">Our story</p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight">Carrying elegance, one bag at a time</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
        <ImageSlot
          src={siteImages.aboutStory}
          alt="Gifty's Store"
          label="About page photo"
          hint="Landscape 4:3. The store, a bag display or the owner. Min 1600 × 1200 px"
          className="aspect-[4/3] w-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="space-y-5 text-muted leading-relaxed text-base sm:text-lg">
          <p>
            Gifty&apos;s Store started in Lekki, Lagos with one mission: to help every woman carry elegance without breaking the bank.
          </p>
          <p>
            We source quality, stylish handbags and accessories that make you feel confident, classy and seen. Every piece is carefully selected for the modern Nigerian woman who wants luxury that fits her lifestyle and budget.
          </p>
          <p className="font-display text-ink text-xl sm:text-2xl leading-snug pt-2">
            Our mission is to make elegant handbags accessible to every woman who wants to feel confident and classy every day.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid md:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.title}>
              <div className="w-8 h-px bg-gold mb-5" />
              <h2 className="font-display text-xl mb-3">{v.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="text-white/60 text-sm mb-2">Based in {LOCATION}</p>
          <h2 className="font-display text-3xl mb-8">Come say hello</h2>
          <a href={whatsappLink("Hello Gifty's Store!")} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Chat with us on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
