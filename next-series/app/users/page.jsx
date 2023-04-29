import styles from "./page.module.css";
import Link from "next/Link";
import getAllUsers from "@/lib/getAllUsers";
import "@/app/globals.css";

export default async function Users() {
  const usersData = getAllUsers();

  const users = await usersData;

  return (
    <div className={styles.main}>
      <h2>Users page</h2>
      <ul>
        {users
          ? users.map((user) => (
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </li>
            ))
          : null}
      </ul>
      <Link href="/">Home</Link>
    </div>
  );
}
