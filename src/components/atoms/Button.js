import styles from "@/globalStyles.module.css";

const Button = ({
  type = "button",
  className = "",
  disabled = false,
  onClick = () => {},
  children,
  variant = "primary",
  color = "primary",
  hideMobileButton2 = false,
  buttonNormalSize = false
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[color]} ${hideMobileButton2 ? styles.hideMobileButton2 : ""} ${buttonNormalSize ? styles.buttonNormalSize : ""} ${className}`;
  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;