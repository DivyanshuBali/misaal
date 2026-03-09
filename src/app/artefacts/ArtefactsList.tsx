"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ArtefactsItem } from "./archives";
import styles from "./page.module.css";

export function ArtefactsList({ items }: { items: readonly ArtefactsItem[] }) {
  const [hoveredItem, setHoveredItem] = useState<ArtefactsItem | null>(null);
  const hoverTimerRef = useRef<number | null>(null);

  const clearHoverTimer = useCallback(() => {
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  function handleMouseEnter(item: ArtefactsItem) {
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
