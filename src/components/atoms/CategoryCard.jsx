import React from "react";
import styles from "@/globalStyles.module.css";

const CategoryCard = ({ name, imageUrl, productCount, href }) => {
  return (
    <div href={href} className={styles.categoryCard}>
      <img src={imageUrl} alt={name} className={styles.categoryImage} />
      <div className={styles.categoryContent}>
        <h3 className={styles.categoryName}>{name}</h3>
        <p className={styles.productCount}>{productCount} productos</p>
      </div>
    </div>
  );
};

export default CategoryCard;