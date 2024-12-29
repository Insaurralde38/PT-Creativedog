import React from "react";
import styles from "@/globalStyles.module.css";

const SortButton = ({ label, icon, onClick }) => (
  <button className={styles.sortButton} onClick={onClick}>
    <span
      className={styles.sortLinkIcon}
      dangerouslySetInnerHTML={{ __html: icon }}
    ></span>
    {label}
  </button>
);

export default SortButton;