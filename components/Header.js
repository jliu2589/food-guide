import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="#">logo</Link>
      </div>

      <nav className={styles.navContainer}>
        <ul className={styles.siteNav}>
          <li>cities</li>
          <li>filters</li>
          <li>map</li>
        </ul>
      </nav>
    </div>
  );
}
