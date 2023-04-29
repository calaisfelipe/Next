import React from "react";
import styles from './PostCard.module.css'


export default async function PostCard({promise}) {
  
  const posts = await promise;

  return (
    <>
      {posts.map((post) => (
        <article className={styles.card} key={post.id}>
          <h4>
            Post {post.id}: {post.title}
          </h4>
          <p>{post.body}</p>
        </article>
      ))}
    </>
  );
}
