export type Locale = "es" | "en";

const navLinksEs = [
  { title: "Inicio", href: "/" },
  { title: "Nosotros", href: "/nosotros" },
  { title: "Servicios", href: "/servicios" },
  { title: "Proyectos", href: "/proyectos" },
  { title: "Cuidados", href: "/cuidados" },
  { title: "Contacto", href: "/contacto" },
] as const;

const navLinksEn = [
  { title: "Home", href: "/en" },
  { title: "About", href: "/en/nosotros" },
  { title: "Services", href: "/en/servicios" },
  { title: "Projects", href: "/en/proyectos" },
  { title: "Care", href: "/en/cuidados" },
  { title: "Contact", href: "/en/contacto" },
] as const;

export function getNavLinks(locale: Locale) {
  return locale === "en" ? navLinksEn : navLinksEs;
}

/**
 * Displayed labels only — the underlying value submitted/validated/emailed
 * always stays the Spanish canonical string from SERVICE_OPTIONS, regardless
 * of which language the visitor filled the form in.
 */
export const serviceOptionLabelsEn: Record<string, string> = {
  "Jardín": "Garden Design",
  "Grama Artificial": "Artificial Turf",
  "Upgrade de Jardín": "Garden Upgrade",
  "Mantenimiento Especializado de Jardín": "Specialized Garden Maintenance",
  "Sistema de Riego": "Irrigation System",
  "Sistema de Iluminación Solar/Eléctrico": "Solar/Electric Lighting System",
  "No estoy seguro": "Not sure",
};

/**
 * Both locales use identical slugs (e.g. /servicios and /en/servicios), so
 * mapping a path to its counterpart is just prepending/stripping "/en".
 */
export function localePath(pathname: string, targetLocale: Locale): string {
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const esPath = isEnglish ? pathname.slice(3) || "/" : pathname;

  if (targetLocale === "es") return esPath;
  return esPath === "/" ? "/en" : `/en${esPath}`;
}
