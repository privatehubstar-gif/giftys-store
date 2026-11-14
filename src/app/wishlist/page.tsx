"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useWishlist } from "@/lib/wishlist-context";

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif text-3xl sm:text-4xl mb-8">Wishlist</h1>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-6">Your wishlist is empty</p>
          <Link href="/shop" className="bg-[#0A0A0A] text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#C9A227]">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
