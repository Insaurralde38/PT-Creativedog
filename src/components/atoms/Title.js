import React from "react";
import styles from "@/globalStyles.module.css";

const Title = ({ text, highlightedText }) => (
  <h1 className={styles.title}>
    {text} <span className={styles.title2}>{highlightedText}</span>
  </h1>
);

export default Title;