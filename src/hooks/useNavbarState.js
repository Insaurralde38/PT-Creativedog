import { useState, useEffect } from "react";
import { handleNavbarScroll } from "@/utils/handleNavbarScroll";

const useNavbarState = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(true);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isBelowHero, setIsBelowHero] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = handleNavbarScroll({
        setIsNavbarFixed,
        setIsNavbarHidden,
        setIsBelowHero,
      });
  
      const checkAndAddScrollListener = () => {
        if (document.querySelector("#hero-section")) {
          window.addEventListener("scroll", handleScroll);
        }
      };
      
      setTimeout(checkAndAddScrollListener, 0);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);  

  return { isNavbarFixed, isNavbarHidden, isBelowHero };
};

export default useNavbarState;