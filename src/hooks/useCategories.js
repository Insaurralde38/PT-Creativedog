import { useEffect, useState } from "react";
import axios from "axios";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`, {
          headers: { "Content-Type": "application/json" },
        });
        setCategories(response.data.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return { categories, error };
};