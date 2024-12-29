import icons from "@/data/Icons";
const currentYear = new Date().getFullYear();

const footerData = {
  logo: icons.logo.commerce,
  terms: "Términos y Condiciones",
  copyright: `Todos los derechos reservados a Creativedog Agency - ${currentYear}`,
  designAndDev: {
    text: "Diseño y desarrollo con ❤️ por",
    agency: {
      name: "Creativedog Agency",
      link: "https://www.creativedogagency.com",
    },
  },
  social: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/creativedog.agency/",
      icon: icons.logo.instagram,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/creativedog.agency/",
      icon: icons.logo.facebook,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UC_ZaZaa-twaE7NsrinC8Mbw",
      icon: icons.logo.youTube,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@creativedog.agency?_t=8mobDwYGXl0&_r=1",
      icon: icons.logo.tikTok,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/11290854/",
      icon: icons.logo.linkedIn,
    },
    {
      name: "X",
      url: "https://x.com/creativedogweb",
      icon: icons.logo.x,
    },
  ],
};

export default footerData;