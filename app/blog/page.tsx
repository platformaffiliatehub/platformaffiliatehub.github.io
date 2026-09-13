"use client";

import { useState } from "react";
import Link from "next/link";
import { POSTS, CONTENT_TYPES } from "@/lib/posts";

export default function BlogPage() {
  const [filter, setFilter] = useState<string>("All");

  const visible = filter === "All" ? POSTS : POSTS.filter((post) => post.type === filter);

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="mb-2 text-3xl font-bold text-brand-navy">Blog</h1>
      <p className="mb-8 text-brand-gray">
        Guides, reviews, and comparisons to help you choose better.
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {["All", ...CONTENT_TYPES].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === type
                ? "bg-brand-blue text-white"
                : "bg-gray-100 text-brand-gray hover:bg-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <ul className="divide-y divide-gray-100">
        {visible.map((post) => (
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
              <h2 className="text-xl font-semibold text-brand-navy group-hover:text-brand-blue">
                {post.title}
              </h2>
            </Link>
            <p className="mt-1 text-brand-gray">{post.summary}</p>
          </li>
        ))}
        {visible.length === 0 && (
          <li className="py-6 text-brand-gray">No {filter.toLowerCase()} articles yet — check back soon.</li>
        )}
      </ul>
    </div>
  );
}
