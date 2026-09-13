import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <Link href="/blog" className="mb-6 inline-block text-sm text-brand-blue hover:underline">
        ← All articles
      </Link>
      <div className="mb-4 flex gap-2">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
          {post.niche}
        </span>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-gray">
          {post.type}
        </span>
      </div>
      <h1 className="mb-6 text-3xl font-bold text-brand-navy">{post.title}</h1>
      <div className="prose-sm space-y-4 text-[1.05rem] leading-relaxed text-gray-700">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
