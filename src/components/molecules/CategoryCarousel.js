import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CategoryCard from "@/components/atoms/CategoryCard";
import styles from "@/globalStyles.module.css";
import { fetchData } from "@/utils/fetchData";
import { calculateProductCount } from "@/utils/calculateProductCount";

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const [categoriesResult, productsResult] = await Promise.allSettled([
          fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`),
          fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`),
        ]);
  
        if (categoriesResult.status === "fulfilled") {
          setCategories(categoriesResult.value);
        } else {
          console.error("Error fetching categories:", categoriesResult.reason);
        }
  
        if (productsResult.status === "fulfilled") {
          setProducts(productsResult.value);
        } else {
          console.error("Error fetching products:", productsResult.reason);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    };
  
    fetchCategoriesAndProducts();
  }, []);

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