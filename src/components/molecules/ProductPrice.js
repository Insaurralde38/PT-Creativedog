import React from "react";
import styles from "@/globalStyles.module.css";
import { formatPrice } from "@/utils/formatPrice";

const ProductPrice = ({ price, priceWithDiscount, discountPercentage }) => (
  <div className={styles.productPrices}>
    <div
      className={`${styles.productPrice} ${
        priceWithDiscount ? styles.discountedPrice : ""
      }`}
    >
      $ {formatPrice(price)}
    </div>
    {priceWithDiscount && (
      <>
        <div className={styles.productPriceOff}>-{discountPercentage}%</div>
        <div className={styles.productPriceNew}>
          $ {formatPrice(priceWithDiscount)}
        </div>
      </>
    )}
  </div>
);

export default ProductPrice;