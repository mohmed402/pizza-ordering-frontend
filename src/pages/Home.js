"use client";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/common/Header";
import MainHeader from "../components/layout/MainHeader";
import FeaturesSection from "../components/home/FeaturesSection";
import MobileMenuButton from "../components/common/MobileMenuButton";

function Home({setPage, }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <section className={styles.pageContainer}>

      <MobileMenuButton isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
      <Header mobileMenuOpen={mobileMenuOpen} setPage={setPage} />
      <main>
        <MainHeader setPage={setPage} />
        <FeaturesSection />
      </main>
    </section>
  );
}

export default Home;