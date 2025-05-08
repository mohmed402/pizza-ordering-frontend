import React from "react";
import styles from "../../styles/Home.module.css";

function FeatureCard({ title, description, imageUrl, imageAlt }) {
  return (
    <article className={styles.featureCard}>
      <img
        alt={imageAlt}
        src={imageUrl}
        className={styles.featureImage}
      />
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </article>
  );
}

export default FeatureCard;