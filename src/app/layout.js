import Footer from "@/components/Footer";
import Navbar from "@/components/Nabvar";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/providers/Providers";
import { esMX } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
const source = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "Kalima",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={esMX}>
      <html lang="en">
        <body className={`${source.className} antialiased h-screen `}>
          <Navbar />
          <Providers>{children}</Providers>
          <Toaster />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
