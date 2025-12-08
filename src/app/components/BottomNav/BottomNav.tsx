import React from "react";
import styles from "./BottomNav.module.css";
import Image from "next/image";

function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <div className={styles.actionButtons}>
        <a href="#">INDEX</a>
        <a href="#">CONTACT</a>
      </div>
      <div className={styles.logo}>
        <a href="#">
          <img src={"/misaal-logo.png"} alt="misaal logo" />
        </a>
      </div>
    </nav>
  );
}

export default BottomNav;
