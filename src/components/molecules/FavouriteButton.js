import React from "react";
import useFavourite from "@/hooks/useFavourite";
import styles from "@/globalStyles.module.css";
import icons from "@/data/Icons";

const FavouriteButton = () => {
  const { isFavourite, isAnimating, toggleFavourite } = useFavourite();

  return (
    <button
      className={styles.favouriteIcon}
      onClick={toggleFavourite}
      aria-label="Toggle favourite"
    >
      <span
        className={`${styles.favouriteIconVector} ${ isAnimating ? styles.favouriteIconPulse : "" }`}
        dangerouslySetInnerHTML={{
          __html: icons.heart.replace(
            "<path", `<path fill="${isFavourite ? "#0500ff" : "#d1d5db"}"<path stroke="none"`
          ),
        }}
      ></span>
    </button>
  );
};

export default FavouriteButton;