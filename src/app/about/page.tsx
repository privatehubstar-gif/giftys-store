import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import { siteImages } from "@/data/images";
import { LOCATION, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our story",
  description: "Gifty's Store started in Uyo, Akwa Ibom to help every woman carry elegance without breaking the bank.",
};

const values = [
  { title: "Quality you can see", text: "We check every bag for material, stitching, hardware and finish before it reaches you. If it doesn't meet our standard, it doesn't leave our store." },
  { title: "Style within reach", text: "Elegant, current designs at prices that make sense, so looking classy doesn't have to stretch your budget." },
  { title: "Personal service", text: "Talk to us directly on WhatsApp. We help you choose, confirm availability and arrange delivery." },
];

// Until a store photo is added in src/data/images.ts (aboutStory), a photo of one of the shop's bags is used.
const ABOUT_FALLBACK = "/images/gold-pyramid-monogram-tote.jpg";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-champagne-wash">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <div className="ornament" aria-hidden="true"><i /></div>
          <p className="eyebrow mb-4">Our story</p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight">Carrying elegance, one bag at a time</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative max-w-md mx-auto md:max-w-none w-full">
          <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border border-gold/70" aria-hidden="true" />
          <ImageSlot
            src={siteImages.aboutStory || ABOUT_FALLBACK}
            alt="Gifty's Store"
            label="About page photo"
            hint="Portrait 4:5. The store, a bag display or the owner. Min 1000 × 1250 px"
            className="relative aspect-[4/5] w-full bg-white"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-5 text-muted leading-relaxed text-base sm:text-lg">
          <p>
            Gifty&apos;s Store started in Uyo, Akwa Ibom with one mission: to help every woman carry elegance without breaking the bank.
          </p>
          <p>
            We source quality, stylish handbags and accessories that make you feel confident, classy and seen. Every piece is carefully selected for the modern Nigerian woman who wants luxury that fits her lifestyle and budget.
          </p>
          <p className="font-display text-ink text-xl sm:text-2xl leading-snug pt-2">
            Our mission is to make elegant handbags accessible to every woman who wants to feel confident and classy every day.
          </p>
        </div>
      </section>

      {/* Meet the owner */}
      <section className="bg-blush-wash">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col sm:flex-row items-center gap-8 sm:gap-12 text-center sm:text-left">
          <div className="ring-frame shrink-0 w-44 sm:w-52">
            <ImageSlot
              src={siteImages.aboutPortrait}
              alt="Gift Sam Monday, founder of Gifty's Store"
              label="Owner photo"
              className="aspect-square rounded-full"
              sizes="208px"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Meet the owner</p>
            <h2 className="font-display text-3xl mb-2">Gift Sam Monday</h2>
            <p className="text-sm tracking-wide text-gold-dark mb-4">Founder, Gifty&apos;s Store &nbsp;·&nbsp; From Akwa Ibom State</p>
            <p className="text-muted leading-relaxed">
              Gift started Gifty&apos;s Store in Uyo, Akwa Ibom, with a simple goal: elegant handbags that every woman can afford.
            </p>
          </div>
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

      <section className="bg-cta text-white border-t border-gold/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="ornament" aria-hidden="true"><i /></div>
          <p className="text-white/70 text-sm mb-2">Based in {LOCATION}</p>
          <h2 className="font-display text-3xl mb-8">Come say hello</h2>
          <a href={whatsappLink("Hello Gifty's Store!")} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Chat with us on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
