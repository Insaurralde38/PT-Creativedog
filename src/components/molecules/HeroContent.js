import React from "react";
import Text from "@/components/atoms/Text";
import BannerButtons from "@/components/molecules/BannerButtons";
import styles from "@/globalStyles.module.css";

const HeroContent = ({ title, description, buttons, theme }) => (
  <div className={styles.heroInfo}>
    <h1>{title}</h1>
    <Text>{description}</Text>
    <div className={styles.heroButtons}>
      <BannerButtons
        buttons={buttons} 
        hideMobileButton2={true}
        buttonNormalSize={true}
        variant="outline"
        color={theme === "bright" ? "outline-black" : "outline-white"}
      />
    </div>
  </div>
);

export default HeroContent;