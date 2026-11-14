import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function HomePage() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 8);
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 8);

  return (
    <div>
      <section className="relative h-[70vh] sm:h-[80vh] min-h-[500px] bg-[#F5F0E8]">
        <Image src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1600&q=80" alt="Luxury handbag" fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-xl text-white">
              <p className="text-sm tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Premium Collection</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">Carry Elegance, Always.</h1>
              <p className="text-base sm:text-lg text-white/90 mb-8">Premium Handbags & Fashion Accessories for the Modern Woman</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/shop" className="bg-[#C9A227] text-[#0A0A0A] px-8 py-3.5 text-sm tracking-wider uppercase font-medium hover:bg-[#D4AF37]">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl mb-3">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/shop?category=${encodeURIComponent(cat.name)}`} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-[#F5F0E8]">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="16vw" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30" />
                  <div className="absolute inset-0 flex items-end p-3">
                    <span className="text-white text-xs sm:text-sm font-medium">{cat.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F5F0E8]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl mb-10 text-center">Best Sellers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl mb-10 text-center">New Arrivals</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
