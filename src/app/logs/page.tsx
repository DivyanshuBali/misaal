import { LogsLayout } from "./LogsLayout";
import { logs } from "./logs";
import styles from "./page.module.css";

export default function LogsPage() {
  return (
    <main className={styles.logsRoot}>
      <LogsLayout logs={logs} />
    </main>
  );
}
