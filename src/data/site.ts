/** Site-wide SEO and branding defaults */
export const site = {
  name: "GDG Aranjuez",
  title: "GDG Aranjuez 2026",
  titleSuffix: "GDG Aranjuez 2026",
  description:
    "Comunidad de desarrolladores Google en Aranjuez. DevFest 24 y 25 de octubre de 2026.",
  locale: "es_ES",
  language: "es",
  twitter: "@gdgaranjuez",
  ogImage: "/og.jpg" as string | undefined,
  themeColor: "#4285f4",
  event: {
    name: "DevFest Aranjuez 2026",
    startDate: "2026-10-24",
    endDate: "2026-10-25",
    location: "Aranjuez, España",
  },
} as const;
