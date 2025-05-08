"use client";
import React from 'react';
import styles from "../../styles/Order.module.css";


const PizzaSizeSelector = ({ pizzaSize, updatePizzaSize }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor="pizza-size" className={styles.formLabel}>Select Size</label>
      <select
        id="pizza-size"
        className={styles.formSelect}
        value={pizzaSize}
        onChange={(event) => updatePizzaSize(event.target.value)}
      >
        <option value="">Choose your size</option>
        <option value="small">Small (9&quot;)</option>
        <option value="medium">Medium (12&quot;) +£2</option>
        <option value="large">Large (14&quot;) +£4</option>
      </select>
    </div>
  );
};

export default PizzaSizeSelector;