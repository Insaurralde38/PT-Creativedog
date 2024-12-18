import React from "react";
import styles from "@/globalStyles.module.css";

const SocialIcon = ({ name, url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialIcon}
    title={name}
    dangerouslySetInnerHTML={{ __html: icon }}
  ></a>
);

export default SocialIcon;