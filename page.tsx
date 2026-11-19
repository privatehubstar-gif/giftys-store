"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const priceOptions = [
  { value: "", label: "All prices" },
  { value: "10-30", label: "₦10k – ₦30k" },
  { value: "30-60", label: "₦30k – ₦60k" },
  { value: "60+", label: "₦60k and above" },
];

const colors = ["Black", "Beige", "Brown", "Gold", "Ivory", "Tan", "Camel"];

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const filterParam = searchParams.get("filter") || "";
  const qParam = searchParams.get("q") || "";

  const [sort, setSort] = useState("newest");
  const [priceRange, setPriceRange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedColor, setSelectedColor] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

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
    return result;
  }, [selectedCategory, filterParam, qParam, priceRange, selectedColor, sort]);

  const title = selectedCategory || (filterParam === "new" ? "New arrivals" : filterParam === "bestsellers" ? "Best sellers" : "All products");

  const optionClass = (active: boolean) =>
    `block w-full text-left text-sm py-1.5 transition-colors ${active ? "text-ink font-medium underline underline-offset-4 decoration-gold" : "text-muted hover:text-ink"}`;

  const filters = (
    <div className="space-y-8">
      <div>
        <h3 className="eyebrow mb-3">Category</h3>
        <button onClick={() => setSelectedCategory("")} className={optionClass(!selectedCategory)}>All</button>
        {categories.map((c) => (
          <button key={c.slug} onClick={() => setSelectedCategory(c.name)} className={optionClass(selectedCategory === c.name)}>
            {c.name}
          </button>
        ))}
      </div>
      <div>
        <h3 className="eyebrow mb-3">Price</h3>
        {priceOptions.map((o) => (
          <button key={o.value} onClick={() => setPriceRange(o.value)} className={optionClass(priceRange === o.value)}>
            {o.label}
          </button>
        ))}
      </div>
      <div>
        <h3 className="eyebrow mb-3">Colour</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedColor("")}
            className={`text-xs px-3 py-1.5 border transition-colors ${!selectedColor ? "border-ink bg-ink text-white" : "border-line hover:border-ink"}`}
          >
            All
          </button>
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedColor(c)}
              className={`text-xs px-3 py-1.5 border transition-colors ${selectedColor === c ? "border-ink bg-ink text-white" : "border-line hover:border-ink"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-8 sm:mb-10">
        <p className="eyebrow mb-3">Shop</p>
        <h1 className="font-display text-3xl sm:text-5xl">{title}</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
        <aside className="lg:w-56 shrink-0">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden w-full flex items-center justify-between border border-line px-4 py-3 text-sm tracking-wide"
            aria-expanded={showFilters}
          >
            <span>Filter</span>
            <span className="text-muted">{showFilters ? "Hide" : "Show"}</span>
          </button>
          <div className={`${showFilters ? "block" : "hidden"} lg:block mt-6 lg:mt-0`}>{filters}</div>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
            <p className="text-sm text-muted">{filtered.length} {filtered.length === 1 ? "product" : "products"}</p>
            <label className="flex items-center gap-2 text-sm">
              <span className="text-muted hidden sm:inline">Sort by</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-line bg-white px-3 py-2 text-sm">
                <option value="newest">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </label>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted mb-5">No products match these filters.</p>
              <button
                onClick={() => { setSelectedCategory(""); setPriceRange(""); setSelectedColor(""); }}
                className="btn btn-outline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6">
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
    <Suspense fallback={<div className="py-24 text-center text-muted">Loading…</div>}>
      <ShopContent />
    </Suspense>
  );
}
