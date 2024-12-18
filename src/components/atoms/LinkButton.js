import React from "react";
import Icon from "@/components/atoms/Icon";
import styles from "@/globalStyles.module.css";

const LinkButton = ({ url, text, icon }) => (
  <a href={url} className={styles.categoriesLink}>
    {text}
    <Icon className={styles.categoriesLinkIcon} icon={icon} />
  </a>
);

export default LinkButton;