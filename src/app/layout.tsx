import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Montpackers Guest Experience | Concierge Digital para Hoteles",
  description:
    "Concierge digital en tótem interactivo para hoteles. Centraliza información, mejora la experiencia del huésped y optimiza tu recepción. Desde 249€/mes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
