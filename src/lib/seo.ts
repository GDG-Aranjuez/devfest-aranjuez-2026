import { site } from "@/data/site";
import type { StructuredData } from "@/types/seo";
import { withBase } from "@/utils/path";

export function formatPageTitle(pageTitle?: string): string {
  if (!pageTitle || pageTitle === site.title) {
    return site.title;
  }

  if (pageTitle.includes(site.titleSuffix)) {
    return pageTitle;
  }

  return `${pageTitle} | ${site.titleSuffix}`;
}

export function sectionDescription(
  title: string,
  description?: string
): string {
  return (
    description ??
    `${title} de FresON Fest 2026 (GDG Aranjuez). Información disponible próximamente.`
  );
}

export function siteRootUrl(siteUrl: string | URL): string {
  return new URL(withBase("/"), siteUrl).href;
}

export function organizationSchema(siteUrl: string | URL): StructuredData {
  const url = siteRootUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url,
    description: site.description,
    sameAs: [
      "https://www.linkedin.com/company/gdg-aranjuez",
      "https://twitter.com/gdgaranjuez",
    ],
  };
}

export function websiteSchema(siteUrl: string | URL): StructuredData {
  const url = siteRootUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.title,
    url,
    inLanguage: site.language,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
}

export function eventSchema(siteUrl: string | URL): StructuredData {
  const url = siteRootUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: site.event.name,
    description: site.description,
    startDate: site.event.startDate,
    endDate: site.event.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: site.event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Aranjuez",
        addressCountry: "ES",
      },
    },
    organizer: {
      "@type": "Organization",
      name: site.name,
      url,
    },
  };
}

export function mergeStructuredData(
  siteUrl: string | URL,
  extra?: StructuredData | StructuredData[]
): StructuredData[] {
  const base = [organizationSchema(siteUrl), websiteSchema(siteUrl)];

  if (!extra) {
    return base;
  }

  return base.concat(extra);
}
