import React from "react";
import styles from "../../styles/MobileMenuButton.module.css";

function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button className={styles.mobileMenuButton} onClick={onClick} aria-label="Toggle mobile menu">
      <span className={styles.menuBar} />
      <span className={styles.menuBar} />
      <span className={styles.menuBar} />
    </button>
  );
}

export default MobileMenuButton;