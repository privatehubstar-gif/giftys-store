"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useWishlist } from "@/lib/wishlist-context";

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="font-display text-3xl sm:text-5xl mb-10">Wishlist</h1>
      {items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted mb-7">Your wishlist is empty. Tap the heart on any bag to save it here.</p>
          <Link href="/shop" className="btn btn-dark">Continue shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
