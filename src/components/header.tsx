import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <br />
      <Link href="/products">Products</Link>
    </header>
  );
}
