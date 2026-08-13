import { ADDRESS, EMAIL, PHONE_E164_DASHED, SITE_URL, SOCIAL } from "@/lib/constants";

export function businessJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "AGAVE Landscaping",
    image: `${SITE_URL}/img/photos/og-cover.jpg`,
    url: pageUrl,
    telephone: PHONE_E164_DASHED,
    email: EMAIL,
    address: { "@type": "PostalAddress", ...ADDRESS },
    areaServed: "Puerto Rico",
    sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  };
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}
