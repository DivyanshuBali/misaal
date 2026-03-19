"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

interface NavBarProps {
  fullWidth?: boolean;
}

export default function NavBar({ fullWidth = false }: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav className={`${styles.nav} ${fullWidth ? styles.fullWidth : ""}`}>
      <ul>
        <li>
          <Link href="/">
            mannat singh<sup>TM</sup>
          </Link>
        </li>
        {!fullWidth && <div className={styles.divider} />}
        <li>
          <Link
            href="/studies"
            className={pathname.includes("/studies") ? styles.muted : undefined}
          >
            studies
          </Link>
        </li>
        <li>
          <Link
            href="/artefacts"
            className={
              pathname.includes("/artefacts") ? styles.muted : undefined
            }
          >
            artefacts
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname.includes("/about") ? styles.muted : undefined}
          >
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
}
