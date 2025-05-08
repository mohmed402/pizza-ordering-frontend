"use client";
import React from 'react';
import styles from "../../styles/Order.module.css";


const OrderSummary = ({ totalPrice }) => {
  return (
    <footer className={styles.orderSummary}>
      <div className={styles.totalPrice}>
        <span>Total:</span>
        <span>
          <span>£</span>
          <span>{totalPrice}</span>
        </span>
      </div>
    </footer>
  );
};

export default OrderSummary;