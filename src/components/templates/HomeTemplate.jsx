import React from "react";
import Categories from "@/components/organisms/Categories";
import Products from "@/components/organisms/Products";
import Hero from "@/components/organisms/Hero";
import BannerHalf from "@/components/organisms/BannerHalf";
import bannerHalfData from "@/data/BannerHalfData";

const HomeTemplate = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <Products/>
      <BannerHalf
        title={bannerHalfData.title}
        description={bannerHalfData.description}
        buttons={bannerHalfData.buttons}
        imageUrl={bannerHalfData.imageUrl}
      />
    </div>
  );
};

export default HomeTemplate;