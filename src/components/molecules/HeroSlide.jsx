import React from "react";
import { isMobile } from "@/utils/isMobile";
import HeroContent from "@/components/molecules/HeroContent";
import styles from "@/globalStyles.module.css";

const HeroSlide = ({ item }) => (
  <div
    className={`${styles.heroImage} ${
      item.theme === "bright" ? styles.heroBright : ""
    }`}
    style={{
      backgroundImage: `url(${isMobile() ? item.imgUrl.mobile : item.imgUrl.web})`,
    }}
  >
    <HeroContent
      title={item.title}
      description={item.description}
      buttons={item.buttons}
      theme={item.theme}
    />
  </div>
);

export default HeroSlide;