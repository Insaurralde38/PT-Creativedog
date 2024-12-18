import React from "react";
import ProductCard from "@/components/organisms/ProductCard";
import styles from "@/globalStyles.module.css";

const ProductsGridWeb = ({ products, quickView }) => {
  return (
    <div className={styles.productsGrid}>
      {products.slice(0, 12).map((product) => (
        <ProductCard key={product.id} product={product} quickView={quickView} />
      ))}
    </div>
  );
};

export default ProductsGridWeb;