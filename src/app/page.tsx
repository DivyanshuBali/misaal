import LandingCards from "./components/LandingCards/LandingCards";
import styles from "./page.module.css";
import IntroAnimation from "@/components/IntroAnimation/IntroAnimation";

export default function Home() {
  return (
    <IntroAnimation>
      <main className={styles.mainContainer}>
        <LandingCards />
      </main>
    </IntroAnimation>
  );
}
