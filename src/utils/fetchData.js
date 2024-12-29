import axios from "axios";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};