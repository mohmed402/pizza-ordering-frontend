"use client";
import React from 'react';
import styles from '../../styles/OrderProgressTracker.module.css';

const OrderProgressTracker = ({ steps, currentStep }) => {

  return (
    <section className={styles.progressContainer}>
      {steps.map((step, index) => (
        <div className={styles.stepContainer} key={step.id}>
          <div className={styles.stepContent}>
            <div
              className={styles.stepIcon}
              style={{
                backgroundColor:
                  currentStep === step.id
                    ? "rgb(243, 104, 5)"
                    : steps.findIndex((s) => s.id === currentStep) > index
                    ? "rgb(26, 127, 55)"
                    : "rgb(245, 243, 241)",
                color:
                  currentStep === step.id ||
                  steps.findIndex((s) => s.id === currentStep) > index
                    ? "white"
                    : "rgb(48, 54, 61)",
                boxShadow:
                  currentStep === step.id
                    ? "0 0 0 4px rgba(243, 104, 5, 0.2)"
                    : "none",
              }}
            >
              {step.icon}
            </div>
            <span
              className={styles.stepLabel}
              style={{
                fontWeight: currentStep === step.id ? "600" : "400",
                color:
                  currentStep === step.id
                    ? "rgb(243, 104, 5)"
                    : "rgb(48, 54, 61)",
              }}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={styles.stepConnector}
              style={{
                backgroundColor:
                  steps.findIndex((s) => s.id === currentStep) > index
                    ? "rgb(26, 127, 55)"
                    : "rgb(245, 243, 241)",
              }}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default OrderProgressTracker;