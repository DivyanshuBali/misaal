"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./IntroAnimation.module.css";
import Lottie from "lottie-react";
import misaalLogoAnimation from "../../../../public/animations/misaal-logo.json";

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

      // Remove the class immediately for returning visitors
      document.body.classList.remove("intro-playing");
    } else {
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

  // Check if user has already visited (sessionStorage is set)
  const hasVisited = sessionStorage.getItem("hasVisited");

  return (
    <>
      <AnimatePresence
        onExitComplete={() => {
          setShowContent(true);
          document.body.classList.remove("intro-playing");
          // Mark as visited AFTER intro completes
          sessionStorage.setItem("hasVisited", "true");
        }}
      >
        {showIntro && (
          <motion.div
            key="intro"
            className={styles.overlay}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.animationContainer}>
              <Lottie animationData={misaalLogoAnimation} loop={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={hasVisited ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </>
  );
}
