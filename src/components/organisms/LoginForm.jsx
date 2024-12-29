import { Formik, Form } from "formik";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Link from "@/components/atoms/Link";
import FormGroup from "@/components/molecules/FormGroup";
import PasswordField from "@/components/molecules/PasswordField";
import LoginPageData from "@/data/LoginPageData";
import styles from "@/globalStyles.module.css";

const LoginForm = ({ initialValues, validationSchema, onSubmit, data }) => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({ values, errors, handleChange, handleBlur }) => (
      <Form>
        <div className={styles.loginInputBox}>
          <FormGroup
            label={data.form.email.label}
            type="email"
            name="email"
            id="email"
            placeholder={data.form.email.placeholder}
            error={errors.email}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <PasswordField
            label={data.form.password.label}
            name="password"
            id="password"
            placeholder={data.form.password.placeholder}
            error={errors.password}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <Button type="submit" disabled={false} className={styles.buttonSubmit}>
          <Icon className={styles.buttonIcon} icon={LoginPageData.icons.user} />
          {data.buttons.login}
        </Button>
        <div className={`${styles.loginLinks} d-flex justify-content-between mt-3`}>
          <div>
            <Link href="#" className={styles.loginLink}>
              {data.buttons.signupPromptQuestion}
            </Link>
            <Link href="#" className={styles.loginLink2}>
              {data.buttons.signupPromptLink}
            </Link>
          </div>
          <Link href="#" className={styles.loginLink}>
            {data.buttons.forgotPassword}
          </Link>
        </div>
      </Form>
    )}
  </Formik>
);

export default LoginForm;