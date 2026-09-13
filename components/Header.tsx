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
        <Link href="/" className="flex flex-col justify-center">
          <Image
            src="/logo-wordmark.png"
            alt="Platform Hub"
            width={1705}
            height={210}
            priority
            style={{ height: "48px", width: "auto" }}
          />
          <span className="mt-1 text-[11px] font-medium tracking-wide text-brand-gray">
            Discover. Compare. Choose Better.
          </span>
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
