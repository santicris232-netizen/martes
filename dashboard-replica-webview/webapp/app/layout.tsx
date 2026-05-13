import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashboard Replica Potter",
  description: "MVP con login, registro y paneles usando Supabase"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="wrap">
          <header className="top">
            <h1>Dashboard Replica Potter</h1>
            <nav>
              <Link href="/">MVP</Link>
              <Link href="/login">LogIn</Link>
              <Link href="/registro">Registro</Link>
              <Link href="/panel-usuario">Panel Usuario</Link>
              <Link href="/panel-admin">Panel Administrativo</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
