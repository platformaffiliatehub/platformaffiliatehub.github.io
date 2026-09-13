import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-brand-gray">
        <p className="mb-3">
          Platform Hub — Discover. Compare. Choose Better.
        </p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-blue">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-4 text-xs text-gray-400">
          © {new Date().getFullYear()} Platform Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
