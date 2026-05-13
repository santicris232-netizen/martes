import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

export const metadata: Metadata = {
  title: "Originales Potter PWA",
  description: "PWA original con personajes de PotterDB",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icons/icon-192.svg",
    apple: "/icons/icon-192.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#083344"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ServiceWorkerRegister />
        <header className="topbar">
          <h1>Originales Potter</h1>
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/pestana-1">Pestana 1</Link>
            <Link href="/pestana-2">Pestana 2</Link>
            <Link href="/objeto">Objeto</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
