import React from "react";
import useFetchProducts from "@/hooks/useFetchProducts";
import useSortProducts from "@/hooks/useSortProducts";
import useIsMobileView from "@/hooks/useIsMobileView";
import SortButton from "@/components/atoms/SortButton";
import Header from "@/components/molecules/Header";
import SortMenu from "@/components/molecules/SortMenu";
import ProductsGridWeb from "@/components/molecules/ProductsGridWeb";
import ProductsGridMobile from "@/components/molecules/ProductsGridMobile";
import productsData from "@/data/ProductsData";
import styles from "@/globalStyles.module.css";

const Products = () => {
  const [products, setProducts] = useFetchProducts(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?pageSize=12&page=1`
  );
  const [sortedProducts, sortOption, setSortOption] = useSortProducts(products);
  const isMobileView = useIsMobileView();
  const [isSortMenuOpen, setIsSortMenuOpen] = React.useState(false);

  const handleSortChange = (value) => {
    setSortOption(value);
    setIsSortMenuOpen(false);
  };

  return (
    <div className={styles.products}>
      <Header
        title={{
          text: productsData.title.text,
          highlightedText: productsData.title.highlightedText,
        }}
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
        <ProductsGridMobile
          products={sortedProducts}
          quickView={productsData.quickView}
        />
      ) : (
        <ProductsGridWeb
          products={sortedProducts}
          quickView={productsData.quickView}
        />
      )}
    </div>
  );
};

export default Products;