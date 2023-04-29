import "../app/globals.css";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <h4>Navbar</h4>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navLink}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navLink}>
              <Link href="/about">about</Link>
            </li>
            <li className={styles.navLink}>
              <Link href="/">link3</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
