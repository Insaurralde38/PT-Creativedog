import styles from "@/globalStyles.module.css";

const Input = ({ type, name, id, placeholder, onChange, className = "", ...props }) => (
  <input
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
    className={`${styles.loginInput} ${className}`}
    {...props}
  />
);

export default Input;