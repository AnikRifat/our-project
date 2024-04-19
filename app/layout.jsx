import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import BottomBanner from "./components/BottomBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Scalify Commerce",
  description: "Ecommerce Brand Expert!",
};

export default function RootLayout({ children}) {
  return (
    <ClerkProvider>
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gray-50">
      <Navbar />
      {children}
      <Footer />
      <BottomBanner />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" async/>
      </body>
    </html>
    </ClerkProvider>
  );
}
