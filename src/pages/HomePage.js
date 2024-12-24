import React from "react";
import HomeTemplate from "@/components/templates/HomeTemplate";
import Navbar from "@/components/organisms/Navbar";
import useNavbarState from "@/hooks/useNavbarState";

const HomePage = () => {
  const { isNavbarFixed, isNavbarHidden } = useNavbarState();

  return (
    <div className="bg-white">
      <Navbar isFixed={isNavbarFixed} isHidden={isNavbarHidden} />
      <HomeTemplate />
    </div>
  );
};

export default HomePage;