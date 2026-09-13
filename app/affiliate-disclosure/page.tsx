export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="mb-6 text-3xl font-bold text-brand-navy">Affiliate Disclosure</h1>
      <div className="space-y-4 text-[1.05rem] leading-relaxed text-gray-700">
        <p>
          Platform Hub is a participant in the Amazon Services LLC Associates Program, an
          affiliate advertising program designed to provide a means for sites to earn
          advertising fees by advertising and linking to Amazon.com.
        </p>
        <p>
          We also participate in other affiliate programs, including ClickBank, and may
          add additional partner programs over time. When you click a link on this site
          and make a qualifying purchase, we may earn a commission — at no additional cost
          to you.
        </p>
        <p>
          These commissions help support the research and writing that goes into our
          content. They do not influence which products or categories we choose to cover;
          our recommendations are based on our own research and editorial judgment, not on
          which program pays the highest commission.
        </p>
        <p>
          If you have any questions about our affiliate relationships, feel free to{" "}
          <a href="/contact" className="text-brand-blue hover:underline">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
