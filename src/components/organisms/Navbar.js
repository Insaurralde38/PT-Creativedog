import React, { useState, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import navbarData from "@/data/NavbarData";
import styles from "@/globalStyles.module.css";
import Logo from "@/components/molecules/Logo";
import Menu from "@/components/molecules/Menu";
import IconButton from "@/components/molecules/IconButton";
import { handleTouchStart, handleTouchMove, handleTouchEnd } from "@/utils/touchHandlers";

const Navbar = ({ isFixed, isHidden }) => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  return (
    <nav
      className={`${styles.navbar} ${isFixed ? styles.fixed : ""} ${
        isHidden ? styles.hidden : ""
      }`}
      onTouchStart={(e) => handleTouchStart(e, touchStartX)}
      onTouchMove={(e) => handleTouchMove(e, touchEndX)}
      onTouchEnd={() =>
        handleTouchEnd(touchStartX, touchEndX, isMenuOpen, setIsMenuOpen)
      }
    >
      <Logo logoIcon={navbarData.logoIcon} className={styles.navbarLogo} />
      {isAuthenticated && (
        <>
          <IconButton
            icon={navbarData.mobileMenu.icons.menu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.navbarToggle}
          />
          <Menu
            items={navbarData.menu}
            isOpen={isMenuOpen}
            className={`${styles.navbarMenu} ${isMenuOpen ? styles.menuOpen : ""}`}
            toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          />
          <IconButton
            icon={navbarData.logout.icon}
            onClick={logout}
            className={styles.navbarLogout}
          />
        </>
      )}
    </nav>
  );
};

export default Navbar;