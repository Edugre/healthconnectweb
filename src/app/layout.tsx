import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import MedicBridgesNav from "@/components/MedicBridgesNav";

export const metadata: Metadata = {
  title: "MedicBridges – Affordable Care in Miami",
  description:
    "MedicBridges connects uninsured and underinsured Miami residents with free and sliding-scale clinics, pharmacies, and mental health services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <MedicBridgesNav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
