import React from "react";
import styles from "@/globalStyles.module.css";

const SortMenuItem = ({ label, onClick }) => (
  <li className={styles.sortMenuItem} onClick={onClick}>
    {label}
  </li>
);

export default SortMenuItem;