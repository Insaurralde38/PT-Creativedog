import React from "react";
import categoriesData from "@/data/CategoriesData";
import Header from "@/components/molecules/Header";
import LinkButton from "@/components/atoms/LinkButton";
import CategoryCarousel from "@/components/molecules/CategoryCarousel";
import { formatSubtitle } from "@/utils/formatSubtitle";
import styles from "@/globalStyles.module.css";

const Categories = () => {
  const { title, subtitle, link } = categoriesData;
  const formattedSubtitle = formatSubtitle(subtitle);

  return (
    <div className={styles.categories}>
      <Header
        title={title}
        subtitle={formattedSubtitle}
        headerClassName={styles.categoriesHeader}
        titleBoxClassName={styles.categoriesTitleBox}
        headerButton={
          <LinkButton url={link.url} text={link.text} icon={link.icon} />
        }
      />
      <CategoryCarousel />
    </div>
  );
};

export default Categories;