"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getProductBySlug, formatPrice, products } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500 mb-4">Product not found</p>
        <Link href="/shop" className="text-[#C9A227] hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="relative aspect-[3/4] bg-[#F5F0E8] rounded-lg overflow-hidden mb-4">
            <Image src={product.images[mainImage]} alt={product.name} fill className="object-cover" sizes="50vw" priority />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setMainImage(i)} className={`relative aspect-square rounded overflow-hidden border-2 ${mainImage === i ? "border-[#C9A227]" : "border-transparent"}`}>
                <Image src={img} alt="" fill className="object-cover" sizes="100px" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-3">{product.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>}
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Color: {selectedColor}</p>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <button key={c} onClick={() => setSelectedColor(c)} className={`px-4 py-2 text-sm border rounded ${selectedColor === c ? "border-[#C9A227] text-[#C9A227]" : "border-gray-200"}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-gray-200">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center">−</button>
              <span className="w-10 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center">+</button>
            </div>
            <button onClick={() => addToCart(product, qty, selectedColor)} className="flex-1 bg-[#0A0A0A] text-white py-3 text-sm tracking-wider uppercase hover:bg-[#C9A227]">Add to Cart</button>
            <button onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)} className="w-12 h-12 border border-gray-200 flex items-center justify-center hover:border-[#C9A227]">
              <svg className={`w-5 h-5 ${inWishlist ? "fill-[#C9A227] text-[#C9A227]" : ""}`} fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
          </div>

          <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
            <p><span className="font-medium text-[#0A0A0A]">Material:</span> {product.material}</p>
            <p><span className="font-medium text-[#0A0A0A]">Size:</span> {product.size}</p>
            <p><span className="font-medium text-[#0A0A0A]">Care:</span> {product.care}</p>
            <p><span className="font-medium text-[#0A0A0A]">Stock:</span> {product.stock} available</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-serif text-2xl mb-8">You may also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
