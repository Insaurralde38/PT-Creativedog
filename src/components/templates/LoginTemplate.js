import styles from "@/globalStyles.module.css";
import LoginForm from "@/components/organisms/LoginForm";

const LoginTemplate = ({ data, validationSchema, handleSubmit }) => (
  <div className={`${styles.loginContainer} container d-flex flex-column align-items-center`}>
    <h1 className={styles.loginTitle}>{data.title}</h1>
    <p className={styles.loginSubtitle}>{data.subtitle}</p>
    <LoginForm
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      data={data}
    />
  </div>
);

export default LoginTemplate;