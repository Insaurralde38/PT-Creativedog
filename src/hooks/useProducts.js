import { useEffect, useState } from "react";
import axios from "axios";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
          headers: { "Content-Type": "application/json" },
        });
        setProducts(response.data.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return { products, error };
};