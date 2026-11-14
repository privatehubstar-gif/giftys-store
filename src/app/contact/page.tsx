"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="font-serif text-4xl mb-4 text-center">Contact Us</h1>
      <p className="text-center text-gray-500 mb-12">We&apos;d love to hear from you</p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-xl mb-3 text-[#C9A227]">WhatsApp</h3>
            <a href="http://wa.me/2348140138396" className="text-lg hover:underline">+234 814 013 8396</a>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-3 text-[#C9A227]">Instagram</h3>
            <a href="https://instagram.com/giftys.store" className="text-lg hover:underline">@giftys.store</a>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-3 text-[#C9A227]">Location</h3>
            <p className="text-lg">Lekki, Lagos, Nigeria</p>
          </div>

          <div className="pt-6 border-t">
            <h3 className="font-serif text-xl mb-4">FAQ</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-[#0A0A0A]">Delivery</p>
                <p>Free in Lekki on orders above ₦100,000. Nationwide available (Lagos ₦2,500, Abuja/PH ₦3,500, Other states ₦4,500).</p>
              </div>
              <div>
                <p className="font-medium text-[#0A0A0A]">Returns</p>
                <p>Contact us within 48 hours of delivery for any issues. Items must be unused with tags.</p>
              </div>
              <div>
                <p className="font-medium text-[#0A0A0A]">Payment</p>
                <p>Paystack (Card/Transfer), Bank Transfer, or Pay on Delivery (Lagos only).</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="bg-[#F5F0E8] p-8 rounded-lg text-center">
              <p className="text-lg font-medium mb-2">Message sent!</p>
              <p className="text-gray-600 text-sm">We&apos;ll get back to you shortly via WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1.5">Name</label>
                <input required className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A227]" />
              </div>
              <div>
                <label className="block text-sm mb-1.5">Phone / WhatsApp</label>
                <input required type="tel" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A227]" />
              </div>
              <div>
                <label className="block text-sm mb-1.5">Message</label>
                <textarea required rows={5} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A227]" />
              </div>
              <button type="submit" className="w-full bg-[#0A0A0A] text-white py-3.5 text-sm tracking-wider uppercase hover:bg-[#C9A227]">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
