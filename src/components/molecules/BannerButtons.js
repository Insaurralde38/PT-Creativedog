import React from "react";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import styles from "@/globalStyles.module.css";

const BannerButtons = ({ buttons, variant = "", color = "", hideMobileButton2 = false, buttonNormalSize = false }) => (
  <div className={styles.buttons}>
    <Button 
      className={styles.buttonMain}
      buttonNormalSize={buttonNormalSize}
      href={buttons.button1.link}
    >
      {buttons.button1.label}
      {buttons.button1.icon && (
        <Icon className={styles.buttonIcon} icon={buttons.button1.icon} />
      )}
    </Button>
    <Button
      variant={variant}
      color={color}
      hideMobileButton2={hideMobileButton2}
      className={styles.buttonSecondary}
      href={buttons.button2.link}
    >
      {buttons.button2.label}
    </Button>
  </div>
);

export default BannerButtons;