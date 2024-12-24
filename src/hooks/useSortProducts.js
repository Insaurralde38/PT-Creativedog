import { useState, useEffect } from "react";
import { sortProducts } from "@/utils/sortProducts";

const useSortProducts = (products) => {
  const [sortOption, setSortOption] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    setSortedProducts(sortProducts(products, sortOption));
  }, [sortOption, products]);

  return [sortedProducts, sortOption, setSortOption];
};

export default useSortProducts;