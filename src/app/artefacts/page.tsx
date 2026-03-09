import { ArtefactsList } from "./ArtefactsList";
import { artefactsItems } from "./archives";
import styles from "./page.module.css";

export default function ArtefactsPage() {
  return (
    <main className={styles.artefactsRoot}>
      <ArtefactsList items={artefactsItems} />
    </main>
  );
}
