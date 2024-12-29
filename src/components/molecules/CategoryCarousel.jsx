import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { calculateProductCount } from "@/utils/calculateProductCount";
import { useCategories } from "@/hooks/useCategories";
import { useProducts } from "@/hooks/useProducts";
import CategoryCard from "@/components/atoms/CategoryCard";
import styles from "@/globalStyles.module.css";

const CategoryCarousel = () => {
  const { categories } = useCategories();
  const { products } = useProducts();

  return (
    <Swiper
      modules={[Autoplay]}
      className={styles.categoryCarousel}
      spaceBetween={10}
      slidesPerView={"auto"}
      freeMode={true}
      autoplay={{ delay: 5000 }}
    >
      {categories.map((category) => {
        const productCount = calculateProductCount(products, category.id);
        return (
          <SwiperSlide key={category.id}>
            <CategoryCard
              name={category.name}
              imageUrl={category.image?.formats?.small?.url || "/assets/images/creativedog.jpg"}
              productCount={productCount}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CategoryCarousel;