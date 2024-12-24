import styles from "@/globalStyles.module.css"

export const paginationPosition = () => {
  const heroContainer = document.getElementById("hero-section");
  const heroInfo = heroContainer?.querySelector(`.${styles.heroInfo}`);
  const pagination = heroContainer?.querySelector(".swiper-pagination");
  const bullet = pagination?.querySelector(".swiper-custom-bullet");

  if (heroContainer && heroInfo && pagination && bullet) {
    const heroContainerRect = heroContainer.getBoundingClientRect();
    const heroInfoRect = heroInfo.getBoundingClientRect();

    const containerBottom = heroContainerRect.bottom;
    const infoBottom = heroInfoRect.bottom;
    const bulletHeight = bullet.offsetHeight || 0;

    const distance = (containerBottom - infoBottom) * 0.7 - bulletHeight;
    pagination.style.bottom = `${distance}px`;
  }
};