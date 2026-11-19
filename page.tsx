import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ImageSlot from "@/components/ImageSlot";
import { products, categories } from "@/data/products";
import { siteImages } from "@/data/images";
import { whatsappLink } from "@/lib/site";

const perks = [
  { title: "Free delivery in Lekki", text: "On orders above ₦100,000" },
  { title: "Nationwide delivery", text: "Lagos, Abuja, Port Harcourt and beyond" },
  { title: "Quality checked", text: "Every bag inspected before it leaves us" },
  { title: "Easy ordering", text: "Order and pay via WhatsApp or transfer" },
];

export default function HomePage() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-10 sm:py-14 lg:py-0">
          <div className="lg:py-24 order-2 lg:order-1">
            <p className="eyebrow mb-5">Handbags &amp; Fashion Accessories</p>
            <h1 className="font-display text-[2.6rem] sm:text-6xl leading-[1.05] mb-6">
              Carry Elegance,
              <br />
              Always.
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
          <div className="order-1 lg:order-2">
            <ImageSlot
              src={siteImages.hero}
              alt="Gifty's Store handbags"
              label="Homepage hero photo"
              hint="Portrait 4:5, a styled bag shot. Min 1200 × 1500 px"
              className="aspect-[4/5] lg:aspect-auto lg:h-[640px] w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="border-b border-line bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="text-center lg:text-left">
              <p className="text-[13px] font-medium tracking-wide">{p.title}</p>
              <p className="text-xs text-muted mt-1">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Collections</p>
            <h2 className="font-display text-3xl sm:text-4xl">Shop by category</h2>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/shop?category=${encodeURIComponent(cat.name)}`} className="group block">
                <ImageSlot
                  src={cat.image}
                  alt={cat.name}
                  label={cat.name}
                  hint="Category photo, square"
                  className="aspect-square"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <p className="mt-3 text-center text-sm tracking-wide group-hover:text-gold-dark transition-colors">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">Customer favourites</p>
              <h2 className="font-display text-3xl sm:text-4xl">Best sellers</h2>
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
      <section className="bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          <ImageSlot
            src={siteImages.homeStory}
            alt="Inside Gifty's Store"
            label="Story photo"
            hint="Portrait 4:5. The store, the bags laid out, or the owner. Min 1000 × 1250 px"
            className="aspect-[4/5] w-full bg-white"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div>
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6">Elegance that fits your life and your budget</h2>
            <p className="text-muted leading-relaxed mb-5">
              Gifty&apos;s Store started in Lekki, Lagos with one mission: to help every woman carry elegance without breaking the bank.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We choose quality, stylish handbags and accessories that make you feel confident, classy and seen, and we check every piece for material, stitching and finish before it reaches you.
            </p>
            <Link href="/about" className="btn btn-outline">Read our story</Link>
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
      <section className="bg-ink text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <p className="eyebrow eyebrow-gold mb-4">Need help choosing?</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-4">Talk to us on WhatsApp</h2>
          <p className="text-white/65 mb-9 max-w-md mx-auto">
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
