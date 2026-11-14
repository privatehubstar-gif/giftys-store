"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const filterParam = searchParams.get("filter") || "";
  const qParam = searchParams.get("q") || "";

  const [sort, setSort] = useState("newest");
  const [priceRange, setPriceRange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedColor, setSelectedColor] = useState("");

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory) {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }
    if (filterParam === "new") result = result.filter((p) => p.isNewArrival);
    else if (filterParam === "bestsellers") result = result.filter((p) => p.isBestSeller);
    if (qParam) {
      const q = qParam.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (priceRange === "10-30") result = result.filter((p) => p.price >= 10000 && p.price < 30000);
    else if (priceRange === "30-60") result = result.filter((p) => p.price >= 30000 && p.price < 60000);
    else if (priceRange === "60+") result = result.filter((p) => p.price >= 60000);
    if (selectedColor) result = result.filter((p) => p.colors.some((c) => c.toLowerCase() === selectedColor.toLowerCase()));
    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") result.sort((a, b) => b.price - a.price);
    else if (sort === "bestselling") result.sort((a, b) => b.reviews - a.reviews);
    return result;
  }, [selectedCategory, filterParam, qParam, priceRange, selectedColor, sort]);

  const colors = ["Black", "Beige", "Brown", "Gold", "Ivory", "Tan", "Camel"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl mb-2">Shop</h1>
        <p className="text-gray-500 text-sm">Premium handbags & accessories</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-56 shrink-0 space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Category</h3>
            <div className="space-y-1">
              <button onClick={() => setSelectedCategory("")} className={`block text-sm w-full text-left py-1.5 ${!selectedCategory ? "text-[#C9A227]" : "text-gray-600"}`}>All</button>
              {categories.map((c) => (
                <button key={c.slug} onClick={() => setSelectedCategory(c.name)} className={`block text-sm w-full text-left py-1.5 ${selectedCategory === c.name ? "text-[#C9A227]" : "text-gray-600"}`}>{c.name}</button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Price</h3>
            <div className="space-y-1">
              {[{"": "All"}, {"10-30": "₦10k – ₦30k"}, {"30-60": "₦30k – ₦60k"}, {"60+": "₦60k+"}].map((item) => {
                const [val, label] = Object.entries(item)[0];
                return <button key={val} onClick={() => setPriceRange(val)} className={`block text-sm w-full text-left py-1.5 ${priceRange === val ? "text-[#C9A227]" : "text-gray-600"}`}>{label}</button>;
              })}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setSelectedColor("")} className={`text-xs px-3 py-1.5 border rounded-full ${!selectedColor ? "border-[#C9A227] text-[#C9A227]" : "border-gray-200"}`}>All</button>
              {colors.map((c) => (
                <button key={c} onClick={() => setSelectedColor(c)} className={`text-xs px-3 py-1.5 border rounded-full ${selectedColor === c ? "border-[#C9A227] text-[#C9A227]" : "border-gray-200"}`}>{c}</button>
              ))}
            </div>
          </div>
        </aside>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">{filtered.length} products</p>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="text-sm border border-gray-200 rounded px-3 py-2">
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="bestselling">Best Selling</option>
            </select>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-500">No products found</div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
