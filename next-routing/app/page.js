'use client'

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <button onClick={() => router.push("/about")}>GO to about</button>
    </main>
  );
}
