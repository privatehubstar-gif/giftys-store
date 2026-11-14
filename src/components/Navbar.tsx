"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  return (
    <>
      <div className="bg-[#0A0A0A] text-white text-center text-xs sm:text-sm py-2 px-4">
        Free Delivery in Lekki on orders above ₦100,000 | Nationwide Delivery Available
      </div>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button className="lg:hidden p-2 -ml-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A0A0A] rounded-full flex items-center justify-center">
                <span className="text-[#C9A227] font-serif text-lg sm:text-xl font-bold">GS</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-serif text-lg font-semibold tracking-wide">Gifty&apos;s Store</div>
                <div className="text-[10px] text-gray-500 tracking-widest uppercase">Carry Elegance, Always.</div>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium hover:text-[#C9A227]">Home</Link>
              <Link href="/shop" className="text-sm font-medium hover:text-[#C9A227]">Shop</Link>
              <Link href="/about" className="text-sm font-medium hover:text-[#C9A227]">About</Link>
              <Link href="/contact" className="text-sm font-medium hover:text-[#C9A227]">Contact</Link>
            </nav>
            <div className="flex items-center gap-3 sm:gap-5">
              <Link href="/wishlist" className="relative p-1.5 hover:text-[#C9A227]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                {wishlistCount > 0 && <span className="absolute -top-1 -right-1 bg-[#C9A227] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{wishlistCount}</span>}
              </Link>
              <button onClick={() => setIsOpen(true)} className="relative p-1.5 hover:text-[#C9A227]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-[#C9A227] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{totalItems}</span>}
              </button>
            </div>
          </div>
          {mobileOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <nav className="flex flex-col px-4 py-4 gap-1">
                {["/", "/shop", "/about", "/contact"].map((href, i) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="py-3 text-sm font-medium border-b border-gray-50 hover:text-[#C9A227]">
                    {["Home", "Shop", "About", "Contact"][i]}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
