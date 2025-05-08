"use client";

import styles from "../../styles/Order.module.css";
function CustomerInfo({updateCustomerName}) {
    return (
        <div className={styles.formGroup}>
          <label htmlFor="pizza-type" className={styles.formLabel}>Name</label>
          <input onChange={(e)=> updateCustomerName(e.target.value)} type='text' className={styles.formSelect}  />
        </div>
      );
}

export default CustomerInfo
