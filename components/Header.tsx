import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="flex w-full flex-wrap items-center justify-between gap-4 px-6 py-3 sm:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.png"
            alt="Platform Hub — Discover. Compare. Choose Better."
            width={1519}
            height={280}
            priority
            style={{ height: "72px", width: "auto" }}
          />
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-brand-navy">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-blue">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
