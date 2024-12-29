import React from "react";
import BannerButtons from "@/components/molecules/BannerButtons";
import styles from "@/globalStyles.module.css";

const BannerHalf = ({ title, description, buttons, imageUrl }) => (
  <div className={styles.bannerHalf}>
    <div className={styles.frame1}>
      <h1 className={styles.bannerTitle}>{title}</h1>
      <p className={styles.bannerDescription}>{description}</p>
      <BannerButtons buttons={buttons} variant="outline" color="outline-white"/>
    </div>
    <div
      className={styles.frame2}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  </div>
);

export default BannerHalf;