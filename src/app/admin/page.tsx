"use client";

import { useState, useEffect } from "react";
import { products as initialProducts, Product, formatPrice } from "@/data/products";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [checking, setChecking] = useState(false);
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

  // The password is checked on the server (see /api/admin-login), not in the browser.
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setChecking(true);
    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setAuthenticated(true);
      } else if (res.status === 503) {
        setLoginError("Admin login is not switched on yet. Add ADMIN_PASSWORD in Vercel, then redeploy.");
      } else {
        setLoginError("Wrong password");
      }
    } catch {
      setLoginError("Could not check the password. Please try again.");
    } finally {
      setChecking(false);
    }
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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            className="w-full border border-gray-200 bg-white rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#B8935A]"
          />
          {loginError && <p className="text-sm text-red-600" role="alert">{loginError}</p>}
          <button type="submit" disabled={checking || password.length === 0} className="w-full bg-[#161412] text-white py-3 text-sm tracking-wider uppercase disabled:opacity-50">
            {checking ? "Checking..." : "Login"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl">Admin — Products</h1>
        <button onClick={() => { setEditing(null); setShowForm(true); }} className="bg-[#B8935A] text-[#161412] px-5 py-2.5 text-sm tracking-wider uppercase font-medium">+ Add Product</button>
      </div>

      {showForm && (
        <div className="bg-[#EFE9DF] p-6 rounded-lg mb-8">
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
