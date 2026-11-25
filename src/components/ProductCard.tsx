"use client";

import Link from "next/link";
import { Product, formatPrice } from "@/data/products";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";
import ImageSlot from "@/components/ImageSlot";

export default function ProductCard({ product }: { product: Product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const inWishlist = isInWishlist(product.id);
  const soldOut = product.stock <= 0;

  return (
    <div className="group">
      <div className="relative">
        <Link href={`/product/${product.slug}`} aria-label={product.name}>
          <ImageSlot
            src={product.images[0]}
            alt={product.name}
            label="Product photo"
            hint={product.name}
            className="aspect-[4/5]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>

        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {soldOut && <span className="bg-ink text-white text-[10px] tracking-[0.14em] uppercase px-2.5 py-1">Sold out</span>}
          {!soldOut && product.isNewArrival && <span className="bg-white text-ink text-[10px] tracking-[0.14em] uppercase px-2.5 py-1">New</span>}
          {!soldOut && product.oldPrice && <span className="bg-gold text-white text-[10px] tracking-[0.14em] uppercase px-2.5 py-1">Sale</span>}
        </div>

        <button
          onClick={() => (inWishlist ? removeFromWishlist(product.id) : addToWishlist(product))}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg className={`w-[18px] h-[18px] ${inWishlist ? "text-gold-dark" : "text-ink/70"}`} fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {!soldOut && (
          <button
            onClick={() => addToCart(product, 1, product.colors[0])}
            className="absolute left-3 right-3 bottom-3 bg-ink/95 text-white text-[11px] tracking-[0.16em] uppercase py-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 focus-visible:opacity-100 transition-all duration-200 hover:bg-gold-dark hidden sm:block"
          >
            Add to cart
          </button>
        )}
      </div>

      <div className="mt-4">
        <p className="text-[11px] text-muted uppercase tracking-[0.16em] mb-1">{product.category}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-display text-base sm:text-lg leading-snug hover:text-gold-dark transition-colors line-clamp-1">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mt-1.5 text-sm">
          <span className="font-medium">{formatPrice(product.price)}</span>
          {product.oldPrice && <span className="text-muted line-through">{formatPrice(product.oldPrice)}</span>}
        </div>
        {!soldOut && (
          <button
            onClick={() => addToCart(product, 1, product.colors[0])}
            className="sm:hidden mt-3 w-full border border-ink text-[11px] tracking-[0.16em] uppercase py-2.5 active:bg-ink active:text-white"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
