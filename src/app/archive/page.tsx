import { ArchiveList } from "./ArchiveList";
import { archiveItems } from "./archives";
import styles from "./page.module.css";

export default function ArchivePage() {
  return (
    <main className={styles.archiveRoot}>
      <ArchiveList items={archiveItems} />
    </main>
  );
}
