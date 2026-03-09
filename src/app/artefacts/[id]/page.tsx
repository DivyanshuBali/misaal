import Link from "next/link";
import { notFound } from "next/navigation";
import { artefactsItems } from "../archives";
import { ArtefactDetail } from "./ArtefactDetail";
import styles from "./page.module.css";

export default async function ArtefactPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = artefactsItems.find((a) => a.id === id);

  if (!item) notFound();

  return (
    <>
      <main className={styles.detailRoot}>
        <ArtefactDetail item={item} />
      </main>
      <div className={styles.backLink}>
        <Link href="/artefacts">back</Link>
      </div>
    </>
  );
}
