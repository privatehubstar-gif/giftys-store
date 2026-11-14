import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#C9A227] rounded-full flex items-center justify-center">
                <span className="text-[#0A0A0A] font-serif text-lg font-bold">GS</span>
              </div>
              <span className="font-serif text-xl">Gifty&apos;s Store</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Carry Elegance, Always. Premium handbags & fashion accessories for the modern Nigerian woman.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-[#C9A227]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/shop" className="hover:text-white">Shop All</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-[#C9A227]">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Lekki, Lagos, Nigeria</li>
              <li><a href="http://wa.me/2348140138396" className="hover:text-white">+234 814 013 8396</a></li>
              <li><a href="https://instagram.com/giftys.store" className="hover:text-white">@giftys.store</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-[#C9A227]">We Accept</h4>
            <div className="flex gap-2 text-xs text-gray-500">
              <span className="bg-white/10 px-2 py-1 rounded">Paystack</span>
              <span className="bg-white/10 px-2 py-1 rounded">Transfer</span>
              <span className="bg-white/10 px-2 py-1 rounded">POD</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Gifty&apos;s Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
