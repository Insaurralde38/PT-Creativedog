import React from "react";
import { formatSubtitle } from "@/utils/formatSubtitle";
import LinkButton from "@/components/atoms/LinkButton";
import CategoryCarousel from "@/components/molecules/CategoryCarousel";
import Header from "@/components/molecules/Header";
import categoriesData from "@/data/CategoriesData";
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