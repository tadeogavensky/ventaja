import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/context/AuthProvider";
import HideNavbar from "@/components/HideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ventaja",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <AuthProvider>
        <body className={inter.className}>
          <HideNavbar>
            <Navbar />
          </HideNavbar>
          <div className=""> {children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
