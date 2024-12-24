import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetchData";

const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData(url);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [url]);

  return [products, setProducts];
};

export default useFetchProducts;