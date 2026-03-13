import { Suspense } from "react";
import { getLogs } from "@/lib/firestore";
import { LogsLayout } from "./LogsLayout";
import styles from "./page.module.css";

async function LogsContent() {
  const logs = await getLogs();

  return <LogsLayout logs={logs} />;
}

export default function LogsPage() {
  return (
    <main className={styles.logsRoot}>
      <Suspense>
        <LogsContent />
      </Suspense>
    </main>
  );
}
