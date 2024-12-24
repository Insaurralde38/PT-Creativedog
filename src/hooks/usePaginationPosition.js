import { useEffect } from "react";
import { paginationPosition } from "@/utils/paginationPosition";

const usePaginationPosition = () => {
  useEffect(() => {
    paginationPosition();
    window.addEventListener("resize", paginationPosition);
    window.addEventListener("scroll", paginationPosition);

    return () => {
      window.removeEventListener("resize", paginationPosition);
      window.removeEventListener("scroll", paginationPosition);
    };
  }, []);
};

export default usePaginationPosition;