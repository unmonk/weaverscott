import "./globals.css";
import { Roboto, Raleway, Jost } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";

const inter = Jost({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Scott Weaver",
  description: "Software Engineer | Manager | Cat Dad",
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
