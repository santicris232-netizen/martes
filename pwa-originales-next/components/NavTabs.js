import Link from "next/link";

export default function NavTabs() {
  return (
    <nav>
      <Link href="/">Pestaña 1: Atlas</Link>
      <Link href="/objeto">Pestaña 2: Objeto</Link>
    </nav>
  );
}
