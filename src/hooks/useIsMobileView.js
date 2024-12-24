import { useState, useEffect } from "react";
import { isMobile } from "@/utils/isMobile";

const useIsMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobileView(isMobile());
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return isMobileView;
};

export default useIsMobileView;