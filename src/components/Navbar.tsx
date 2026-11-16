"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  return (
    <>
      <div className="bg-[#0A0A0A] text-white text-center text-xs sm:text-sm py-2.5 px-4 tracking-wide">
        Free Delivery in Lekki on orders above ₦100,000 · Nationwide Delivery Available
      </div>

      <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu */}
            <button
              className="lg:hidden p-2 -ml-2 text-[#0A0A0A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#C9A227]/40 shadow-sm">
                <Image
                  src="/logo-circular.jpg"
                  alt="Gifty's Store"
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-serif text-lg font-semibold tracking-wide text-[#0A0A0A]">
                  Gifty&apos;s Store
                </div>
                <div className="text-[10px] text-[#8A7F72] tracking-[0.2em] uppercase">
                  Carry Elegance, Always.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm font-medium text-[#0A0A0A] hover:text-[#C9A227] transition-colors tracking-wide"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-3 sm:gap-5">
              <Link href="/wishlist" className="relative p-1.5 hover:text-[#C9A227] transition-colors" aria-label="Wishlist">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C9A227] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <button onClick={() => setIsOpen(true)} className="relative p-1.5 hover:text-[#C9A227] transition-colors" aria-label="Cart">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C9A227] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-[#E8E0D5] bg-[#FAF7F2]">
              <nav className="flex flex-col px-4 py-4 gap-1">
                {["/", "/shop", "/about", "/contact"].map((href, i) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-sm font-medium border-b border-[#E8E0D5]/60 hover:text-[#C9A227]"
                  >
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
