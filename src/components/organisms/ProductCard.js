import React from "react";
import styles from "@/globalStyles.module.css";
import FavouriteButton from "@/components/molecules/FavouriteButton";
import Icon from "@/components/atoms/Icon";
import ProductInfo from "@/components/molecules/ProductInfo";
import ProductPrice from "@/components/molecules/ProductPrice";
import { calculateDiscountPercentage } from "@/utils/calculateDiscountPercentage";

const ProductCard = ({ product, quickView }) => {
  const { name, categories, price, priceWithDiscount, featureImage } = product;
  const { label, icon } = quickView

  const discountPercentage = priceWithDiscount
    ? calculateDiscountPercentage(price, priceWithDiscount)
    : null;

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageWrapper}>
        <div
          className={styles.productImage}
          style={{
            backgroundImage: `url(${featureImage?.formats?.small?.url || ""})`,
          }}
        ></div>
        <div className={styles.quickView}>
          <Icon className={styles.quickViewIcon} icon={icon} />
          <span>{label}</span>
        </div>
      </div>
      <ProductInfo
        name={name}
        category={categories?.[0]?.name}
      />
      <ProductPrice
        price={price}
        priceWithDiscount={priceWithDiscount}
        discountPercentage={discountPercentage}
      />
      <FavouriteButton />
    </div>
  );
};

export default ProductCard;