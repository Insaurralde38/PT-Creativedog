import React from "react";
import styles from "@/globalStyles.module.css";

const ProductInfo = ({ name, category }) => (
  <div className={styles.productBanner}>
    <div className={styles.productName}>{name}</div>
    <div className={styles.productSubCategory}>
      {category || "Sin categoría"}
    </div>
  </div>
);

export default ProductInfo;