export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="mb-6 text-3xl font-bold text-brand-navy">About Platform Hub</h1>
      <div className="space-y-4 text-[1.05rem] leading-relaxed text-gray-700">
        <p>
          Platform Hub is an independent site focused on practical buyer's guides —
          budgeting apps, health devices, skincare routines, and more — written to help
          people make informed decisions without wading through marketing fluff.
        </p>
        <p>
          We're a small, newly-launched operation. Our goal is straightforward: research
          a category, explain what actually matters when choosing within it, and be
          upfront about how the site is supported financially.
        </p>
        <p>
          Platform Hub participates in affiliate programs, which means we may earn a
          commission when you buy something through a link on this site, at no extra cost
          to you. Full details are on our{" "}
          <a href="/affiliate-disclosure" className="text-brand-blue hover:underline">
            Affiliate Disclosure
          </a>{" "}
          page. This doesn't change what we choose to write about — our recommendations
          are based on our own research, not on which program pays best.
        </p>
        <p>
          Have a question, a correction, or a topic you'd like us to cover? Reach out via
          the{" "}
          <a href="/contact" className="text-brand-blue hover:underline">
            Contact
          </a>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
