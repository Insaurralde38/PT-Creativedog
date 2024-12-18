import React from "react";

const Icon = ({ icon, className }) => (
  <span className={className} dangerouslySetInnerHTML={{ __html: icon }}></span>
);

export default Icon;