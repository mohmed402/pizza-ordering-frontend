"use client";
import React from "react";
import styles from "../../styles/Order.module.css";

const DeliveryMethodSelector = ({ selectedMethod, onSelect }) => {
  return (
    <section className={styles.container}>
      <h4 className={styles.title}>How would you like to receive your order?</h4>
      <div className={styles.buttonGroup}>
      <button
        type="button" 
        className={`${styles.button} ${selectedMethod === "delivery" ? styles.active : ""}`}
        onClick={() => onSelect("delivery")}
      >
         🚗 Delivery
    </button>

      <button
        type="button"  
        className={`${styles.button} ${selectedMethod === "collection" ? styles.active : ""}`}
        onClick={() => onSelect("collection")}
      >
        🏪 Collection
      </button>
      </div>
    </section>
  );
};

export default DeliveryMethodSelector;
