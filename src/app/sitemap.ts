import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/nosotros", priority: 0.8 },
    { path: "/servicios", priority: 0.9 },
    { path: "/proyectos", priority: 0.8 },
    { path: "/cuidados", priority: 0.6 },
    { path: "/contacto", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    priority,
  }));
}
