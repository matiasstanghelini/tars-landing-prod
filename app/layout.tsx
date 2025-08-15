import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
