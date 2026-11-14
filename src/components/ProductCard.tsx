"use client";

import Link from "next/link";
import Image from "next/image";
import { Product, formatPrice } from "@/data/products";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F0E8] rounded-lg">
        <Link href={`/product/${product.slug}`}>
          <Image src={product.images[0]} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" />
        </Link>
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNewArrival && <span className="bg-[#0A0A0A] text-white text-[10px] tracking-wider uppercase px-2 py-1">New</span>}
          {product.oldPrice && <span className="bg-[#C9A227] text-white text-[10px] tracking-wider uppercase px-2 py-1">Sale</span>}
        </div>
        <button onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)} className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Wishlist">
          <svg className={`w-4 h-4 ${inWishlist ? "fill-[#C9A227] text-[#C9A227]" : "text-gray-600"}`} fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button onClick={() => addToCart(product, 1, product.colors[0])} className="w-full bg-[#0A0A0A] text-white text-xs tracking-wider uppercase py-2.5 hover:bg-[#C9A227]">Add to Cart</button>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[11px] text-gray-500 uppercase tracking-wider">{product.category}</p>
        <Link href={`/product/${product.slug}`}><h3 className="font-medium text-sm sm:text-base hover:text-[#C9A227] line-clamp-1">{product.name}</h3></Link>
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">{formatPrice(product.price)}</span>
          {product.oldPrice && <span className="text-gray-400 text-sm line-through">{formatPrice(product.oldPrice)}</span>}
        </div>
      </div>
    </div>
  );
}
