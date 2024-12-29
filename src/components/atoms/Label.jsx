import styles from "@/globalStyles.module.css";

const Label = ({ htmlFor, className = "", children }) => (
  <label htmlFor={htmlFor} className={`${styles.loginLabel} ${className}`}>
    {children}
  </label>
);

export default Label;