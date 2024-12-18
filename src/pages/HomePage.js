import React, { useState, useEffect } from "react";
import HomeTemplate from "@/components/templates/HomeTemplate";
import Navbar from "@/components/organisms/Navbar";
import { handleNavbarScroll } from "@/utils/handleNavbarScroll";

const HomePage = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(true);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isBelowHero, setIsBelowHero] = useState(false);

  useEffect(() => {
    const handleScroll = handleNavbarScroll({
      setIsNavbarFixed,
      setIsNavbarHidden,
      setIsBelowHero,
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      <Navbar isFixed={isNavbarFixed} isHidden={isNavbarHidden} />
      <HomeTemplate />
    </div>
  );
};

export default HomePage;