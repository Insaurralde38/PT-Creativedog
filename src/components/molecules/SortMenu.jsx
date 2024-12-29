import React from "react";
import SortMenuItem from "@/components/atoms/SortMenuItem";
import styles from "@/globalStyles.module.css";

const SortMenu = ({ options, onSelect }) => (
  <ul className={styles.sortMenu}>
    {options.map((option) => (
      <SortMenuItem
        key={option.value}
        label={option.label}
        onClick={() => onSelect(option.value)}
      />
    ))}
  </ul>
);

export default SortMenu;