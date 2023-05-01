import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

export default function Posts() {
  const posts = getSortedPostsData();
  
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold text-white mb-1">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <li className="text-white " key={post.id}>
            <Link className="underline hover:text-gray-400" href={`/posts/${post.id}`}>
              {post.title}
            </Link>
            <p className="text-sm">
              <small>{getFormattedDate(post.date)}</small>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
