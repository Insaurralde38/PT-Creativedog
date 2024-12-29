import useTogglePasswordVisibility from "@/hooks/useTogglePasswordVisibility";
import ErrorText from "@/components/atoms/ErrorText";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import IconButton from "@/components/molecules/IconButton";
import LoginPageData from "@/data/LoginPageData";
import styles from "@/globalStyles.module.css";

const PasswordField = ({ label, name, id, placeholder, error, value, onChange, onBlur }) => {
  const { showPassword, togglePasswordVisibility } = useTogglePasswordVisibility();

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
          onClick={togglePasswordVisibility}
          icon={showPassword ? LoginPageData.icons.eye : LoginPageData.icons.eyeOff}
        />
      </div>
      {error && <ErrorText className="text-danger">{error}</ErrorText>}
    </div>
  );
};

export default PasswordField;