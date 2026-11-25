/**
 * PRODUCTS
 * --------
 * Real products from Gifty's Store, with real prices (₦) and photos.
 * Photos live in /public/images and are listed in `images`.
 *
 * Still to confirm with the store owner: stock counts (set to 10 for now),
 * exact sizes (where it says "Message us"), and which bags are best sellers.
 * `rating` and `reviews` are not shown anywhere on the site.
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  color: string;
  colors: string[];
  description: string;
  material: string;
  size: string;
  care: string;
  images: string[];
  stock: number;
  rating: number;
  reviews: number;
  isBestSeller: boolean;
  isNewArrival: boolean;
  slug: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Structured Croc-Texture Handbag",
    price: 22000,
    category: "Top-Handle Bags",
    color: "Brown",
    colors: ["Brown", "Black", "Green", "Red", "White", "Orange"],
    description: "A smart, structured handbag with a croc-texture finish, a front flap with a hanging tag, and two sturdy top handles. Roomy enough for your phone, purse and daily essentials. Comes in six colours.",
    material: "Faux leather with a croc-texture finish, silver-tone detail",
    size: "31cm x 12cm x 23cm",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/structured-six-colour-bag.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: true,
    isNewArrival: true,
    slug: "structured-croc-texture-handbag",
  },
  {
    id: "2",
    name: "Butterfly Charm Mini Bag",
    price: 17000,
    category: "Top-Handle Bags",
    color: "Black",
    colors: ["Black", "White", "Pink", "Nude", "Tan", "Burgundy", "Forest Green", "Taupe"],
    description: "A small, light top-handle bag with gold butterfly charms on the handles and a zip-top opening. Comes with a detachable shoulder strap, so you can carry it by hand or wear it crossbody. Eight colours to choose from.",
    material: "Smooth faux leather with gold-tone butterfly hardware",
    size: "24cm x 14cm x 8cm (about 0.37kg)",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/butterfly-mini-bag.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: true,
    isNewArrival: true,
    slug: "butterfly-charm-mini-bag",
  },
  {
    id: "3",
    name: "Turn-Lock Top-Handle Bag (Big Size)",
    price: 18000,
    category: "Top-Handle Bags",
    color: "Brown",
    colors: ["Brown", "Black", "Yellow", "Lilac", "Burgundy", "White", "Denim Blue"],
    description: "Classic flap bag with a gold turn-lock clasp and a short top handle. This is the big size, with room for more than the everyday basics. Arrives in its own gift box. Seven colours.",
    material: "Textured faux leather with gold-tone turn-lock",
    size: "Big size. Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/turn-lock-top-handle-bag.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: true,
    isNewArrival: false,
    slug: "turn-lock-top-handle-bag",
  },
  {
    id: "4",
    name: "Brown Monogram Tote",
    price: 19000,
    category: "Tote Bags",
    color: "Brown",
    colors: ["Brown"],
    description: "A bold printed tote with a dark brown trim, gold pyramid hardware on the handles, and a detachable shoulder strap. Wide opening and plenty of space for work or a day out.",
    material: "Printed faux leather with gold-tone hardware",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/gold-pyramid-monogram-tote.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: true,
    isNewArrival: true,
    slug: "brown-monogram-tote",
  },
  {
    id: "5",
    name: "Glossy Croc Brown Tote",
    price: 20000,
    category: "Tote Bags",
    color: "Brown",
    colors: ["Brown"],
    description: "A rich brown tote with a glossy croc-style finish, gold and black buckle detail and contrast stitching. Two top handles plus a detachable shoulder strap. A bag that stands out in any outfit.",
    material: "Glossy croc-embossed faux leather with gold-tone hardware",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/croc-brown-tote.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: false,
    isNewArrival: true,
    slug: "glossy-croc-brown-tote",
  },
  {
    id: "6",
    name: "Cream Plaid Tote",
    price: 18000,
    category: "Tote Bags",
    color: "Cream",
    colors: ["Cream"],
    description: "A light, easy tote in a cream plaid print with a green and red centre stripe and tan leather-look handles. Includes a hanging charm and a detachable shoulder strap.",
    material: "Plaid-print fabric with faux leather trim and gold-tone plate",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/cream-plaid-tote.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: false,
    isNewArrival: true,
    slug: "cream-plaid-tote",
  },
  {
    id: "7",
    name: "Black Diamond Print Tote",
    price: 17000,
    category: "Tote Bags",
    color: "Black",
    colors: ["Black"],
    description: "A neat black tote with a soft grey-blue diamond pattern, round gold-capped handles and a half-moon front flap. Comes with a long detachable strap for hands-free wear.",
    material: "Printed faux leather with gold-tone handle caps",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/black-diamond-tote.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: false,
    isNewArrival: false,
    slug: "black-diamond-print-tote",
  },
  {
    id: "8",
    name: "Brown Letter Print Tote",
    price: 17000,
    category: "Tote Bags",
    color: "Brown",
    colors: ["Brown"],
    description: "A deep brown tote covered in a gold letter print, with black leather-look handles, a gold front plate and a centre seam. Spacious inside and comes with a detachable strap.",
    material: "Printed faux leather with gold-tone plate",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/letter-monogram-tote.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: false,
    isNewArrival: false,
    slug: "brown-letter-print-tote",
  },
  {
    id: "9",
    name: "Beige Monogram Tote with Clutch",
    price: 17000,
    category: "Bag Sets",
    color: "Beige",
    colors: ["Beige"],
    description: "Two pieces in one. A beige diamond-print tote with a red lining and gold pyramid hardware, plus a matching envelope clutch with a gold snap. Comes with a red strap.",
    material: "Printed faux leather, red lining, gold-tone hardware",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/beige-monogram-bag-set.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: true,
    isNewArrival: true,
    slug: "beige-monogram-tote-with-clutch",
  },
  {
    id: "10",
    name: "Beige Check Tote with Butterfly Charm",
    price: 17000,
    category: "Tote Bags",
    color: "Beige",
    colors: ["Beige"],
    description: "A soft beige check-pattern tote with taupe handles, a gold front plate and a large butterfly charm on a chain. Comes with a detachable shoulder strap.",
    material: "Printed fabric-look faux leather with taupe trim and gold-tone plate",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/butterfly-check-tote.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: false,
    isNewArrival: true,
    slug: "beige-check-tote-butterfly-charm",
  },
];

export const categories = [
  { name: "Top-Handle Bags", slug: "top-handle-bags", image: "/images/turn-lock-top-handle-bag.jpg" },
  { name: "Tote Bags", slug: "tote-bags", image: "/images/cream-plaid-tote.jpg" },
  { name: "Bag Sets", slug: "bag-sets", image: "/images/beige-monogram-bag-set.jpg" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function formatPrice(price: number): string {
  return `₦${price.toLocaleString("en-NG")}`;
}
