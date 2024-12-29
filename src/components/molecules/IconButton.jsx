import React from "react";
import Icon from "@/components/atoms/Icon";

const IconButton = ({ icon, onClick, className }) => (
  <div className={className} onClick={onClick}>
    <Icon icon={icon} />
  </div>
);

export default IconButton;