import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ImageSlot from "@/components/ImageSlot";
import { products, categories, formatPrice } from "@/data/products";
import { siteImages } from "@/data/images";
import { whatsappLink } from "@/lib/site";

const perks = [
  { title: `Bags from ${formatPrice(Math.min(...products.map((p) => p.price)))}`, text: "Elegant styles that fit your budget" },
  { title: "Nationwide delivery", text: "Lagos, Abuja, Port Harcourt and beyond" },
  { title: "Quality checked", text: "Every bag inspected before it leaves us" },
  { title: "Easy ordering", text: "Order and pay via WhatsApp or transfer" },
];

// Until the store's own hero and story photos are added in src/data/images.ts,
// the homepage uses photos of real bags from the shop so nothing looks empty.
const STORY_FALLBACK = "/images/croc-brown-tote.jpg";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center mb-12">
      <div className="ornament" aria-hidden="true"><i /></div>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function HomePage() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 sm:py-16 lg:py-0">
          <div className="lg:py-24 order-1">
            <p className="eyebrow mb-5">Handbags &amp; Fashion Accessories</p>
            <h1 className="font-display text-[2.6rem] sm:text-6xl leading-[1.05] mb-6">
              Carry Elegance,
              <br />
              <span className="text-gold-dark">Always.</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-md mb-9">
              Quality bags chosen for the way you live: work, weekends and every occasion in between.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop" className="btn btn-dark">Shop the collection</Link>
              <a href={whatsappLink("Hello Gifty's Store, I'd like to see your latest bags.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="order-2">
            {siteImages.hero ? (
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-3 sm:-inset-4 border border-gold/70 rounded-t-[999px]" aria-hidden="true" />
                <ImageSlot
                  src={siteImages.hero}
                  alt="Gifty's Store handbags"
                  label="Homepage hero photo"
                  className="relative aspect-[4/5] lg:aspect-auto lg:h-[620px] w-full rounded-t-[999px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[5/6] lg:aspect-auto lg:h-[620px]">
                {/* gold ring and soft glow behind the photos */}
                <div className="absolute -left-3 bottom-4 w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-gold/70" aria-hidden="true" />
                <div className="absolute right-[2%] top-[44%] w-40 h-40 rounded-full bg-white/50 blur-2xl" aria-hidden="true" />

                {/* tall arch */}
                <div className="absolute left-[4%] top-0 w-[62%] h-[80%] p-1.5 border border-gold/70 rounded-t-[999px]">
                  <ImageSlot
                    src="/images/cream-plaid-tote.jpg"
                    alt="Cream plaid tote"
                    label="Cream plaid tote"
                    className="h-full w-full rounded-t-[999px]"
                    sizes="(max-width: 1024px) 60vw, 30vw"
                    priority
                  />
                </div>

                {/* round photo, top right */}
                <div className="absolute right-0 top-[5%] w-[40%] aspect-square rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <ImageSlot
                    src="/images/butterfly-mini-bag.jpg"
                    alt="Butterfly charm mini bags in eight colours"
                    label="Butterfly mini bags"
                    className="h-full w-full"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    priority
                  />
                </div>

                {/* round photo, bottom right */}
                <div className="absolute right-[6%] bottom-[2%] w-[46%] aspect-square rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <ImageSlot
                    src="/images/beige-monogram-bag-set.jpg"
                    alt="Beige monogram tote with matching clutch"
                    label="Bag set"
                    className="h-full w-full"
                    sizes="(max-width: 1024px) 46vw, 23vw"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-perks border-y border-gold/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="text-center">
              <p className="text-[13px] font-medium tracking-wide text-gold-light">{p.title}</p>
              <p className="text-xs text-white/65 mt-1">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-blush-wash py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="Collections" title="Shop by category" />
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 sm:gap-8 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/shop?category=${encodeURIComponent(cat.name)}`} className="group block w-[calc(50%-10px)] sm:w-[calc(25%-24px)] lg:w-[calc(20%-26px)]">
                <div className="ring-frame">
                  <ImageSlot
                    src={cat.image}
                    alt={cat.name}
                    label={cat.name}
                    hint="Category photo, square"
                    className="aspect-square rounded-full"
                    sizes="(max-width: 640px) 45vw, 20vw"
                  />
                </div>
                <p className="mt-4 text-center text-[13px] sm:text-sm tracking-wide group-hover:text-gold-dark transition-colors">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">Customer favourites</p>
              <h2 className="font-display text-3xl sm:text-4xl">Best sellers</h2>
              <div className="mt-4 h-px w-16 bg-gold" aria-hidden="true" />
            </div>
            <Link href="/shop?filter=bestsellers" className="hidden sm:block text-sm tracking-wide underline underline-offset-4 hover:text-gold-dark">View all</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-champagne-wash">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative max-w-md mx-auto md:max-w-none w-full">
            <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border border-gold/70" aria-hidden="true" />
            <ImageSlot
              src={siteImages.homeStory || STORY_FALLBACK}
              alt="Inside Gifty's Store"
              label="Story photo"
              hint="Portrait 4:5. The store, the bags laid out, or the owner. Min 1000 × 1250 px"
              className="relative aspect-[4/5] w-full bg-white"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <div className="ornament !justify-start !mx-0" aria-hidden="true"><i /></div>
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6">Elegance that fits your life and your budget</h2>
            <p className="text-muted leading-relaxed mb-5">
              Gifty&apos;s Store started in Uyo, Akwa Ibom with one mission: to help every woman carry elegance without breaking the bank.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We choose quality, stylish handbags and accessories that make you feel confident, classy and seen, and we check every piece for material, stitching and finish before it reaches you.
            </p>
            <Link href="/about" className="btn btn-dark">Read our story</Link>
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">Just in</p>
              <h2 className="font-display text-3xl sm:text-4xl">New arrivals</h2>
              <div className="mt-4 h-px w-16 bg-gold" aria-hidden="true" />
            </div>
            <Link href="/shop?filter=new" className="hidden sm:block text-sm tracking-wide underline underline-offset-4 hover:text-gold-dark">View all</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Optional wide banner */}
      {siteImages.banner && (
        <ImageSlot src={siteImages.banner} alt="Gifty's Store" label="Wide banner" className="aspect-[16/7] w-full" />
      )}

      {/* WhatsApp CTA */}
      <section className="bg-cta text-white border-t border-gold/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-circle.png" alt="Gifty's Store" width={88} height={88} className="mx-auto mb-6 h-[88px] w-[88px]" />
          <p className="eyebrow eyebrow-gold mb-4">Need help choosing?</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-4">Talk to us on WhatsApp</h2>
          <p className="text-white/70 mb-9 max-w-md mx-auto">
            Send us a message for sizes, colours, availability or custom requests. We reply quickly.
          </p>
          <a href={whatsappLink("Hello Gifty's Store, I need help choosing a bag.")} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            Chat with us
          </a>
        </div>
      </section>
    </div>
  );
}
