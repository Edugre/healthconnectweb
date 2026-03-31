import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import MediBridgeNav from "@/components/MediBridgeNav";

export const metadata: Metadata = {
  title: "MediBridge – Affordable Care in Miami",
  description:
    "MediBridge connects uninsured and underinsured Miami residents with free and sliding-scale clinics, pharmacies, and mental health services.",
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
          <MediBridgeNav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
