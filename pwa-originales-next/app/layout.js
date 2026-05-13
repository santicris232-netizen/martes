import "./globals.css";

export const metadata = {
  title: "Wizard Atlas PWA",
  description: "PWA original con personajes de Harry Potter",
  applicationName: "Wizard Atlas",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon.svg"
  }
};

export const viewport = {
  themeColor: "#0f3d3e"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
