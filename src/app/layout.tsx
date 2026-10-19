import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { content } from "@/content";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins"
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair"
});

const siteUrl = content.brand.siteUrl;
export const metadata: Metadata = {
  title: content.brand.name + " | " + content.kit.name,
  description: "Descubra nosso kit de beleza e uma experiência especial de autocuidado. Conheça os detalhes do kit.",
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: content.brand.name + " | Seu ritual de beleza",
    description: "O seu momento de autocuidado merece ser especial.",
    ...(siteUrl ? { url: siteUrl, images: [{ url: "/og-cover.svg", width: 1200, height: 630 }] } : {})
  }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FFFFFF" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable + " " + playfair.variable + " bg-white font-sans text-ink antialiased"}>
        {children}
      </body>
    </html>
  );
}
