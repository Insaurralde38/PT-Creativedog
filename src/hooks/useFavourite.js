import { useState } from "react";

const useFavourite = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return { isFavourite, isAnimating, toggleFavourite };
};

export default useFavourite;