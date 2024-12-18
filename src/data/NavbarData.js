import icons from "./Icons";

const navbarData = {
  logoIcon: icons.logo.commerce,
  menu: [
    {
      id: 1,
      label: "Inicio",
      link: "#",
    },
    {
      id: 2,
      label: "Productos",
      link: "#",
      icon: icons.chevronRight,
    },
    {
      id: 3,
      label: "Nosotros",
      link: "#",
    },
    {
      id: 4,
      label: "Contacto",
      link: "#",
    },
  ],
  logout: {
    icon: icons.logout,
    altText: "Cerrar sesión",
  },
  mobileMenu: {
    icons: {
      close: icons.x,
      menu: icons.menu,
    },
    login: {
      label: "Si ya tenés cuenta",
      button: "Ingresá ahora",
      icon:icons.chevronRight,
      link: "¿No tenés cuenta? Registrate"
    },
  },
};

export default navbarData;