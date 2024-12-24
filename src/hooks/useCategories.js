import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetchData";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`);
        setCategories(result);
      } catch (err) {
        setError(err);
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return { categories, error };
};