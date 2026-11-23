import Link from "next/link";
import { categories } from "@/data/products";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, LOCATION, TIKTOK_HANDLE, TIKTOK_URL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-footer text-white/80 border-t border-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            {/* Plain image (gold version of the logo) so it always shows on the dark footer */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-gold.svg" alt="Gifty's Store" width={310} height={86} className="mb-5 h-[60px] w-auto" />
            <p className="text-sm leading-relaxed text-white/65 max-w-xs">
              Handbags &amp; fashion accessories for the modern woman. Carry Elegance, Always.
            </p>
          </div>

          <div>
            <h4 className="eyebrow eyebrow-gold mb-5">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="hover:text-white">All products</Link></li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/shop?category=${encodeURIComponent(c.name)}`} className="hover:text-white">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow eyebrow-gold mb-5">Help</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white">Our story</Link></li>
              <li><Link href="/contact#faq" className="hover:text-white">Delivery</Link></li>
              <li><Link href="/contact#faq" className="hover:text-white">Returns</Link></li>
              <li><Link href="/contact#faq" className="hover:text-white">Payment options</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow eyebrow-gold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>{LOCATION}</li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Instagram: @{INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  TikTok: @{TIKTOK_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Gifty&apos;s Store. All rights reserved.</p>
          <p className="tracking-wide">Paystack &nbsp;·&nbsp; Bank transfer &nbsp;·&nbsp; Pay on delivery (Lagos)</p>
        </div>
      </div>
    </footer>
  );
}
