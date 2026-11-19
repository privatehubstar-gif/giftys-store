"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/data/products";
import { whatsappLink } from "@/lib/site";

const paymentOptions = ["Bank transfer", "Card / Paystack payment link", "Pay on delivery (Lagos only)"];

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  const [form, setForm] = useState({ name: "", phone: "", address: "", area: "", notes: "", payment: paymentOptions[0] });
  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const freeDelivery = totalPrice >= 100000;

  // The order is sent to the store on WhatsApp, where it is confirmed and payment is arranged.
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = items.map(
      (i) => `• ${i.product.name} (${i.selectedColor}) x${i.quantity}: ${formatPrice(i.product.price * i.quantity)}`
    );
    const text = [
      "Hello Gifty's Store, I'd like to place an order:",
      "",
      ...lines,
      "",
      `Subtotal: ${formatPrice(totalPrice)}`,
      `Delivery: ${freeDelivery ? "Free (Lekki)" : "to be confirmed"}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}${form.area ? `, ${form.area}` : ""}`,
      `Payment: ${form.payment}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ]
      .filter((l, i, arr) => !(l === "" && arr[i - 1] === ""))
      .join("\n");
    const url = whatsappLink(text);
    setWaUrl(url);
    setSent(true);
    clearCart();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (sent) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 sm:py-28 text-center">
        <div className="w-14 h-14 border border-gold rounded-full flex items-center justify-center mx-auto mb-7">
          <svg className="w-6 h-6 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="font-display text-3xl mb-3">Almost done</h1>
        <p className="text-muted mb-8 leading-relaxed">
          Your order details are ready in WhatsApp. Press <strong className="text-ink">Send</strong> there so we can confirm your order and arrange payment and delivery.
        </p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold mb-5">Open WhatsApp again</a>
        <div>
          <Link href="/shop" className="text-sm underline underline-offset-4 hover:text-gold-dark">Continue shopping</Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-3xl mb-3">Your cart is empty</h1>
        <p className="text-muted mb-8">Add a bag you love and come back here to order.</p>
        <Link href="/shop" className="btn btn-dark">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="font-display text-3xl sm:text-4xl mb-10">Checkout</h1>
      <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
        <form onSubmit={handlePlaceOrder} className="lg:col-span-3 space-y-10">
          <div>
            <h2 className="font-display text-xl mb-5">Delivery details</h2>
            <div className="space-y-4">
              <input required placeholder="Full name" value={form.name} onChange={(e) => update("name", e.target.value)} className="input" />
              <input required type="tel" placeholder="WhatsApp number" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input" />
              <input required placeholder="Delivery address" value={form.address} onChange={(e) => update("address", e.target.value)} className="input" />
              <input placeholder="City / area (e.g. Lekki Phase 1)" value={form.area} onChange={(e) => update("area", e.target.value)} className="input" />
              <textarea placeholder="Notes (optional)" rows={2} value={form.notes} onChange={(e) => update("notes", e.target.value)} className="input" />
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl mb-5">How would you like to pay?</h2>
            <div className="space-y-2">
              {paymentOptions.map((o) => (
                <label key={o} className={`flex items-center gap-3 p-4 border cursor-pointer text-sm transition-colors ${form.payment === o ? "border-ink bg-white" : "border-line"}`}>
                  <input type="radio" name="payment" checked={form.payment === o} onChange={() => update("payment", o)} className="accent-[#161412]" />
                  {o}
                </label>
              ))}
            </div>
            <p className="text-xs text-muted mt-3">You won&apos;t pay on this page. We confirm your order on WhatsApp and send payment details.</p>
          </div>

          <button type="submit" className="btn btn-dark btn-lg w-full">Send order on WhatsApp</button>
        </form>

        <div className="lg:col-span-2">
          <div className="bg-sand p-6 sm:p-7 lg:sticky lg:top-28">
            <h2 className="font-display text-xl mb-5">Order summary</h2>
            <div className="space-y-3 mb-5">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}`} className="flex justify-between gap-4 text-sm">
                  <span className="text-muted">{item.product.name} <span className="text-xs">({item.selectedColor})</span> × {item.quantity}</span>
                  <span className="shrink-0">{formatPrice(item.product.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-ink/10 pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted">Subtotal</span><span>{formatPrice(totalPrice)}</span></div>
              <div className="flex justify-between">
                <span className="text-muted">Delivery</span>
                <span>{freeDelivery ? "Free in Lekki" : "Confirmed on WhatsApp"}</span>
              </div>
              {!freeDelivery && <p className="text-xs text-muted">Lagos from ₦2,500. Free in Lekki on orders above ₦100,000.</p>}
              <div className="flex justify-between text-base font-medium pt-3 border-t border-ink/10"><span>Total</span><span>{formatPrice(totalPrice)}{freeDelivery ? "" : " + delivery"}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
