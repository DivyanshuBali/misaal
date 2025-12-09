"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./IntroAnimation.module.css";
import Image from "next/image";

export default function IntroAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setShowIntro(false);
      setShowContent(true);
    } else {
      sessionStorage.setItem("hasVisited", "true");
      // Trigger intro exit after animation completes
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 2500); // 1.5s logo animation + 0.5s delay + 0.5s buffer

      return () => clearTimeout(timer);
    }
  }, []);

  // Hide content until hydration
  if (!mounted) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <>
      <AnimatePresence onExitComplete={() => setShowContent(true)}>
        {showIntro && (
          <motion.div
            key="intro"
            className={styles.overlay}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              {/* Your logo SVG */}
              <div>
                <Image
                  src="/misaal-logo.png"
                  height={100}
                  width={66}
                  alt={"misaal logo loading animation"}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </>
  );
}
