"use client";
import React from 'react';
import styles from '../../styles/ToppingsSelector.module.css';

const ToppingsSelector = ({ toppings, toggleTopping, pizzaImages }) => {
  const availableToppings = [
    "Pepperoni",
    "Mushrooms",
    "Onions",
    "Bell Peppers",
    "Olives",
  ];

  
  return (
    <section className={styles.toppingsGroup}>
      <label className={styles.toppingsLabel}>Extra Toppings (£1.50 each)</label>
      <section className={styles.toppingsContainer}>
        <figure className={styles.pizzaPreview}>
          <div className={styles.pizzaGlow} />
          <img className={styles.pizzaBaseImage} src={pizzaImages.base} alt="Pizza base" />
          {toppings.map((topping, index) => (
            <img
              key={index}
              className={styles.toppingImage}
              src={pizzaImages[topping]}
              alt={`${topping} topping`}
            />
          ))}
        </figure>
        <div className={styles.toppingsGrid}>
          {availableToppings.map((topping) => (
            <label
              className={styles.toppingLabel}
              key={topping}
            >
              <input
                type="checkbox"
                className={styles.toppingCheckbox}
                checked={toppings.includes(topping)}
                onChange={() => toggleTopping(topping)}
              />
              <span>{topping}</span>
            </label>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ToppingsSelector;


  