import { useEffect } from "react";
import styles from "@/globalStyles.module.css"

const useHeroPosition = () => {
  useEffect(() => {
    const heroContainer = document.getElementById("hero-section");
    const heroInfo = heroContainer.querySelector(`.${styles.heroInfo}`);
    const pagination = heroContainer.querySelector(".swiper-pagination");

    if (heroContainer && heroInfo && pagination) {
      const updatePaginationPosition = () => {
        const heroContainerRect = heroContainer.getBoundingClientRect();
        const heroInfoRect = heroInfo.getBoundingClientRect();

        const containerBottom = heroContainerRect.bottom;
        const infoBottom = heroInfoRect.bottom;

        const distance = (containerBottom - infoBottom) * 0.3;

        pagination.style.bottom = `${distance}px`;
      };

      updatePaginationPosition();
      window.addEventListener("resize", updatePaginationPosition);
      window.addEventListener("scroll", updatePaginationPosition);

      return () => {
        window.removeEventListener("resize", updatePaginationPosition);
        window.removeEventListener("scroll", updatePaginationPosition);
      };
    }
  }, []);
};

export default useHeroPosition;