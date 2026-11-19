# Gifty's Store

Premium handbags & fashion accessories store built with **Next.js + Tailwind CSS**.

**Tagline:** Carry Elegance, Always.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Admin

- URL: `/admin` (the password is set in `src/app/admin/page.tsx`; change it before going live)

## Adding photos

Every spot that needs a photo shows a placeholder naming the photo it expects.

- Site photos (hero, about, story): `src/data/images.ts`
- Product and category photos: `src/data/products.ts`
- Put image files in `public/images/` and reference them as `/images/your-file.jpg`
- Real products and prices live in `products.ts`. Photos are in `public/images/products/`.

## Features

- Homepage, Shop, Product pages, Cart, Checkout, About, Contact, Wishlist, Admin
- WhatsApp integration
- Mobile-first design
- Brand colours: Ink #161412, Gold #B8935A, Ivory #FAF8F4, Sand #EFE9DF
- Orders and contact messages are sent to the store on WhatsApp

Built for Gifty's Store, Lekki, Lagos, Nigeria.
