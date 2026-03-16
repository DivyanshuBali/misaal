import { Suspense } from "react";
import { getArtefacts } from "@/lib/firestore";
import { ArtefactsList } from "./ArtefactsList";
import styles from "./page.module.css";

async function ArtefactsContent() {
  const items = await getArtefacts();

  return <ArtefactsList items={items} />;
}

export default function ArtefactsPage() {
  return (
    <main className={styles.artefactsRoot}>
      <Suspense fallback={<div>Loading...</div>}>
        <ArtefactsContent />
      </Suspense>
    </main>
  );
}
