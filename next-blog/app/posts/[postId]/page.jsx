import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";


export async function generateMetadata({ params: { postId } }) {
  const posts = getSortedPostsData();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params: { postId } }) {
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const {title, date, contentHtml} = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main className="px-6 prose proxe-xl prose-slate mx-auto" >
      <h2 className="text-3xl pt-4 mb-0">{title}</h2>
      <p className="mb-2">{pubDate}</p>

        <article >
            <section dangerouslySetInnerHTML={{ __html:contentHtml}} />

          <div className="mt-4 ">
            <Link className="underline  hover:text-gray-400" href='/'>Back to Home</Link>
          </div>


        </article>

    </main>
  );
}
