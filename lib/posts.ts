export const CONTENT_TYPES = ["Guide", "Review", "Comparison", "Informational"] as const;
export type ContentType = (typeof CONTENT_TYPES)[number];

export interface Post {
  slug: string;
  title: string;
  niche: string;
  type: ContentType;
  summary: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "budgeting-app-checklist",
    title: "5 Things to Check Before Choosing a Personal Budgeting App",
    niche: "Finance",
    type: "Guide",
    summary:
      "A practical checklist for evaluating budgeting apps before you commit your bank details to one.",
    body: [
      "Budgeting apps all promise the same thing — visibility into where your money goes — but they differ a lot in how they get there. Before linking your bank accounts to any of them, it's worth checking a few things first.",
      "First, look at how the app connects to your accounts. Most use a third-party aggregator (like Plaid) rather than storing your bank password directly. Read the privacy policy section on data handling, not just the marketing page, to understand what's actually stored and for how long.",
      "Second, check whether the categorization is manual or automatic, and how easy it is to correct. An app that mis-tags half your transactions and makes you fix them one by one every week isn't saving you time, no matter how good its dashboard looks.",
      "Third, look at what happens if you stop paying (for subscription-based apps). Some lock you out of historical data entirely, others let you export it. If your budgeting history matters to you long-term, confirm export options before you start relying on the app.",
      "Fourth, check for a shared/household mode if you split finances with a partner. Not all apps handle multi-user access well — some just let one login see everything, which isn't the same as proper shared budgeting.",
      "Finally, look at whether the app supports the specific account types you actually have — credit unions, foreign banks, or less common institutions are sometimes only partially supported, which quietly breaks the whole picture the app is supposed to give you.",
    ],
  },
  {
    slug: "blood-pressure-monitor-guide",
    title: "How to Choose a Home Blood Pressure Monitor: A Buyer's Checklist",
    niche: "Health",
    type: "Guide",
    summary:
      "What actually matters when picking a home blood pressure monitor, beyond the price tag.",
    body: [
      "Home blood pressure monitors vary more in accuracy and usability than their similar price tags would suggest. A few things are worth checking before buying one, especially if a doctor is relying on your home readings.",
      "Cuff size matters more than most people expect. A cuff that's too small for your arm will consistently read high, and one that's too large reads low. Check the manufacturer's stated arm-circumference range against your own measurement before assuming 'one size fits most' actually fits you.",
      "Look for validation, not just FDA clearance. Clinical validation studies (from bodies like the AAMI, ESH, or the British and Irish Hypertension Society) are a stronger signal of real-world accuracy than clearance alone, which is a lower regulatory bar.",
      "Upper-arm monitors are generally more accurate than wrist or fingertip monitors, since wrist position relative to the heart significantly affects the reading. If accuracy matters more than convenience, upper-arm is the safer default.",
      "If you want to track trends over time, check whether the monitor logs multiple readings with timestamps and lets you export or share that data with a doctor, rather than just showing the latest single reading.",
      "Finally, re-calibration and battery life are easy to overlook. Some monitors drift out of calibration after a year or two of regular use — check whether the manufacturer recommends periodic recalibration and how that's done.",
    ],
  },
  {
    slug: "minimalist-skincare-routine",
    title: "Building a Minimalist Skincare Routine: What Actually Matters",
    niche: "Beauty",
    type: "Guide",
    summary:
      "The handful of steps that make up a genuinely effective skincare routine, without the 10-step overwhelm.",
    body: [
      "Skincare marketing pushes multi-step routines with a dozen products, but dermatological consensus is much simpler: a small number of steps, done consistently, outperforms a large number of steps done inconsistently or layered incorrectly.",
      "The non-negotiable baseline is a gentle cleanser, a moisturizer suited to your skin type, and daily sunscreen. Everything else — serums, exfoliants, treatments — is additive on top of that baseline, not a replacement for it.",
      "Active ingredients (retinoids, vitamin C, AHAs/BHAs) work, but layering too many at once is a common mistake that causes irritation rather than better results. Introducing one active at a time, and giving skin a few weeks to adjust, is more effective than combining several immediately.",
      "Sunscreen is the single highest-leverage step for long-term skin health, and it's the one most commonly skipped or under-applied. Most people apply far less than the amount used in SPF testing, which means real-world protection is often lower than the labeled number suggests.",
      "Patch-testing new products on a small area for a few days before full-face use catches most reactions before they become a visible problem, and is worth the minor inconvenience — especially when introducing a new active ingredient.",
      "If a routine feels like a chore, it won't survive contact with a busy week. A consistent 3-step routine beats an elaborate 10-step one that gets skipped half the time.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
