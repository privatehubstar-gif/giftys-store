"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/data/products";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const deliveryFee = totalPrice >= 100000 ? 0 : 2500;
  const grandTotal = totalPrice + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const id = "GS" + Date.now().toString().slice(-8);
    setOrderId(id);
    setOrderPlaced(true);
    clearCart();
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="text-gray-500 mb-6">Your cart is empty</p>
        <Link href="/shop" className="bg-[#0A0A0A] text-white px-8 py-3 text-sm tracking-wider uppercase">Continue Shopping</Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="font-serif text-3xl mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 mb-2">Order Number: <strong>{orderId}</strong></p>
        <p className="text-sm text-gray-500 mb-8">We&apos;ll confirm your order on WhatsApp shortly.</p>
        <a href={`http://wa.me/2348140138396?text=Hi%20Gifty's%20Store,%20I%20just%20placed%20order%20${orderId}`} className="inline-block bg-[#25D366] text-white px-8 py-3 text-sm tracking-wider uppercase mb-4">Confirm on WhatsApp</a>
        <br />
        <Link href="/shop" className="text-sm text-[#C9A227] hover:underline">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif text-3xl mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-5 gap-10">
        <form onSubmit={handlePlaceOrder} className="lg:col-span-3 space-y-6">
          <div>
            <h2 className="font-medium mb-4">Delivery Details</h2>
            <div className="space-y-4">
              <input required placeholder="Full Name" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A227]" />
              <input required type="tel" placeholder="WhatsApp Number" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A227]" />
              <input required placeholder="Delivery Address" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A227]" />
              <input placeholder="City / Area (e.g. Lekki Phase 1)" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A227]" />
              <textarea placeholder="Additional notes (optional)" rows={2} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A227]" />
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-4">Payment Method</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer">
                <input type="radio" name="payment" defaultChecked className="accent-[#C9A227]" />
                <span className="text-sm">Paystack (Card / Transfer)</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer">
                <input type="radio" name="payment" className="accent-[#C9A227]" />
                <span className="text-sm">Bank Transfer</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer">
                <input type="radio" name="payment" className="accent-[#C9A227]" />
                <span className="text-sm">Pay on Delivery (Lagos only)</span>
              </label>
            </div>
          </div>
          <button type="submit" className="w-full bg-[#0A0A0A] text-white py-4 text-sm tracking-wider uppercase hover:bg-[#C9A227]">Place Order — {formatPrice(grandTotal)}</button>
        </form>

        <div className="lg:col-span-2">
          <div className="bg-[#F5F0E8]/50 rounded-lg p-6 sticky top-24">
            <h2 className="font-medium mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}`} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.product.name} × {item.quantity}</span>
                  <span>{formatPrice(item.product.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Subtotal</span><span>{formatPrice(totalPrice)}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Delivery</span><span>{deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee)}</span></div>
              <div className="flex justify-between font-medium text-base pt-2 border-t"><span>Total</span><span>{formatPrice(grandTotal)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
