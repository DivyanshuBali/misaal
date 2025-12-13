import styles from "./page.module.css";
import IntroAnimation from "@/components/IntroAnimation/IntroAnimation";

export default function Home() {
  return (
    <IntroAnimation>
      <main className={styles.mainContainer}>content</main>
    </IntroAnimation>
  );
}
