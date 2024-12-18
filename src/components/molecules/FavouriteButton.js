import React, { useState } from "react";
import styles from "@/globalStyles.module.css";
import icons from "@/data/Icons";

const FavouriteButton = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      className={styles.favouriteIcon}
      onClick={toggleFavourite}
      aria-label="Toggle favourite"
    >
      <span
        className={`${styles.favouriteIconVector} ${
          isAnimating ? styles.favouriteIconPulse : ""
        }`}
        dangerouslySetInnerHTML={{
          __html: icons.heart.replace(
            "<path",
            `
              <path fill="${isFavourite ? "#0500ff" : "#d1d5db"}"
              <path stroke="none"
            `
          ),
        }}
      ></span>
    </button>
  );
};

export default FavouriteButton;