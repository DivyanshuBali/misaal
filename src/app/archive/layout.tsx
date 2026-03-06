import NavBar from "@/components/NavBar/NavBar";
import styles from "./layout.module.css";

export default function ArchiveLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.archiveLayout}>
      <NavBar fullWidth />
      {children}
    </div>
  );
}
