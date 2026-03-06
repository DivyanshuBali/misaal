"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ArchiveItem } from "./archives";
import styles from "./page.module.css";

export function ArchiveList({ items }: { items: readonly ArchiveItem[] }) {
  const [hoveredItem, setHoveredItem] = useState<ArchiveItem | null>(null);
  const hoverTimerRef = useRef<number | null>(null);

  const clearHoverTimer = useCallback(() => {
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  function handleMouseEnter(item: ArchiveItem) {
    clearHoverTimer();
    hoverTimerRef.current = window.setTimeout(() => {
      setHoveredItem(item);
      hoverTimerRef.current = null;
    }, 300);
  }

  function handleMouseLeave() {
    clearHoverTimer();
    setHoveredItem(null);
  }

  useEffect(() => {
    return () => {
      clearHoverTimer();
    };
  }, [clearHoverTimer]);

  return (
    <>
      <section className={styles.imageContainer}>
        {hoveredItem && (
          <Image
            src={hoveredItem.image}
            alt={hoveredItem.name}
            fill
            className={styles.archiveImage}
          />
        )}
      </section>

      <section className={styles.listContainer}>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
