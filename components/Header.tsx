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
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Platform Hub"
            width={220}
            height={64}
            priority
            style={{ height: "40px", width: "auto" }}
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
