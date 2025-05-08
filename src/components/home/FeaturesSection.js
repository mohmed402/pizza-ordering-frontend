import React from "react";
import styles from "../../styles/Home.module.css";
import FeatureCard from "./FeatureCard";
import features from '../../data/featuresData';
function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <h2 className={styles.featuresTitle}>Why Choose Bemo Pizza?</h2>
        <div className={styles.featuresGrid}>
          {features.map(feature => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;