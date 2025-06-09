import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileSidebarProvider } from "@/contexts/MobileSidebarContext";
import { GlobalMobileNav } from "@/components/layout/GlobalMobileNav";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "SGPA To Percentage Calculator",
  description:
    "A collection of useful calculators for students: SGPA, CGPA, Percentage, GPA, Weighted Grades, and Total Marks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LJHK08DGWK"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LJHK08DGWK');
      `,
          }}
        />

        <MobileSidebarProvider>
          <Navbar />
          <GlobalMobileNav />{" "}
          {/* This will be the sidebar for main navigation links on mobile */}
          <main className="flex-grow w-full flex flex-col">
            <div className="p-4 w-full flex-grow flex flex-col">{children}</div>
          </main>
          <Footer />
          <Toaster />
        </MobileSidebarProvider>
      </body>
    </html>
  );
}
