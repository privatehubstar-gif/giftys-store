"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  return (
    <>
      <div className="bg-topbar text-gold-light text-center text-[11px] sm:text-xs py-2.5 px-4 tracking-[0.12em] uppercase">
        Free delivery in Lekki on orders above ₦100,000 &nbsp;·&nbsp; Nationwide delivery available
      </div>

      <header className="sticky top-0 z-50 bg-header backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[76px] sm:h-24">
            {/* Left: menu button (mobile) / links (desktop) */}
            <div className="flex items-center">
              <button
                className="lg:hidden p-2 -ml-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
                </svg>
              </button>
              <nav className="hidden lg:flex items-center gap-9">
                {links.slice(0, 2).map((l) => (
                  <Link key={l.href} href={l.href} className="text-[13px] tracking-[0.14em] uppercase hover:text-gold-dark transition-colors">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Centre: logo */}
            <Link href="/" aria-label="Gifty's Store home" className="justify-self-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-header.svg" alt="Gifty's Store" width={310} height={86} className="h-[52px] sm:h-[68px] w-auto" />
            </Link>

            {/* Right: links (desktop) + icons */}
            <div className="flex items-center justify-end gap-1 sm:gap-2">
              <nav className="hidden lg:flex items-center gap-9 mr-6">
                {links.slice(2).map((l) => (
                  <Link key={l.href} href={l.href} className="text-[13px] tracking-[0.14em] uppercase hover:text-gold-dark transition-colors">
                    {l.label}
                  </Link>
                ))}
              </nav>
              <Link href="/wishlist" className="relative p-2 hover:text-gold-dark transition-colors" aria-label="Wishlist">
                <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute top-0.5 right-0 bg-gold text-white text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center">{wishlistCount}</span>
                )}
              </Link>
              <button onClick={() => setIsOpen(true)} className="relative p-2 hover:text-gold-dark transition-colors" aria-label="Open cart">
                <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M6.5 8.5h11l1 11a1 1 0 01-1 1h-12a1 1 0 01-1-1l1-11zM9 8.5V7a3 3 0 016 0v1.5" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute top-0.5 right-0 bg-ink text-white text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center">{totalItems}</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gold/30 bg-champagne">
            <nav className="flex flex-col px-4 py-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-sm tracking-[0.14em] uppercase border-b border-gold/25 last:border-b-0"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
