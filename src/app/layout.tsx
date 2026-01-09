import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/sections/navbar';
import { buildMetadata } from '@/config/site.config';
import { FooterSection } from '@/components/sections/footer';

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=LINE+Seed+Sans+TH:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-line antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
