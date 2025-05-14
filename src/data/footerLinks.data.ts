import { AppRoutes } from "../router/routes.model";
export const footerLinks = {
  Explorar: [
    { path: AppRoutes.HOME, label: "Inicio" },
    { path: AppRoutes.ABOUT, label: "Sobre nosotros" },
    { path: AppRoutes.CONTACT, label: "Contáctanos" },
    { path: AppRoutes.ADOPT, label: "Adóptame" },
  ],
  links: [
    { path: "#", label: "FAQs" },
    { path: "#", label: "Ayuda" },
    { path: "#", label: "Política de privacidad" },
    { path: "#", label: "Términos y condiciones" },
  ],
};
