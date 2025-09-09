
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Tars Tech - Soluciones digitales para pequeños y medianos comercios",
  description: "Tars Tech es una plataforma para construir y desplegar aplicaciones de comercio electrónico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased overflow-hidden" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
        >
          <Navbar />
          <main className="overflow-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
