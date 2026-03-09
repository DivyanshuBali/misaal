import Link from "next/link";
import styles from "./NavBar.module.css";

interface NavBarProps {
  fullWidth?: boolean;
}

export default function NavBar({ fullWidth = false }: NavBarProps) {
  return (
    <nav className={`${styles.nav} ${fullWidth ? styles.fullWidth : ""}`}>
      <ul>
        <li>
          <Link href="#">
            mannat singh<sup>TM</sup>
          </Link>
        </li>
        {!fullWidth && <div className={styles.divider} />}
        <li>
          <Link href="/logs">logs</Link>
        </li>
        <li>
          <Link href="/artefacts">artefacts</Link>
        </li>
        <li>
          <Link href="#">about</Link>
        </li>
      </ul>
    </nav>
  );
}
