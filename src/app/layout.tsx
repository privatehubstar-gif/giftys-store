import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gifty's Store | Handbags & Fashion Accessories in Uyo & Lagos",
    template: "%s | Gifty's Store",
  },
  description:
    "Quality handbags and fashion accessories for the modern woman. Carry Elegance, Always. Free delivery in Lekki on orders above ₦100,000, nationwide delivery available.",
  keywords: "handbags, fashion accessories, Uyo, Akwa Ibom, Lagos, Lekki, Nigeria, tote bags, top-handle bags, Gifty's Store",
  openGraph: {
    title: "Gifty's Store | Carry Elegance, Always.",
    description: "Handbags & fashion accessories for the modern woman. Uyo & Lagos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="min-h-[60vh]">{children}</main>
            <Footer />
            <CartDrawer />
            <WhatsAppButton />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
