import type { Metadata } from "next";
import Script from "next/script"; // Import the Script component
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
  // IMPORTANT: Replace 'YOUR_GA_MEASUREMENT_ID' with your actual Google Analytics Measurement ID
  const GA_MEASUREMENT_ID = "G-LJHK08DGWK";

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true} // Added to help with browser extension related hydration issues
      >
        {/* Google Analytics (gtag.js) - Global site tag */}
        {/* Ensure GA_MEASUREMENT_ID is replaced with your actual ID */}
        {GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-LJHK08DGWK" && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        {/* End Google Analytics */}

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
