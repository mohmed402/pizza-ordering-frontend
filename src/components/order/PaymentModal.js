"use client";
import React, { useState } from "react";
import styles from "../../styles/PaymentModal.module.css"; 
import style from "../../styles/Components.module.css"

const PaymentModal = ({ totalPrice, onClose, onPay, nextStage, text }) => {
  const [method, setMethod] = useState("creditcard");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      setIsLoading(true);

      await onPay(method);
    } catch (err) {
      alert("Payment failed");
    } finally {
      setTimeout(() => {
        setIsLoading(false)
        onClose();
        nextStage();
      }, "1500");
    }
  };
  
  return (
    <section className={styles.modalOverlay}>
      <section className={styles.modal}>
        <h2>Payment Details</h2>

        <div className={styles.methodToggle}>
          <button
            className={method === "creditcard" ? styles.active : ""}
            onClick={() => setMethod("creditcard")}
          >
            Credit Card
          </button>
          <button
            className={method === "paypal" ? styles.active : ""}
            onClick={() => setMethod("paypal")}
          >
            PayPal
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {method === "creditcard" && (
            <>
              <label>Card Number</label>
              <input className={styles.cardNumber} type="text" required placeholder="1234 5678 9012 3456" />

              <div className={styles.cardDetailsRow}>
                <div>
                  <label>Expiry Date</label>
                  <input type="text" required placeholder="MM/YY" />
                </div>
                <div>
                  <label>Security Code</label>
                  <input type="text" required placeholder="CVC" />
                </div>
              </div>
            </>
          )}

            <button
            type="submit"
            className={styles.payButton}
            disabled={isLoading}
            >
            {isLoading ? (
                <>
                <span className={style.spinner}></span> {text}
                </>
            ) : (
                `Pay £${totalPrice}`
            )}
            </button>
        </form>

        <button className={styles.closeButton} onClick={onClose}>×</button>
      </section>
    </section>
  );
};

export default PaymentModal;
