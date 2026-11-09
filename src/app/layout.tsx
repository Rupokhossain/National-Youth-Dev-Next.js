// src/app/layout.tsx
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import { InstituteProvider } from "@/context/InstituteContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-[#F8FAFC] text-slate-800 antialiased min-h-screen flex flex-col justify-between">
        <InstituteProvider>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </InstituteProvider>
      </body>
    </html>
  );
}
