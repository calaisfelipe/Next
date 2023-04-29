import styles from "./page.module.css";
import Link from "next/Link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HomePage</h1>
      <div>
        <Link href="/users">Go to Users</Link>
      </div>
    </main>
  );
}
