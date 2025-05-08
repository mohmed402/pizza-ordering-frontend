import React from "react";
import styles from "../../styles/Footer.module.css";
import Logo from "./Logo";

function Footer({setPage}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBranding}>
         <Logo setPage={setPage} />
          <p className={styles.copyright}>© 2024 Bemo Pizza. All rights reserved.</p>
        </div>
        <nav className={styles.footerLinks}>
          <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
          <a href="#terms" className={styles.footerLink}>Terms of Service</a>
          <a href="#contact" className={styles.footerLink}>Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;