export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="mb-6 text-3xl font-bold text-brand-navy">Privacy Policy</h1>
      <div className="space-y-4 text-[1.05rem] leading-relaxed text-gray-700">
        <p>
          This policy explains what information Platform Hub collects and how it's used.
          We keep this simple and limited on purpose.
        </p>
        <h2 className="text-xl font-semibold text-brand-navy">What we collect</h2>
        <p>
          If you use our Contact form, we collect the name, email address, and message you
          provide. We use this only to respond to your inquiry — we don't sell or share it
          with third parties, and we don't add you to any mailing list without your
          separate consent.
        </p>
        <h2 className="text-xl font-semibold text-brand-navy">Affiliate links</h2>
        <p>
          Some links on this site are affiliate links (see our{" "}
          <a href="/affiliate-disclosure" className="text-brand-blue hover:underline">
            Affiliate Disclosure
          </a>
          ). Clicking them may involve the destination site (e.g. Amazon, ClickBank)
          setting their own cookies or tracking parameters, governed by their own privacy
          policies — not ours.
        </p>
        <h2 className="text-xl font-semibold text-brand-navy">Contact</h2>
        <p>
          Questions about this policy can be sent via our{" "}
          <a href="/contact" className="text-brand-blue hover:underline">
            Contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
