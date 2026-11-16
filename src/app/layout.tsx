import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageLoader from "@/components/PageLoader";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gifty's Store | Luxury Handbags & Fashion Accessories in Lekki, Lagos",
  description:
    "Premium handbags and fashion accessories for the modern woman. Carry Elegance, Always. Free delivery in Lekki on orders above ₦100,000.",
  keywords:
    "handbags, fashion accessories, Lekki, Lagos, Nigeria, luxury bags, tote bags, clutches, Gifty's Store",
  openGraph: {
    title: "Gifty's Store | Carry Elegance, Always.",
    description:
      "Premium Handbags & Fashion Accessories for the Modern Woman in Lekki, Lagos.",
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
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <CartProvider>
          <WishlistProvider>
            <PageLoader />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <CartDrawer />
            <WhatsAppButton />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
