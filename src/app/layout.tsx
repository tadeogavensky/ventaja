import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import HideNavbar from "@/components/HideNavbar";
import { FormProvider } from "@/providers/FormProvider";
import PlanProvider from "@/providers/PlanProvider";

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
      <body className={inter.className}>
        <AuthProvider>
          <FormProvider>
            <PlanProvider>
              <HideNavbar>
                <Navbar />
              </HideNavbar>
              {children}
            </PlanProvider>
          </FormProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
