"use client";
import React from 'react';
import styles from "../../styles/Order.module.css";


const PizzaTypeSelector = ({ pizzaType, updatePizzaType }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor="pizza-type" className={styles.formLabel}>Select Pizza Type</label>
      <select
        id="pizza-type"
        className={styles.formSelect}
        value={pizzaType}
        onChange={(event) => updatePizzaType(event.target.value)}
      >
        <option value="">Choose your pizza</option>
        <option value="margherita">Margherita </option>
        <option value="vegetable">Vegetable</option>
        <option value="pepperoni" disabled>Pepperoni - (cooming soon)</option>
        <option value="supreme" disabled>Supreme - (cooming soon)</option>
      </select>
    </div>
  );
};

export default PizzaTypeSelector;