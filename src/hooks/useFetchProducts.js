import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url, {
          headers: { "Content-Type": "application/json" },
        });
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [url]);

  return [products, setProducts];
};

export default useFetchProducts;
