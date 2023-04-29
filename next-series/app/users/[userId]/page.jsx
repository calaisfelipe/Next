import { Suspense } from "react";

import getAllUsers from "@/lib/getAllUsers";
import getUserByID from "@/lib/getUserByID";
import getUserPost from "@/lib/getUserPost";
import styles from "./page.module.css";
import PostCard from "@/components/PostCard";
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const getUser = getUserByID(params.userId);
  const user = await getUser;

  if(!user) {
    return {
      title: 'User Not Found'
    }
  }



  return {
    title: `${user.name}`,
    description: `This is the page of ${user.name} posts`,
  };
}

export default async function userPage({ params }) {
  const getUser = getUserByID(params.userId);
  const getPosts = getUserPost(params.userId);

  const user = await getUser;
  //const posts = await getPosts;

  //const [user, posts] = await Promise.all([getUser, getPosts])

  if(!user) return notFound()


  return (<>
   <div className={styles.main}>
      <div className={styles.card}>
        <h3>{user.name}</h3>
        <p>
          <strong>UserName:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>City:</strong> {user.address.city}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
      </div>

      <div className={styles.grid}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <PostCard promise={getPosts} />
        </Suspense>
      </div>
    </div>
    </>
  );
}

export async function generateStaticParams() {
  const usersData = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString()
  }));
}
