"use client";

import Image from "next/image";
import { useState } from "react";
import type { ArtefactsItem } from "../archives";
import styles from "./page.module.css";

export function ArtefactDetail({ item }: { item: ArtefactsItem }) {
  const [imageIndex, setImageIndex] = useState(0);
  const hasPrev = imageIndex > 0;
  const hasNext = imageIndex < item.images.length - 1;

  return (
    <div className={styles.content}>
      <div className={styles.imageNav}>
        <button
          type="button"
          className={styles.navButton}
          disabled={!hasPrev}
          onClick={() => setImageIndex((i) => i - 1)}
          aria-label="Previous image"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.imageFrame}>
          <Image
            src={item.images[imageIndex]}
            alt={item.title}
            fill
            className={styles.artefactImage}
          />
        </div>

        <button
          type="button"
          className={styles.navButton}
          disabled={!hasNext}
          onClick={() => setImageIndex((i) => i + 1)}
          aria-label="Next image"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.divider} />

      <div className={styles.info}>
        <div className={styles.infoContent}>
          <div>
            <div className={styles.titleRow}>
              <span>{item.code.split("—")[0]?.trim()}</span>
              <div className={styles.titleDash} />
              <span>{item.code.split("—")[1]?.trim()}</span>
            </div>
            <div className={styles.details}>
              <p>{item.title}</p>
              <p>{item.year}</p>
            </div>
          </div>

          <div className={styles.descriptionAndTags}>
            {item.description && (
              <p className={styles.description}>{item.description}</p>
            )}
            {item.tags.length > 0 && (
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag.id} className={styles.tag}>
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
