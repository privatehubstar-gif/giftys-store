"use client";

import { useState, useEffect } from "react";
import { products as initialProducts, Product, formatPrice } from "@/data/products";

const ADMIN_PASSWORD = "giftys2024";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [productList, setProductList] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("giftys-products");
    if (saved) {
      try { setProductList(JSON.parse(saved)); } catch { setProductList(initialProducts); }
    } else {
      setProductList(initialProducts);
    }
  }, []);

  const saveProducts = (list: Product[]) => {
    setProductList(list);
    localStorage.setItem("giftys-products", JSON.stringify(list));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) setAuthenticated(true);
    else alert("Wrong password");
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this product?")) {
      saveProducts(productList.filter((p) => p.id !== id));
    }
  };

  if (!authenticated) {
    return (
      <div className="max-w-sm mx-auto px-4 py-20">
        <h1 className="font-serif text-2xl mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A227]" />
          <button type="submit" className="w-full bg-[#0A0A0A] text-white py-3 text-sm tracking-wider uppercase">Login</button>
        </form>
        <p className="text-xs text-gray-400 text-center mt-4">Password: giftys2024</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl">Admin — Products</h1>
        <button onClick={() => { setEditing(null); setShowForm(true); }} className="bg-[#C9A227] text-[#0A0A0A] px-5 py-2.5 text-sm tracking-wider uppercase font-medium">+ Add Product</button>
      </div>

      {showForm && (
        <div className="bg-[#F5F0E8] p-6 rounded-lg mb-8">
          <h2 className="font-medium mb-4">{editing ? "Edit Product" : "New Product"}</h2>
          <p className="text-sm text-gray-500 mb-4">For a full admin experience, products are currently managed via the code / localStorage. In a real production setup we would connect this to a database or CMS.</p>
          <button onClick={() => setShowForm(false)} className="text-sm text-gray-500 hover:underline">Close</button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-gray-500">
              <th className="py-3 pr-4">Name</th>
              <th className="py-3 pr-4">Category</th>
              <th className="py-3 pr-4">Price</th>
              <th className="py-3 pr-4">Stock</th>
              <th className="py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((p) => (
              <tr key={p.id} className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">{p.name}</td>
                <td className="py-3 pr-4 text-gray-500">{p.category}</td>
                <td className="py-3 pr-4">{formatPrice(p.price)}</td>
                <td className="py-3 pr-4">{p.stock}</td>
                <td className="py-3">
                  <button onClick={() => handleDelete(p.id)} className="text-red-500 text-xs hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-6">Note: Changes are stored in browser localStorage for this demo. For permanent storage we can connect a real database later.</p>
    </div>
  );
}
