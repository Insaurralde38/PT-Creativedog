import React from "react";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Link from "@/components/atoms/Link";
import IconButton from "@/components/molecules/IconButton";
import navbarData from "@/data/NavbarData";
import styles from "@/globalStyles.module.css";

const Menu = ({ items, isOpen, className, toggleMenu }) => (
  <div className={`${className} ${isOpen ? styles.menuOpen : ""}`}>
    <IconButton
      icon={navbarData.mobileMenu.icons.close}
      onClick={toggleMenu}
      className={styles.navbarMenuClose}
    />
    {items.map((item) => (
      <div key={item.id} className={styles.navbarMenuItem}>
        <Link href={item.link}>
          {item.label}
          {item.icon && <Icon icon={item.icon} className={styles.navbarMenuItemIcon} />}
        </Link>
      </div>
    ))}
    <div className={styles.navbarMenuLogin}>
      <p className={styles.navbarMenuLoginLabel}>{navbarData.mobileMenu.login.label}</p>
      <Button
        variant="primary-black"
        color="primary-white"
        className={styles.navbarMenuLoginButton}
      >
        {navbarData.mobileMenu.login.button}
        <Icon icon={navbarData.mobileMenu.login.icon} />
      </Button>
      <p className={styles.navbarMenuLoginLink}>{navbarData.mobileMenu.login.link}</p>
    </div>
  </div>
);

export default Menu;