import type { Metadata } from "next";
import { Baloo_Da_2, Berkshire_Swash, Ubuntu } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import Footer from "@/src/components/Footer";

const balooDa2 = Baloo_Da_2({
  variable: "--font-baloo-da-2",
  subsets: ["latin"],
  display: "swap",
});

const berkshireSwash = Berkshire_Swash({
  weight: "400",
  variable: "--font-berkshire-swash",
  subsets: ["latin"],
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sun Wellness Acupuncture",
  description: "Chinese Acupuncture and Herbal Clinic",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${balooDa2.variable} ${berkshireSwash.variable} ${ubuntu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
