import React from "react";
import Icon from "@/components/atoms/Icon";

const Logo = ({ logoIcon, className }) => (
  <div className={className}>
    <Icon icon={logoIcon} />
  </div>
);

export default Logo;