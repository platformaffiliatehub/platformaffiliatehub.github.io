import Link from "next/link";
import { POSTS } from "@/lib/posts";

export default function HomePage() {
  const featured = POSTS.slice(0, 3);

  return (
    <div>
      <section className="bg-gradient-to-b from-blue-50 to-white px-5 py-16 text-center">
        <h1 className="mx-auto max-w-2xl text-4xl font-bold text-brand-navy sm:text-5xl">
          Discover. Compare. <span className="text-brand-blue">Choose Better.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
          Platform Hub breaks down real buying decisions — budgeting apps, health devices,
          skincare, and more — so you don't have to guess.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-block rounded-full bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Browse the Blog
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14">
        <h2 className="mb-6 text-2xl font-bold text-brand-navy">Recent Articles</h2>
        <ul className="divide-y divide-gray-100">
          {featured.map((post) => (
            <li key={post.slug} className="py-6 first:pt-0">
              <div className="mb-2 flex gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  {post.niche}
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-gray">
                  {post.type}
                </span>
              </div>
              <Link href={`/blog/${post.slug}`} className="group">
                <h3 className="text-xl font-semibold text-brand-navy group-hover:text-brand-blue">
                  {post.title}
                </h3>
              </Link>
              <p className="mt-1 text-brand-gray">{post.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
