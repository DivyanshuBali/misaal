"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Log from "./Log";
import styles from "./page.module.css";

export type LogItem = {
  name: string;
  title: string;
  subtitle: string;
  creator: string;
  date: string;
  descriptionTitle: string;
  description: string;
  tags: string[];
};

export function LogsLayout({ logs }: { logs: readonly LogItem[] }) {
  const [hoveredLog, setHoveredLog] = useState<LogItem | null>(null);
  const hoverTimerRef = useRef<number | null>(null);

  const clearHoverTimer = useCallback(() => {
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  function handleMouseEnter(log: LogItem) {
    clearHoverTimer();
    hoverTimerRef.current = window.setTimeout(() => {
      setHoveredLog(log);
      hoverTimerRef.current = null;
    }, 300);
  }

  function handleMouseLeave() {
    clearHoverTimer();
    setHoveredLog(null);
  }

  useEffect(() => {
    return () => {
      clearHoverTimer();
    };
  }, [clearHoverTimer]);

  return (
    <>
      <section className={styles.leftContainer}>
        <ol>
          {logs.map((log) => (
            <li
              key={log.name}
              onMouseEnter={() => handleMouseEnter(log)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={`/logs/${log.name}`}>{log.name}</Link>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.rightContainer}>
        {hoveredLog ? <Log key={hoveredLog.name} log={hoveredLog} /> : null}
      </section>
    </>
  );
}
