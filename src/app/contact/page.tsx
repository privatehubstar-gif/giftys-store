"use client";

import { useState } from "react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, LOCATION, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

const faqs = [
  { q: "Delivery", a: "We deliver nationwide. The delivery fee depends on where you are, so message us on WhatsApp with your address and we'll confirm the cost before you pay." },
  { q: "Returns", a: "Contact us within 48 hours of delivery for any issue. Items must be unused with tags." },
  { q: "Payment", a: "Paystack (card / transfer), bank transfer, or pay on delivery (Lagos only)." },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Opens WhatsApp with the message filled in, so it really reaches the store.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Gifty's Store, my name is ${name}.\n\n${message}\n\nMy number: ${phone}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="text-center mb-14">
        <p className="eyebrow mb-3">Get in touch</p>
        <h1 className="font-display text-4xl sm:text-5xl mb-4">Contact us</h1>
        <p className="text-muted">Questions about a bag, an order or delivery? We&apos;d love to help.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-10">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-line p-6 bg-white">
              <p className="eyebrow mb-2">WhatsApp</p>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-display text-xl hover:text-gold-dark">{WHATSAPP_DISPLAY}</a>
              <p className="text-xs text-muted mt-2">Fastest way to reach us</p>
            </div>
            <div className="border border-line p-6 bg-white">
              <p className="eyebrow mb-2">Instagram</p>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-display text-xl hover:text-gold-dark">@{INSTAGRAM_HANDLE}</a>
              <p className="text-xs text-muted mt-2">New arrivals and styling</p>
            </div>
            <div className="border border-line p-6 bg-white sm:col-span-2">
              <p className="eyebrow mb-2">Location</p>
              <p className="font-display text-xl">{LOCATION}</p>
            </div>
          </div>

          <div id="faq" className="scroll-mt-28">
            <h2 className="font-display text-2xl mb-2">Good to know</h2>
            <div className="border-t border-line mt-4">
              {faqs.map((f) => (
                <details key={f.q} className="border-b border-line group">
                  <summary className="flex items-center justify-between py-4 text-sm tracking-wide">
                    {f.q}
                    <span className="text-lg text-muted group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pb-5 text-sm text-muted leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-2">Send us a message</h2>
          <p className="text-sm text-muted mb-6">This opens WhatsApp with your message ready to send.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="c-name" className="block text-xs tracking-[0.14em] uppercase mb-2">Name</label>
              <input id="c-name" required value={name} onChange={(e) => setName(e.target.value)} className="input" />
            </div>
            <div>
              <label htmlFor="c-phone" className="block text-xs tracking-[0.14em] uppercase mb-2">Phone / WhatsApp</label>
              <input id="c-phone" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="input" />
            </div>
            <div>
              <label htmlFor="c-msg" className="block text-xs tracking-[0.14em] uppercase mb-2">Message</label>
              <textarea id="c-msg" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="input" />
            </div>
            <button type="submit" className="btn btn-dark w-full">Send on WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  );
}
