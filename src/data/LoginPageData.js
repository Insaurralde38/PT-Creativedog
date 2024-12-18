import icons from "./Icons";

const LoginPageData = {
  title: "Ingresar",
  subtitle: "Ingresá con tu email y contraseña",
  form: {
    email: {
      label: "Correo Electrónico",
      placeholder: "",
    },
    password: {
      label: "Contraseña",
      placeholder: "",
    },
  },
  buttons: {
    login: "Ingresar",
    signupPromptQuestion: "¿No tenés cuenta? ",
    signupPromptLink: "Ingresá acá",
    forgotPassword: "Olvidé mi contraseña",
  },
  icons: {
    eye: icons.eye,
    eyeOff: icons.eyeOff,
    user: icons.user,
  },
};

export default LoginPageData;