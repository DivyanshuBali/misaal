"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function IntroStateManager() {
  const pathname = usePathname();

  useEffect(() => {
    // On any route that's NOT home, remove intro-playing class
    if (pathname !== "/") {
      document.body.classList.remove("intro-playing");
    } else {
      // On home route, check if user has visited before
      const hasVisited = sessionStorage.getItem("hasVisited");
      if (hasVisited) {
        document.body.classList.remove("intro-playing");
      }
    }
  }, [pathname]);

  return null;
}
