import React from "react";
import styles from "./Card.module.css";
export default function Card({ data }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.cardTitle}>{data.name}</h1>
      <h3 className={styles.cardEmail}>{data.email}</h3>
      <p className={styles.cardReview}>{data.review}</p>
      <p className={styles.cardRating}>{data.rating}</p>
    </div>
  );
}
