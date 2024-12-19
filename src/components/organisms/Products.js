import React, { useEffect, useState } from "react";
import styles from "@/globalStyles.module.css";
import productsData from "@/data/ProductsData";
import Header from "@/components/molecules/Header";
import SortButton from "@/components/atoms/SortButton";
import SortMenu from "@/components/molecules/SortMenu";
import ProductsGridWeb from "@/components/molecules/ProductsGridWeb";
import ProductsGridMobile from "@/components/molecules/ProductsGridMobile";
import { fetchData } from "@/utils/fetchData";
import { isMobile } from "@/utils/isMobile";
import { sortProducts } from "@/utils/sortProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData(
          // `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?pageSize=12&page=1`
          "https://jellyfish-app-mpahs.ondigitalocean.app/api/products?pageSize=12&page=1"
        );
        setProducts(data);
        setSortedProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setSortedProducts(sortProducts(products, sortOption));
  }, [sortOption, products]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobileView(isMobile());
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleSortChange = (value) => {
    setSortOption(value);
    setIsSortMenuOpen(false);
  };

  return (
    <div className={styles.products}>
      <Header
        title={{ text: productsData.title.text, highlightedText: productsData.title.highlightedText }}
        subtitle={productsData.subtitle}
        headerClassName={styles.productsHeader}
        titleBoxClassName={styles.productsTitleBox}
        headerButton={
          <div className={styles.sortButtonWrapper}>
            <SortButton
              label={productsData.sortButton.label}
              icon={productsData.sortButton.icon}
              onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
            />
            {isSortMenuOpen && (
              <SortMenu
                options={productsData.sortOptions}
                onSelect={handleSortChange}
              />
            )}
          </div>
        }
      />
      {isMobileView ? (
        <ProductsGridMobile products={sortedProducts} quickView={productsData.quickView}/>
      ) : (
        <ProductsGridWeb products={sortedProducts} quickView={productsData.quickView}/>
      )}
    </div>
  );
};

export default Products;