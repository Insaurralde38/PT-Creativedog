import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ProductCard from "@/components/organisms/ProductCard";
import styles from "@/globalStyles.module.css";

const ProductsGridMobile = ({ products, quickView }) => {
  return (
    <Swiper
      className={styles.productsGrid}
      modules={[ Autoplay ]}
      spaceBetween={4}
      slidesPerView={"auto"}
      freeMode={true}
      autoplay={{ delay: 3000 }}
    >
      {products.slice(0, 12).map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} quickView={quickView} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsGridMobile;