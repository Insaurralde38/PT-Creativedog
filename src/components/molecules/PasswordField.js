import { useState } from "react";
import Input from "@/components/atoms/Input";
import IconButton from "./IconButton";
import Label from "@/components/atoms/Label";
import ErrorText from "@/components/atoms/ErrorText";
import LoginPageData from "@/data/LoginPageData";
import styles from "@/globalStyles.module.css"

const PasswordField = ({ label, name, id, placeholder, error, value, onChange, onBlur }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3">
      <Label htmlFor={id} className="form-label">
        {label}
      </Label>
      <div className="input-group">
        <Input
          type={showPassword ? "text" : "password"}
          name={name}
          id={id}
          placeholder={placeholder}
          className="form-control"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <IconButton
          className={styles.eyeButton}
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? LoginPageData.icons.eye : LoginPageData.icons.eyeOff}
        />
      </div>
      {error && <ErrorText className="text-danger">{error}</ErrorText>}
    </div>
  );
};

export default PasswordField;