import React from "react";
import SocialIcon from "@/components/atoms/SocialIcon";
import Text from "@/components/atoms/Text";
import Link from "@/components/atoms/Link";
import Logo from "@/components/molecules/Logo";
import styles from "@/globalStyles.module.css";

const Footer = ({ logo, socialIcons, terms, copyright, designAndDev }) => {
  return (
    <footer>
      <div className={styles.footerTop}>
        <Logo logoIcon={logo} className={styles.footerLogo} />
        <div className={styles.socialIcons}>
          {socialIcons.map((icon) => (
            <SocialIcon key={icon.name} name={icon.name} url={icon.url} icon={icon.icon} />
          ))}
        </div>
      </div>
      <div className={`${styles.footerBottom} d-flex justify-content-around align-items-center`}>
        <Text className={`${styles.footerBottomText} ${styles.footerTerms}`}>{terms}</Text>
        <Text className={styles.footerBottomText}>{copyright}</Text>
        <Text className={styles.footerBottomText}>
          {designAndDev.text}{" "}
          <Link
            href={designAndDev.agency.link}
            className={styles.footerBottomLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {designAndDev.agency.name}
          </Link>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;