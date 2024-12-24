import { useState } from "react";

const useTogglePasswordVisibility = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return { showPassword, togglePasswordVisibility };
};

export default useTogglePasswordVisibility;