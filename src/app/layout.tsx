import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import MedicBridgesNav from "@/components/MediBridgeNav";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,400&family=Raleway:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <MedicBridgesNav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
