import "./globals.css";
import { Roboto, Raleway } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navbar";

const inter = Raleway({
  subsets: ["latin-ext"],
  weight: "400",
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
    <html lang="en">
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
