import NavBar from "./components/NavBar/NavBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <NavBar />
    </main>
  );
}
