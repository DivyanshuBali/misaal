import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <nav>
        <ul>
          <li>
            <Link href="#">
              mannat singh<sup>TM</sup>
            </Link>
          </li>
          <div className={styles.divider} />
          <li>
            <Link href="#">archive</Link>
          </li>
          <li>
            <Link href="/logs">logs</Link>
          </li>
          <li>
            <Link href="#">artefacts</Link>
          </li>
          <li>
            <Link href="#">about</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
