import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 border-b">
      {/* <img src="/logo.png" alt="Logo" className="h-8 w-8" /> */}
      <p className="text-xl font-bold">The Society of Women Engineers @ UCSB</p>
      <Link href="/">Home</Link>
      <Link href="/about-us">About</Link>
      <Link href="/events">Events</Link>
      {/* <Link href="/contact">Contact</Link> */}
    </nav>
  );
}