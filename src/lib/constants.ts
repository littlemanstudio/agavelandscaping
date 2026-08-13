export const SITE_URL = "https://agavelandscapingpr.com";
export const SITE_NAME = "AGAVE Landscaping";

export const PHONE_DISPLAY = "(939) 639-2292";
export const PHONE_TEL = "+19396392292";
export const PHONE_E164_DASHED = "+1-939-639-2292";
export const EMAIL = "agavelandscapingpr@gmail.com";
export const WHATSAPP_URL = "https://wa.me/19396392292";

export const ADDRESS = {
  addressLocality: "Ponce",
  addressRegion: "PR",
  addressCountry: "US",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/agavelandscapingpr",
  instagram: "https://www.instagram.com/agave.landscaping.pr/",
} as const;

export const NAV_LINKS = [
  { title: "Inicio", href: "/" },
  { title: "Nosotros", href: "/nosotros" },
  { title: "Servicios", href: "/servicios" },
  { title: "Proyectos", href: "/proyectos" },
  { title: "Cuidados", href: "/cuidados" },
  { title: "Contacto", href: "/contacto" },
] as const;

export const SERVICE_OPTIONS = [
  "Jardín",
  "Grama Artificial",
  "Upgrade de Jardín",
  "Mantenimiento Especializado de Jardín",
  "Sistema de Riego",
  "Sistema de Iluminación Solar/Eléctrico",
  "No estoy seguro",
] as const;
