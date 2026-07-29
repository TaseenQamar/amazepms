import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import FloatingUI from "@/components/FloatingUI";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amaze PMS | Integrated Facility Management, Reimagined",
  description:
    "Amaze Property Management Solutions delivers premium, in-house Security, Housekeeping, MEP, Pest Control, Landscaping and Parking Management services across PAN India.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-mist text-ink">
        <SmoothScrollProvider>
          <Navbar />
          <FloatingUI />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
