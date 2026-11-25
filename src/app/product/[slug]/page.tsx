"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getProductBySlug, formatPrice, products } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import ProductCard from "@/components/ProductCard";
import ImageSlot from "@/components/ImageSlot";
import { whatsappLink } from "@/lib/site";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addToCart, setIsOpen } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-3xl mb-3">Product not found</h1>
        <p className="text-muted mb-8">This item may have been removed or sold out.</p>
        <Link href="/shop" className="btn btn-dark">Back to shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const inWishlist = isInWishlist(product.id);
  const soldOut = product.stock <= 0;
  const slots = product.images.length > 0 ? product.images.map((_, i) => i) : [0, 1, 2, 3];
  const slotLabels = ["Main photo", "Side view", "Inside / detail", "Worn / styled"];

  const handleAdd = () => {
    addToCart(product, qty, selectedColor);
    setIsOpen(true);
  };

  const waMessage = `Hello Gifty's Store, I'm interested in the ${product.name}${selectedColor ? ` (${selectedColor})` : ""} at ${formatPrice(product.price)}. Is it available?`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <nav className="text-xs text-muted mb-6 tracking-wide" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-ink">Home</Link> <span className="mx-1.5">/</span>
        <Link href="/shop" className="hover:text-ink">Shop</Link> <span className="mx-1.5">/</span>
        <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-ink">{product.category}</Link>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Gallery */}
        <div>
          <ImageSlot
            src={product.images[mainImage]}
            alt={product.name}
            label={slotLabels[mainImage] || "Product photo"}
            hint={`${product.name}. Portrait 4:5, min 1200 × 1500 px`}
            className="aspect-[4/5] w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {slots.length > 1 && (
          <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3">
            {slots.map((i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={`border-2 transition-colors ${mainImage === i ? "border-ink" : "border-transparent hover:border-line"}`}
                aria-label={`Show photo ${i + 1}`}
              >
                <ImageSlot src={product.images[i]} alt="" label={String(i + 1)} className="aspect-square w-full" sizes="120px" />
              </button>
            ))}
          </div>
          )}
        </div>

        {/* Details */}
        <div className="md:pt-2">
          <p className="eyebrow mb-3">{product.category}</p>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-4">{product.name}</h1>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-2xl">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-muted line-through">{formatPrice(product.oldPrice)}</span>}
          </div>
          <p className="text-muted leading-relaxed mb-8">{product.description}</p>

          <div className="mb-7">
            <p className="text-xs tracking-[0.16em] uppercase mb-3">Colour: <span className="text-muted normal-case tracking-normal text-sm">{selectedColor}</span></p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-4 py-2.5 text-sm border transition-colors ${selectedColor === c ? "border-ink bg-ink text-white" : "border-line hover:border-ink"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-stretch gap-3 mb-3">
            <div className="flex items-center border border-line bg-white">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-11 h-12 flex items-center justify-center text-lg" aria-label="Decrease quantity">−</button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="w-11 h-12 flex items-center justify-center text-lg" aria-label="Increase quantity">+</button>
            </div>
            <button onClick={handleAdd} disabled={soldOut} className="btn btn-dark flex-1">
              {soldOut ? "Sold out" : "Add to cart"}
            </button>
            <button
              onClick={() => (inWishlist ? removeFromWishlist(product.id) : addToWishlist(product))}
              className="w-12 border border-line bg-white flex items-center justify-center hover:border-ink transition-colors"
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <svg className={`w-5 h-5 ${inWishlist ? "text-gold-dark" : ""}`} fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          <a href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full mb-8">
            Ask about this bag on WhatsApp
          </a>

          <div className="border-t border-line">
            {[
              { title: "Material & size", body: `${product.material}. Size: ${product.size}.` },
              { title: "Care", body: product.care },
              { title: "Delivery & returns", body: "Free delivery in Lekki on orders above ₦100,000. Nationwide delivery available. Contact us within 48 hours of delivery for any issue; items must be unused with tags." },
            ].map((item) => (
              <details key={item.title} className="border-b border-line group">
                <summary className="flex items-center justify-between py-4 text-sm tracking-wide">
                  {item.title}
                  <span className="text-lg text-muted group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-5 text-sm text-muted leading-relaxed">{item.body}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20 sm:mt-28">
          <h2 className="font-display text-2xl sm:text-3xl mb-8">You may also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
