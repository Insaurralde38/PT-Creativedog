import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetchData";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`);
        setProducts(result);
      } catch (err) {
        setError(err);
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
};