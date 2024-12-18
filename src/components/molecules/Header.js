import React from "react";
import Title from "@/components/atoms/Title";
import Subtitle from "@/components/atoms/Subtitle";

const Header = ({ title, subtitle, headerClassName="", titleBoxClassName="", headerButton }) => (
  <div className={headerClassName}>
    <div className={titleBoxClassName}>
      <Title text={title.text} highlightedText={title.highlightedText} />
      <Subtitle text={subtitle} />
    </div>
    <div>{headerButton}</div>
  </div>
);

export default Header;