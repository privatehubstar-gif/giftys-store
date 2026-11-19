"use client";

import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/data/products";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-[60]" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-display text-xl">Your Cart ({totalItems})</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Close cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <button onClick={() => setIsOpen(false)} className="btn btn-dark">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}`} className="flex gap-4">
                  <div className="relative w-20 h-24 bg-sand rounded overflow-hidden shrink-0">
                    <ImageSlot src={item.product.images[0]} alt={item.product.name} label="Photo" className="w-full h-full" sizes="80px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{item.product.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Color: {item.selectedColor}</p>
                    <p className="text-sm font-medium mt-1">{formatPrice(item.product.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-gray-200">
                        <button onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-sm">−</button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-sm">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id, item.selectedColor)} className="text-xs text-gray-400 hover:text-red-500">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <Link href="/checkout" onClick={() => setIsOpen(false)} className="btn btn-dark w-full">Checkout</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
