import "./globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

const inter = Roboto({
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Scott Weaver",
  description: "Software Engineer | Manager | Cat Dad",
  openGraph: {
    firstName: "Scott",
    lastName: "Weaver",
    title: "Software Engineer | Manager | Cat Dad",
    description: "Cool Next.js Projects, Cat Pictures, and More!",
    url: "https://weaverscott.com",
    type: "profile",
    images: [
      {
        url: "https://weaverscott.com/images/ogimage.png",
        alt: "Scott Weaver's Portfolio",
      },
    ],
    siteName: "Scott Weaver's Portfolio",
    countryName: "United States",
    locale: "en_US",
  },
  twitter: {
    images: [
      {
        url: "https://weaverscott.com/images/ogimage.png",
      },
    ],
    site: "https://weaverscott.com",
    card: "summary_large_image",
    title: "Scott Weaver's Portfolio",
    description: "Cool Next.js Projects, Cat Pictures, and More!",
  },
  creator: "Scott Weaver",
  keywords: [
    "Scott Weaver",
    "Software Engineer",
    "Engineering Manager",
    "Cats",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex min-h-screen flex-col">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
