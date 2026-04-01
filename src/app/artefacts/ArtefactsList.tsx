"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ArtefactsItem } from "./archives";
import styles from "./page.module.css";

export function ArtefactsList({ items }: { items: readonly ArtefactsItem[] }) {
  const [hoveredItem, setHoveredItem] = useState<ArtefactsItem | null>(null);

  function handleMouseEnter(item: ArtefactsItem) {
    setHoveredItem(item);
  }

  function handleMouseLeave() {
    setHoveredItem(null);
  }

  return (
    <>
      <section className={styles.imageContainer}>
        {hoveredItem && (
          <Image
            src={hoveredItem.bannerImage}
            alt={hoveredItem.title}
            fill
            className={styles.artefactsImage}
          />
        )}
      </section>

      <section className={styles.listContainer}>
        <ul>
          {items.map((item) => (
            <Link key={item.id} href={`/artefacts/${item.id}`}>
              <li
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </section>

      <section className={styles.mobileCards}>
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/artefacts/${item.id}`}
            className={styles.mobileCard}
          >
            <div className={styles.mobileCardImage}>
              <Image
                src={item.bannerImage}
                alt={item.title}
                fill
                className={styles.artefactsImage}
              />
            </div>
            <p className={styles.mobileCardTitle}>{item.title}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
