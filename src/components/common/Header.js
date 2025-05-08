"use client";
import React from "react";
import styles from "../../styles/Header.module.css";
import Logo from "./Logo";

function Header({ mobileMenuOpen, setPage }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Logo setPage={setPage} />
        </div>
        <nav
          className={`${styles.navigation} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}
        >
          <a href="#home" onClick={()=>setPage("home")} className={styles.navLink}>Home</a>
          <a href="#menu" onClick={()=>setPage("order")} className={styles.navLink}>Menu</a>
          <a href="#about" className={styles.navLink}>About Us</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
        <button onClick={()=>setPage("order")} className={styles.orderButton}>Order Now</button>
      </div>
    </header>
  );
}

export default Header;