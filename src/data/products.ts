/**
 * PRODUCTS
 * --------
 * Real products from Gifty's Store, with real prices (₦) and photos.
 * Photos live in /public/images/products and are listed in `images`.
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
    images: ["/images/products/structured-six-colour-bag.jpg"],
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
    images: ["/images/products/butterfly-mini-bag.jpg"],
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
    images: ["/images/products/turn-lock-top-handle-bag.jpg"],
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
    images: ["/images/products/gold-pyramid-monogram-tote.jpg"],
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
    images: ["/images/products/croc-brown-tote.jpg"],
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
    description: "A soft cream and beige plaid tote with leather-look trim and gold hardware. Spacious and easy to dress up or down.",
    material: "Plaid fabric with faux leather trim",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/products/cream-plaid-tote.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: false,
    isNewArrival: true,
    slug: "cream-plaid-tote",
  },
  {
    id: "7",
    name: "Letter Monogram Tote",
    price: 19000,
    category: "Tote Bags",
    color: "Beige",
    colors: ["Beige"],
    description: "A large monogram tote with bold letter print, sturdy handles and a spacious interior. Perfect for work or travel.",
    material: "Printed canvas/faux leather mix",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/products/letter-monogram-tote.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: true,
    isNewArrival: false,
    slug: "letter-monogram-tote",
  },
  {
    id: "8",
    name: "Black Diamond Tote",
    price: 21000,
    category: "Tote Bags",
    color: "Black",
    colors: ["Black"],
    description: "A sleek black tote with diamond-quilted texture and gold hardware. Structured and elegant for everyday use.",
    material: "Quilted faux leather with gold-tone hardware",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/products/black-diamond-tote.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: true,
    isNewArrival: true,
    slug: "black-diamond-tote",
  },
  {
    id: "9",
    name: "Butterfly Check Tote",
    price: 18500,
    category: "Tote Bags",
    color: "Multi",
    colors: ["Multi"],
    description: "A playful check-pattern tote with butterfly details. Bright, roomy and perfect for casual days.",
    material: "Printed fabric with faux leather accents",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/products/butterfly-check-tote.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: false,
    isNewArrival: true,
    slug: "butterfly-check-tote",
  },
  {
    id: "10",
    name: "Beige Monogram Bag Set",
    price: 25000,
    category: "Bag Sets",
    color: "Beige",
    colors: ["Beige"],
    description: "A matching set of monogram bags in beige – tote plus smaller companion piece. Great as a gift or for coordinated looks.",
    material: "Printed faux leather",
    size: "Message us for exact measurements",
    care: "Wipe clean with a soft damp cloth. Keep away from sharp objects, water and long direct sun.",
    images: ["/images/products/beige-monogram-bag-set.jpg"],
    stock: 10,
    rating: 0,
    reviews: 0,
    isBestSeller: true,
    isNewArrival: true,
    slug: "beige-monogram-bag-set",
  },
];

export const categories = [
  { name: "Top-Handle Bags", slug: "top-handle-bags", image: "/images/products/butterfly-mini-bag.jpg" },
  { name: "Tote Bags", slug: "tote-bags", image: "/images/products/gold-pyramid-monogram-tote.jpg" },
  { name: "Bag Sets", slug: "bag-sets", image: "/images/products/beige-monogram-bag-set.jpg" },
];
