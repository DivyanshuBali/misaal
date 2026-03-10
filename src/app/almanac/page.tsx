import { AlamancFlipbook } from "@/components/AlmanacFlipbook/AlmanacFlipbook";
import styles from "./page.module.css";

function AlamancPage() {
  return (
    <main className={styles.almanacRoot}>
      <AlamancFlipbook />
    </main>
  );
}

export default AlamancPage;
