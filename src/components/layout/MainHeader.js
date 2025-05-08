import React from "react";
import styles from "../../styles/MainHeader.module.css";


function MainHeader({setPage}) {
  return (
    <section className={styles.mainHeader}>
      <div className={styles.mainHeaderContainer}>
        <div className={styles.mainHeaderContent}>
          <h1 className={styles.heroTitle}>
            Fresh & Delicious Pizza Delivered To Your Door
          </h1>
          <p className={styles.heroDescription}>
            Experience the best pizza in town with our handcrafted recipes
            and premium ingredients. Order now for fast delivery!
          </p>
          <button className={styles.heroButton} onClick={()=>setPage("order")}>Start Your Order</button>
        </div>
        <div className={styles.imageContainer}>
          <img
            alt="Delicious Pizza"
            src="../../media/mainBackground.png"
            className={styles.mainImage}
          />
        </div>
      </div>
    </section>
  );
}

export default MainHeader;